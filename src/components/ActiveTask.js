import React from 'react';

const Task = ({task, finish, showModal}) => {
    return (
        <tr>
            <td>
                {task.begin}
            </td>
            <td className={task.important ? 'important' : ''}>
                {task.name}
            </td>
            <td>
                {task.deadline}
            </td>
            <td>
                <button onClick={() => finish(task.id)} className="btn_done">Zrobione</button>
                <button onClick={() => showModal(task.id)} className="btn_remove">Usuń</button>
            </td>
        </tr>
    )
};

export default Task;