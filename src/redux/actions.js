const FETCH_TASKS = 'FETCH_TASKS';
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const MARK_AS_DONE = 'MARK_AS_DONE';

const fetchTasks = tasks => ({type: FETCH_TASKS, tasks});
const appStart = () => dispatch => {
    fetch('http://localhost:3004/tasks').then(response => {
        return response.json();
    }).then(result => {
        dispatch(fetchTasks(result));
    }).catch(error => {
        console.log(error);
    })
};

export {FETCH_TASKS, ADD_TASK, EDIT_TASK, REMOVE_TASK, MARK_AS_DONE, appStart};