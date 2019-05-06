import React, { PureComponent } from 'react';
import { bool, oneOf, shape, func, array } from 'prop-types';
import { css } from 'styled-components';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MarkdownRenderer from 'react-markdown-renderer';
import Dropdown from '@wonism/react-dropdown';
// import { RingLoader } from 'react-spinners';
import fp from 'lodash/fp';
import { TODOS, TIL, BOOKMARKS } from '~/constants';
import * as ideasActions from '~/store/ideas/actions';
import * as ideasSelectors from '~/store/ideas/selectors';
import Layout from '~/components/Layout';
import PostWrapper from '~/components/Common/PostWrapper';
import { PRIMARY_COLOR } from '~/components/Common/constants';
import formattedDate from '~/utils/formattedDate';

const dropdownCss = css`
  .Dropdown-root{position:relative}.Dropdown-control{position:relative;overflow:hidden;background-color:${({ theme: { backgroundColor } }) => backgroundColor};border:1px solid #ccc;border-radius:2px;box-sizing:border-box;color:#333;cursor:default;outline:0;padding:8px 52px 8px 10px;transition:all 200ms ease}.Dropdown-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.Dropdown-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:' ';display:block;height:0;margin-top:-ceil(2.5);position:absolute;right:10px;top:14px;width:0}.is-open .Dropdown-arrow{border-color:transparent transparent #999;border-width:0 5px 5px}.Dropdown-menu{background-color:${({ theme: { backgroundColor } }) => backgroundColor};border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;overflow-y:auto;position:absolute;top:100%;width:100%;z-index:1000;-webkit-overflow-scrolling:touch}.Dropdown-menu .Dropdown-group>.Dropdown-title{padding:8px 10px;color:${({ theme: { color } }) => color};font-weight:700;text-transform:capitalize}.Dropdown-option{box-sizing:border-box;color:rgba(51,51,51,.8);cursor:pointer;display:block;padding:8px 10px}.Dropdown-option:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.Dropdown-option:hover{background-color:#f2f9fc;color:${({ theme: { color } }) => color}}.Dropdown-option.is-selected{background-color:#f2f9fc;color:${({ theme: { color } }) => color}}.Dropdown-noresults{box-sizing:border-box;color:#ccc;cursor:default;display:block;padding:8px 10px}
`;

const IdeasWrapper = PostWrapper.extend`
  margin: auto;
  padding: 120px 0 20px;
  max-width: 720px;
  min-height: 100vh;
  text-align: center;

  ${dropdownCss}

  @media (max-width: 1024px) {
    padding: 70px 16px 20px 24px;
  }

  .loading-wrapper {
    & > div {
      margin: auto;
    }
  }

  ul {
    text-align: left;
  }

  li {
    margin: 16px 0 0;
    font-size: 14px;
    font-weight: 400;

    &.strike {
      text-decoration: line-through;
    }

    & > span {
      float: left;
      margin: 0 4px 0 0;
    }
  }

  pre {
    margin: 16px 0 0;
    padding: 0 0 8px 0;
    overflow-x: auto;
    overflow-y: hidden;
  }

  code {
    color: ${({ theme: { color } }) => color};
    font-weight: 300;
  }

  small {
    display: block;
    margin: 8px 0;
    font-size: 10px;
  }
`;

class Ideas extends PureComponent {
  static propTypes = {
    fetchIdeas: func.isRequired,
    setIdeasMenu: func.isRequired,
    data: shape({
      todos: array,
      til: array,
      bookmarks: array,
    }),
    isFailed: bool.isRequired,
    menu: oneOf([TODOS, TIL, BOOKMARKS]).isRequired,
  };

  static defaultProps = {
    data: null,
  };

  static formatOption = option => ({
    value: option,
    label: fp.capitalize(option),
  });

  componentDidMount() {
    this.props.fetchIdeas();
  }

  render() {
    const { setIdeasMenu, menu, data, isFailed } = this.props;

    if (isFailed) {
      return (
        <IdeasWrapper>
          <Helmet>
            <title>WONISM | IDEAS</title>
            <meta name="og:title" content="WONISM | IDEAS" />
          </Helmet>
          Failed to fetch datas
        </IdeasWrapper>
      );
    }

    if (fp.isEmpty(data)) {
      return (
        <IdeasWrapper>
          <Helmet>
            <title>WONISM | IDEAS</title>
            <meta name="og:title" content="WONISM | IDEAS" />
          </Helmet>
          <div className="loading-wrapper">
            {/*
            <RingLoader
              color={PRIMARY_COLOR}
              loading
            />
            */}
            ㅋㅋㅋ
          </div>
        </IdeasWrapper>
      );
    }

    const options = [
      Ideas.formatOption(TODOS),
      Ideas.formatOption(TIL),
      Ideas.formatOption(BOOKMARKS),
    ];

    return (
      <IdeasWrapper>
        <Helmet>
          <title>WONISM | IDEAS</title>
          <meta name="og:title" content="WONISM | IDEAS" />
        </Helmet>
        <Dropdown
          options={options}
          onChange={fp.flow(fp.get('value'), setIdeasMenu)}
          value={Ideas.formatOption(menu)}
        />
        <ul>
          {fp.isObject(data) ? (
            fp.flow(
              fp.get(fp.toLower(menu)),
              fp.map((element) => {
                // todos
                if (fp.flow(fp.keys, fp.includes('doneAt'))(element)) {
                  return (
                    <li key={element.content} className={fp.isNil(element.doneAt) ? '' : 'strike'}>
                      <span>
                        {fp.flow(
                          fp.get(fp.toLower(menu)),
                          fp.findIndex({ content: element.content }),
                          fp.add(1),
                          fp.add(fp.__, '. ')
                        )(data)}
                      </span>
                      {element.content}
                      <br />
                      <small>- {formattedDate(element.createdAt)}</small>
                    </li>
                  );
                }

                // bookmarks
                if (fp.flow(fp.keys, fp.includes('link'))(element)) {
                  return (
                    <li key={element.link}>
                      <span>
                        {fp.flow(
                          fp.get(fp.toLower(menu)),
                          fp.findIndex({ link: element.link }),
                          fp.add(1),
                          fp.add(fp.__, '. ')
                        )(data)}
                      </span>
                      <a href={element.link} target="_blank" rel="noopener noreferrer">
                        {element.name}
                      </a>
                    </li>
                  );
                }

                // til
                if (fp.flow(fp.keys, fp.includes('createdAt'))(element)) {
                  return (
                    <li key={element.content}>
                      <span>
                        {fp.flow(
                          fp.get(fp.toLower(menu)),
                          fp.findIndex({ content: element.content }),
                          fp.add(1),
                          fp.add(fp.__, '. ')
                        )(data)}
                      </span>
                      <MarkdownRenderer markdown={element.content} />
                      <small>- {formattedDate(element.createdAt)}</small>
                    </li>
                  );
                }

                return null;
              })
            )(data)
          ) : null}
        </ul>
      </IdeasWrapper>
    );
  }
}

const ConnectedIdeas = connect(
  state => ({
    menu: ideasSelectors.getMenu(state),
    data: ideasSelectors.getData(state),
    isFailed: ideasSelectors.isFailed(state),
  }),
  {
    fetchIdeas: ideasActions.fetchIdeas,
    setIdeasMenu: ideasActions.setIdeasMenu,
  }
)(Ideas);

const IdeasLayout = props => (
  <Layout {...props}>
    <ConnectedIdeas />
  </Layout>
);

export default IdeasLayout;
