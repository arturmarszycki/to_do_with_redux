import React from 'react';
import DoneTask from './DoneTask';

const DoneList = ({tasks, remove}) => {
    if (tasks) {
        const sorted = tasks.sort((a, b) => {return b.done - a.done});
        const doneTasks = sorted.map(task => <DoneTask key={task.id} task={task} remove={remove}/>);
        return (
            <div className="tasks-done">
                <h3>Zadania wykonane <em>({tasks.length})</em></h3>
                <table>
                    <tbody>
                    {doneTasks.slice(0, 3)}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <div/>
    }
};

export default DoneList;