import React from 'react';

const DoneTask = ({task, remove}) => {
    return (
        <tr>
            <td>
                {task.name}
            </td>
            <td>
                <i>zakończone {task.done}</i>
            </td>
            <td>
                <button onClick={() => remove(task.id)} className="btn_remove">Usuń</button>
            </td>
        </tr>
    )
};

export default DoneTask;