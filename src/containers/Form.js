import Form from '../components/Form';
import {connect} from 'react-redux';
import {addTask} from '../redux/actions';

const mapState = state => ({
    tasks: state.tasks
});
const mapDispatch = dispatch => ({
    addTask: task => dispatch(addTask(task))
});

export default connect(mapState, mapDispatch)(Form);