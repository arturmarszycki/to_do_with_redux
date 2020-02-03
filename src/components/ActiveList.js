import React from 'react';
import Task from './ActiveTask';

const ActiveList = ({tasks, modal, finish}) => {
    if (tasks) {
        const sorted = tasks.sort((a, b) => {return b.deadline - a.deadline});
        // const sorted = tasks.sort((a, b) => {
        //     a = a.name.toLowerCase();
        //     b = b.name.toLowerCase();
        //     if(a < b) return -1;
        //     if(a > b) return 1;
        //     return 0;
        // });
        const list = sorted.map(task => <Task key={task.id} task={task} finish={finish} showModal={modal}/>);
        return (
            <div className="tasks-current">
                <h3>Zadania do zrobienia <em>({list.length})</em></h3>
                <table>
                    <thead>
                    <tr>
                        <th>Data dodania</th>
                        <th>Zadanie</th>
                        <th>Deadline</th>
                        <th>Opcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list}
                    </tbody>
                </table>
                <hr/>
            </div>
        )
    } else {
        return <div/>
    }
};

export default ActiveList;