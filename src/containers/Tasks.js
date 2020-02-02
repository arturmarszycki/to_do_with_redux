import {connect} from 'react-redux';
import Tasks from '../components/Tasks';
import {appStart} from '../redux/actions';

const mapState = state => ({
    tasks: state.tasks
});
const mapDispatch = dispatch => ({
    appStart: () => dispatch(appStart())
});

export default connect(mapState, mapDispatch)(Tasks);