const db = 'http://localhost:3004/tasks';

const FETCH_TASKS = 'FETCH_TASKS';
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const MARK_AS_DONE = 'MARK_AS_DONE';

const fetchTasks = () => dispatch => {
    fetch(db).then(response => {
        return response.json();
    }).then(result => {
        dispatch({type: FETCH_TASKS, result});
    }).catch(error => {
        console.log(error);
    });
};
const addTask = task => dispatch => {
    fetch(db, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {'Content-Type': 'application/json'}
    }).then(() => {
        dispatch({type: ADD_TASK, task});
    }).catch(error => {
        console.log(error);
    });
};
const removeTask = id => dispatch => {
    fetch(`${db}/${id}`, {method: 'DELETE'}).then(() => {
        dispatch({type: REMOVE_TASK, id});
    }).catch(error => {
        console.log(error);
    });
};
const markAsDone = id => (dispatch, getState) => {
    dispatch({type: MARK_AS_DONE, id});
    let doneTask = getState().tasks.filter(task => task.id === id);
    fetch(`${db}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(doneTask[0]),
        headers: {'Content-Type': 'application/json'}
    }).catch(error => {
        console.log(error);
    })
};

export {FETCH_TASKS, ADD_TASK, EDIT_TASK, REMOVE_TASK, MARK_AS_DONE, fetchTasks, addTask, removeTask, markAsDone};