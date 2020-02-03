import {combineReducers} from 'redux';
import {FETCH_TASKS, ADD_TASK, REMOVE_TASK, MARK_AS_DONE/*, EDIT_TASK*/} from './actions';

const tasks = (state = [], action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return state = action.result;
        case ADD_TASK:
            return [...state, action.task];
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.id);
        case MARK_AS_DONE:
            let tasks = state.map(task => {
                if (task.id === action.id) {
                    task.done = new Date().toISOString().slice(0, 10);
                }
                return task;
            });
            return state = tasks;
        default:
            return state;
    }
};

export default combineReducers({tasks});