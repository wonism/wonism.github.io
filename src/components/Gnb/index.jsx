import React from 'react';
import { shape, arrayOf, bool, func, string } from 'prop-types';
import { Link } from 'gatsby';
import Toggle from 'react-toggle';
import styled from 'styled-components';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import FaHome from 'react-icons/lib/fa/home';
import FaSearch from 'react-icons/lib/fa/search';
import FaTags from 'react-icons/lib/fa/tags';
import { flow, isEqual, isEmpty, map, filter, toLower, replace, startsWith, get, size, uniq } from 'lodash/fp';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '~/components/Common/constants';

const StylesWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato');
`;

const Hamburger = styled.div`
  position: fixed;
  display: none !important;
  top: 0;
  right: 0;
  z-index: 5000;

  @media (max-width: 1024px) {
    display: block !important;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  & > div {
    float: left;
  }

  &.hamburger{font:inherit;display:inline-block;overflow:visible;margin:0;padding:15px;cursor:pointer;transition-timing-function:linear;transition-duration:.15s;transition-property:opacity,filter;text-transform:none;color:inherit;border:0;background-color:transparent}
  &.hamburger:hover{opacity:.7}

  .hamburger-box{position:relative;display:inline-block;width:40px;height:24px}
  .hamburger-inner{top:50%;display:block;margin-top:-2px}
  .hamburger-inner,.hamburger-inner:after,.hamburger-inner:before{position:absolute;width:40px;height:4px;transition-timing-function:ease;transition-duration:.15s;transition-property:transform;border-radius:4px;background-color:${({ theme: { color } }) => color}}
  .hamburger-inner:after,.hamburger-inner:before{display:block;content:""}
  .hamburger-inner:before{top:-10px}
  .hamburger-inner:after{bottom:-10px}

  &.hamburger--spin .hamburger-inner{transition-timing-function:cubic-bezier(.55,.055,.675,.19);transition-duration:.22s}
  &.hamburger--spin .hamburger-inner:before{transition:top .1s ease-in .25s,opacity .1s ease-in}
  &.hamburger--spin .hamburger-inner:after{transition:bottom .1s ease-in .25s,transform .22s cubic-bezier(.55,.055,.675,.19)}
  &.hamburger--spin.is-active .hamburger-inner{transition-delay:.12s;transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:rotate(225deg)}
  &.hamburger--spin.is-active .hamburger-inner:before{top:0;transition:top .1s ease-out,opacity .1s ease-out .12s;opacity:0}
  &.hamburger--spin.is-active .hamburger-inner:after{bottom:0;transition:bottom .1s ease-out,transform .22s cubic-bezier(.215,.61,.355,1) .12s;transform:rotate(-90deg)}
`;

const MovableFaCaretDown = styled(FaCaretDown)`
  transition: transform .4s ease-out .1s;
  transform: rotate(180deg);

  &.is-active {
    transform: rotate(0deg);
  }
`;

const GnbWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 18px;
  font-family: Lato;
  font-weight: 600;
  z-index: 3000;
  @media (max-width: 1024px) {
    height: 48px;
    line-height: 48px;
  }
`;

const SubMenu = styled.ul`
  position: absolute;
  top: 100px;
  line-height: 1.8em;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  transition: max-height .4s ease-out .1s;

  li {
    padding: 6px 12px;
  }

  a:hover {
    color: ${SECONDARY_COLOR};
    text-decoration: underline;
  }
`;

const ListMenu = styled.li`
  display: inline-block;
  position: relative;
  padding: 0 0 0 2em;
  font-weight: 500;
  font-size: 14px;
  @media (max-width: 1024px) {
    display: none;
  }

  a {
    color: ${({ theme: { color } }) => color};
  }

  ul {
    max-height: 0;
    white-space: nowrap;
  }

  &:hover {
    ul {
      max-height: 400px;
    }
  }

  small {
    font-size: 12px;
  }
`;

const Home = styled(FaHome)`
  font-size: 32px;
`;

const StyledLink = styled(Link)`
  &.active {
    color: ${SECONDARY_COLOR};
    text-decoration: underline;
  }

  &:hover {
    color: ${SECONDARY_COLOR};
    text-decoration: underline;
  }
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 240px;
  margin: auto;
  padding: 0 36px 0 0;
  text-align: right;
  @media (max-width: 1024px) {
    display: none;
    position: relative;
    padding: 0;
    width: 100%;
  }

  label {
    position: relative;
    padding: 0 8px 0 0;
    z-index: 1001;
  }
`;

const SearchBar = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 36px;
  margin: auto;
  padding: 0 .4em;
  width: 240px;
  height: 2.4em;
  line-height: 2.4em;
  border-radius: 0;
  border: 1px solid #555;
  font-size: 18px;
  outline: 0;
  z-index: 1000;
  @media (max-width: 1024px) {
    display: none;
    right: 0;
    left: 0;
    width: 100%;
  }

  &:focus {
    border-color: ${PRIMARY_COLOR};
  }
`;

const SearchedPosts = styled.div`
  position: absolute;
  top: 100px;
  right: 3px;
  width: 317px;
  max-height: 500px;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  box-shadow: ${({ isEmpty }) => (isEmpty ? '0 0 0' : '0 2px 4px rgba(0,0,0,0.2)')};
  box-shadow: ${({ isEmpty }) => (isEmpty ? '0 0 0' : '0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)')};
  font-weight: 400;
  overflow-y: auto;
  @media (max-width: 1024px) {
    display: none;
    position: static;
    width: 100%;
    max-height: none;
    box-shadow: 0 0 0;
  }
`;

const Title = styled.h4`
  width: 100%;
  height: 2.4em;
  line-height: 2.4em;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Summary = styled.p`
  cursor: pointer;
  margin: 0 0 2px;
  height: 1.8em;
  line-height: 1.8em;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Tag = styled.span`
  padding: 0 0 0 .4em;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchedPost = styled.article`
  padding: 4px 8px;
  border-bottom: 1px solid #eee;
  line-height: 1.4em;

  h4,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Background = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { color } }) => color};
  transition: opacity .4s ease-out .1s;
  opacity: ${({ isActive }) => (isActive ? '.5' : '0')};
  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenus = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 16px;
  width: 80%;
  height: 100%;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  transition: left.4s ease-out .1s;
  z-index: 3;
  overflow-y: auto;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled.section`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  @media (max-width: 1024px) {
    display: block;
    line-height: 48px;
    pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};

    ul,
    li,
    div,
    input {
      display: block;
    }
  }

  li {
    padding: 0;
    width: 100%;

    & > ul {
      position: static;
      max-height: ${({ isSubActive }) => (isSubActive ? '0' : '360px')} !important;
      font-size: 12px;
    }
  }

  & > div + div {
    left: ${({ isActive }) => (isActive ? '0' : '-100%')};
    padding: 0 16px 16px;
    box-shadow: ${({ isActive }) => (isActive ? '0 2px 4px rgba(0,0,0,0.2)' : '0 0 0')};
    box-shadow: ${({ isActive }) => (isActive ? '0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)' : '0 0 0')};
  }
