import {connect} from 'react-redux';
import Tasks from '../components/Tasks';
import {fetchTasks, removeTask, markAsDone} from '../redux/actions';

const mapState = state => ({
    tasks: state.tasks
});
const mapDispatch = dispatch => ({
    appStart: () => dispatch(fetchTasks()),
    remove: id => dispatch(removeTask(id)),
    finish: id => dispatch(markAsDone(id))
});

export default connect(mapState, mapDispatch)(Tasks);