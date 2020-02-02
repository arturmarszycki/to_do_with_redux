import {combineReducers} from 'redux';
import {FETCH_TASKS/*, ADD_TASK, EDIT_TASK, REMOVE_TASK, MARK_AS_DONE*/} from './actions';

const tasks = (state = [], action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return state = action.tasks;
        default:
            return state;
    }
};

export default combineReducers({tasks});