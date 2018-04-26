import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MarkdownRenderer from 'react-markdown-renderer';
import styled from 'styled-components';
import fp from 'lodash/fp';
import { TODOS, TIL, BOOKMARKS } from '~/constants';
import { PRIMARY_COLOR } from '~/components/Common/constants';
import { fetchIdeas, setIdeasMenu } from '~/store/ideas/actions';
import * as ideasSelectors from '~/store/ideas/selectors';
import PostWrapper from '~/components/Common/PostWrapper';
import formattedDate from '~/utils/formattedDate';

const IdeasWrapper = PostWrapper.extend`
  margin: auto;
  padding: 120px 0 20px;
  max-width: 720px;
  min-height: 100vh;
  font-size: 0;
  text-align: center;
  @media (max-width: 414px) {
    padding: 70px 16px 20px 24px;
  }

  ul {
    text-align: left;
  }

  li {
    margin: 16px 0 0;
    list-style: decimal;
    font-size: 14px;
    font-weight: 400;
    &.strike {
      text-decoration: line-through;
    }
  }

  pre {
    margin: 16px 0 0;
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

const Button = styled.button`
  padding: 2px 8px;
  color: ${PRIMARY_COLOR};
  background-color: #fff;
  border-width: 1px;
  border-left-width: 0;
  border-style: solid;
  border-color: ${PRIMARY_COLOR};
  outline: 0;
  font-size: 14px;

  &:first-child {
    border-left-width: 1px;
  }

  &.active,
  &:hover {
    color: #fff;
    background-color: ${PRIMARY_COLOR};
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

    return (
      <IdeasWrapper>
        <Button
          className={menu === TODOS ? 'active' : ''}
          onClick={() => { setIdeasMenu(TODOS); }}
        >
          {fp.capitalize(TODOS)}
        </Button>
        <Button
          className={menu === TIL ? 'active' : ''}
          onClick={() => { setIdeasMenu(TIL); }}
        >
          {fp.capitalize(TIL)}
        </Button>
        <Button
          className={menu === BOOKMARKS ? 'active' : ''}
          onClick={() => { setIdeasMenu(BOOKMARKS); }}
        >
          {fp.capitalize(BOOKMARKS)}
        </Button>
        <ul>
          {fp.isObject(data) ? (
            fp.flow(
              fp.get(fp.toLower(menu)),
              fp.map((element) => {
                // todos
                if (fp.flow(fp.keys, fp.includes('doneAt'))(element)) {
                  return (
                    <li key={element.content} className={fp.isNil(element.doneAt) ? '' : 'strike'}>
                      {element.content}
                      <br />
                      <small>{formattedDate(element.createdAt)}</small>
                    </li>
                  );
                }

                // bookmarks
                if (fp.flow(fp.keys, fp.includes('link'))(element)) {
                  return (
                    <li key={element.link}>
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
                      <MarkdownRenderer markdown={element.content} />
                      <small>{formattedDate(element.createdAt)}</small>
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
