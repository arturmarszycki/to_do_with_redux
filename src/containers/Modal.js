import {connect} from 'react-redux';
import Modal from '../components/Modal';
import {removeTask} from '../redux/actions';

const mapDispatch = dispatch => ({
    remove: id => dispatch(removeTask(id))
});

export default connect(null, mapDispatch)(Modal);