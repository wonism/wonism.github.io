import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  toggleHamburger,
  inputSearch,
  closeSearch,
} from './HeaderActions';
import Header from './Header';
import * as HeaderSelectors from './HeaderSelectors';

const mapStateToProps = state => ({
  isHamburgerOpened: HeaderSelectors.isHamburgerOpened(state),
  categories: HeaderSelectors.getCategories(state),
  urlInformations: HeaderSelectors.getUrlInformations(state),
  searchKeywords: HeaderSelectors.getSearchKeywords(state),
  resultsOfSearch: HeaderSelectors.getResultsOfSearch(state),
  hasResultsOfSearch: HeaderSelectors.hasResultsOfSearch(state),
});

const mapDispatchToProps = dispatch => ({
  toggleHamburger: bindActionCreators(toggleHamburger, dispatch),
  inputSearch: bindActionCreators(inputSearch, dispatch),
  closeSearch: bindActionCreators(closeSearch, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
