import React from 'react';
import ActiveList from './ActiveList';
import DoneList from './DoneList';

class Tasks extends React.Component {
    componentDidMount() {
        this.props.appStart()
    }
    render() {
        const {tasks, finish, modal, remove} = this.props;
        let active, done;
        if (tasks.length) {
            active = tasks.filter(task => !task.done && task);
            done = tasks.filter(task => task.done && task);
        }
        return (
            <div className="container">
                <ActiveList tasks={active} modal={modal} finish={finish} />
                <DoneList tasks={done} remove={remove} />
            </div>
        )
    }
}

export default Tasks;