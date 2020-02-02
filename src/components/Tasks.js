import React from 'react';
import ActiveList from './ActiveList';
import DoneList from './DoneList';

class Tasks extends React.Component {
    componentDidMount() {
        this.props.appStart()
    }
    render() {
        const {tasks} = this.props;
        let active, done;
        if (tasks.length) {
            active = tasks.filter(task => !task.done && task);
            done = tasks.filter(task => task.done && task);
        }
        return (
            <div className="container">
                <ActiveList tasks={active} />
                <DoneList tasks={done} remove={null} />
            </div>
        )
    }
}

export default Tasks;