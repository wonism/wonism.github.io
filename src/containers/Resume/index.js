import { connect } from 'react-redux';
import { printPage } from '~/store/app/actions';
import * as appSelectors from '~/store/app/selectors';
import Resume from '~/components/Resume';

export default connect(
  state => ({
    files: appSelectors.getFiles(state),
  }),
  { printPage }
)(Resume);
