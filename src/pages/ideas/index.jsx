import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MarkdownRenderer from 'react-markdown-renderer';
import Dropdown from '@wonism/react-dropdown';
import fp from 'lodash/fp';
import { TODOS, TIL, BOOKMARKS } from '~/constants';
import { PRIMARY_COLOR } from '~/components/Common/constants';
import { fetchIdeas, setIdeasMenu } from '~/store/ideas/actions';
import * as ideasSelectors from '~/store/ideas/selectors';
import PostWrapper from '~/components/Common/PostWrapper';
import formattedDate from '~/utils/formattedDate';
import './index.less';

const IdeasWrapper = PostWrapper.extend`
  margin: auto;
  padding: 120px 0 20px;
  max-width: 720px;
  min-height: 100vh;
  text-align: center;
  @media (max-width: 414px) {
    padding: 70px 16px 20px 24px;
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
    color: #555;
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
    fetchIdeas: PropTypes.func.isRequired,
    setIdeasMenu: PropTypes.func.isRequired,
    data: PropTypes.shape({
      todos: PropTypes.array,
      til: PropTypes.array,
      bookmarks: PropTypes.array,
    }),
    isFailed: PropTypes.bool.isRequired,
    menu: PropTypes.oneOf([TODOS, TIL, BOOKMARKS]).isRequired,
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
          Failed to fetch datas
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

export default connect(
  state => ({
    menu: ideasSelectors.getMenu(state),
    data: ideasSelectors.getData(state),
    isFailed: ideasSelectors.isFailed(state),
  }),
  {
    fetchIdeas,
    setIdeasMenu,
  }
)(Ideas);