`;

const ToggleWrapper = styled.label`
  position: absolute;
  top: 0;
  right: 294px;
  z-index: 3;

  @media (max-width: 414px) {
    top: 15px;
    right: auto;
    left: 16px;
  }

  .react-toggle {
    touch-action: pan-x;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    transition: opacity 0.25s;
  }
  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #4D4D4D;
    transition: all 0.2s ease;
  }
  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #000000;
  }
  .react-toggle--checked .react-toggle-track {
    background-color: #000000;
  }
  .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #000000;
  }
  .react-toggle-track-check {
    display: flex;
    align-items: center;
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    transition: opacity 0.25s ease;
  }
  .react-toggle-track-x {
    display: flex;
    align-items: center;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    transition: opacity 0.25s ease;
  }
  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }
  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid #4D4D4D;
    border-radius: 50%;
    background-color: #FAFAFA;
    box-sizing: border-box;
    transition: all 0.25s ease;
  }
  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: #4D4D4D;
  }
  .react-toggle--focus .react-toggle-thumb {
    box-shadow: 0px 0px 2px 3px #0099E0;
  }
  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    box-shadow: 0px 0px 5px 5px #0099E0;
  }
`;

const Gnb = ({
  location,
  categories,
  postInformations,
  hasPortfolio,
  navigateToPath,
  inputKeyword,
  searchKeyword,
  isMenuOpened,
  openMenu,
  closeMenu,
  isSubMenuOpened,
  openSubMenu,
  closeSubMenu,
  toggleTheme,
  isDracula,
}) => {
  const filteredPosts = !isEmpty(searchKeyword) ?
    filter(({ category = '', title = '', tags = [] }) => {
      const c = toLower(category);
      const h = toLower(title);
      const t = map(toLower)(tags);

      const searchedWithCategory = c.search(searchKeyword) !== -1;
      const searchedWithTitle = h.search(searchKeyword) !== -1;
      const searchedWithTags = flow(
        filter(t => (t.search(searchKeyword) !== -1)),
        filtered => !isEmpty(filtered)
      )(t);

      return searchedWithCategory || searchedWithTitle || searchedWithTags;
    })(postInformations) : [];
  const { pathname } = location;
  const isPortfolio = flow(
    replace(/\/$/, ''),
    startsWith('/portfolios')
  )(pathname);
  const isHome = flow(
    replace(/\/$/, ''),
    isEqual('')
  )(pathname);
  const isResume = flow(
    replace(/\/$/, ''),
    isEqual('/resume')
  )(pathname);
  const isOpenSource = flow(
    replace(/\/$/, ''),
    startsWith('/open-sources')
  )(pathname);
  const isIdeas = flow(
    replace(/\/$/, ''),
    isEqual('/ideas')
  )(pathname);
  /*
  const isNews = flow(
    replace(/\/$/, ''),
    isEqual('/news')
  )(pathname);
  */
  const isPost = !(isPortfolio || isHome || isResume || isOpenSource || /* isNews || */ isIdeas);

  return (
    <StylesWrapper>
      <GnbWrapper>
        <MobileMenu isActive={isMenuOpened} isSubActive={isSubMenuOpened}>
          <Background onClick={closeMenu} isActive={isMenuOpened} />
          <MobileMenus>
            <ul>
              <ListMenu>
                <StyledLink to="/" onClick={closeMenu}>
                  <Home />
                </StyledLink>
              </ListMenu>
              <ListMenu>
                <StyledLink to="/pages/1" className={isPost ? 'active' : ''} onClick={closeMenu}>
                  Posts
                </StyledLink>
                {
                  size(categories) ?
                    [
                      ' ',
                      <MovableFaCaretDown
                        className={isSubMenuOpened ? 'is-active' : ''}
                        key="arrow"
                        onClick={isSubMenuOpened ? closeSubMenu : openSubMenu}
                      />,
                    ] :
                    null
                }
                <SubMenu>
                  <div>
                    {flow(
                      filter(({ key }) => !isEqual('__ALL__')(key)),
                      map(({ key, length }) => (
                        <li key={key}>
                          <Link to={`/categories/${key}/1`} onClick={closeMenu}>
                            {key} <small>({length})</small>
                          </Link>
                        </li>
                      ))
                    )(categories)}
                  </div>
                </SubMenu>
              </ListMenu>
              {hasPortfolio ? (
                <ListMenu>
                  <StyledLink to="/portfolios" className={isPortfolio ? 'active' : ''} onClick={closeMenu}>
                    Portfolio
                  </StyledLink>
                </ListMenu>
              ) : null}
              <ListMenu>
                <StyledLink to="/open-sources" className={isOpenSource ? 'active' : ''} onClick={closeMenu}>
                  Open Source
                </StyledLink>
              </ListMenu>
              <ListMenu>
                <StyledLink to="/resume" className={isResume ? 'active' : ''} onClick={closeMenu}>
                  Resume
                </StyledLink>
              </ListMenu>
              <ListMenu>
                <StyledLink to="/ideas" className={isIdeas ? 'active' : ''} onClick={closeMenu}>
                  Ideas
                </StyledLink>
              </ListMenu>
              {/*
              <ListMenu>
                <StyledLink to="/news" className={isNews ? 'active' : ''} onClick={closeMenu}>
                  News
                </StyledLink>
              </ListMenu>
              */}
              <SearchBarWrapper>
                <label htmlFor="search">
                  <FaSearch />
                </label>
                <SearchBar
                  id="search"
                  type="text"
                  value={searchKeyword}
                  onChange={flow(
                    get('target.value'),
                    inputKeyword,
                  )}
                />
              </SearchBarWrapper>
              <SearchedPosts isEmpty={isEmpty(filteredPosts)}>
                {map(({ path, title, summary, tags }) => (
                  <SearchedPost key={path}>
                    <Title onClick={() => { navigateToPath(path); }}>
                      {title}
                    </Title>
                    <Summary onClick={() => { navigateToPath(path); }}>
                      {summary}
                    </Summary>
                    {size(tags) ? (
                      <FaTags />
                    ) : null}
                    {flow(
                      uniq,
                      map(tag => (
                        <Tag key={tag} onClick={() => { navigateToPath(`/tags/${tag}/1`); }}>
                          <small>
                            {tag}
                          </small>
                        </Tag>
                      ))
                    )(tags)}
                  </SearchedPost>
                ))(filteredPosts)}
              </SearchedPosts>
            </ul>
          </MobileMenus>
        </MobileMenu>
        <ToggleWrapper>
          <Toggle
            defaultChecked={isDracula}
            icons={{
              checked: <span role="img" aria-label="change-theme">🌙</span>,
              unchecked: <span role="img" aria-label="change-theme">☀️</span>,
            }}
            onChange={toggleTheme}
          />
        </ToggleWrapper>
        <Hamburger
          className={`hamburger hamburger--spin ${isMenuOpened ? 'is-active' : ''}`}
          onClick={isMenuOpened ? closeMenu : openMenu}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </Hamburger>
        <ul>
          <ListMenu>
            <StyledLink to="/">
              <Home />
            </StyledLink>
          </ListMenu>
          <ListMenu>
            <StyledLink to="/pages/1" className={isPost ? 'active' : ''}>
              Posts {size(categories) ? <FaCaretDown /> : null}
            </StyledLink>
            <SubMenu>
              <div>
                {flow(
                  filter(({ key }) => !isEqual('__ALL__')(key)),
                  map(({ key, length }) => (
                    <li key={key}>
                      <Link to={`/categories/${key}/1`}>
                        {key} <small>({length})</small>
                      </Link>
                    </li>
                  ))
                )(categories)}
              </div>
            </SubMenu>
          </ListMenu>
          {hasPortfolio ? (
            <ListMenu>
              <StyledLink to="/portfolios" className={isPortfolio ? 'active' : ''}>
                Portfolio
              </StyledLink>
            </ListMenu>
          ) : null}
          <ListMenu>
            <StyledLink to="/open-sources" className={isOpenSource ? 'active' : ''} onClick={closeMenu}>
              Open Source
            </StyledLink>
          </ListMenu>
          <ListMenu>
            <StyledLink to="/resume" className={isResume ? 'active' : ''}>
              Resume
            </StyledLink>
          </ListMenu>
          <ListMenu>
            <StyledLink to="/ideas" className={isIdeas ? 'active' : ''} onClick={closeMenu}>
              Ideas
            </StyledLink>
          </ListMenu>
          {/*
          <ListMenu>
            <StyledLink to="/news" className={isNews ? 'active' : ''}>
              News
            </StyledLink>
          </ListMenu>
          */}
          <SearchBarWrapper>
            <label htmlFor="search">
              <FaSearch />
            </label>
            <SearchBar
              id="search"
              type="text"
              value={searchKeyword}
              onChange={flow(
                get('target.value'),
                inputKeyword,
              )}
            />
          </SearchBarWrapper>
          <SearchedPosts isEmpty={isEmpty(filteredPosts)}>
            {map(({ path, title, summary, tags }) => (
              <SearchedPost key={path}>
                <Title onClick={() => { navigateToPath(path); }}>
                  {title}
                </Title>
                <Summary onClick={() => { navigateToPath(path); }}>
                  {summary}
                </Summary>
                {size(tags) ? (
                  <FaTags />
                ) : null}
                {flow(
                  uniq,
                  map(tag => (
                    <Tag key={tag} onClick={() => { navigateToPath(`/tags/${tag}/1`); }}>
                      <small>
                        {tag}
                      </small>
                    </Tag>
                  ))
                )(tags)}
              </SearchedPost>
            ))(filteredPosts)}
          </SearchedPosts>
        </ul>
      </GnbWrapper>
    </StylesWrapper>
  );
};

Gnb.propTypes = {
  location: shape({ pathname: string.isRequired }).isRequired,
  categories: arrayOf(shape({})),
  postInformations: arrayOf(shape({})),
  hasPortfolio: bool.isRequired,
  navigateToPath: func.isRequired,
  inputKeyword: func.isRequired,
  searchKeyword: string.isRequired,
  isMenuOpened: bool.isRequired,
  openMenu: func.isRequired,
  closeMenu: func.isRequired,
  isSubMenuOpened: bool.isRequired,
  openSubMenu: func.isRequired,
  closeSubMenu: func.isRequired,
  toggleTheme: func.isRequired,
  isDracula: bool.isRequired,
};

Gnb.defaultProps = {
  categories: [],
  postInformations: [],
};

export default Gnb;
