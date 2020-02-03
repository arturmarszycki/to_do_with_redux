import React from 'react';

class Form extends React.Component {
    minDate = new Date().toISOString().slice(0, 10);
    state = {
        task: {
            id: null,
            begin: this.minDate,
            name: '',
            important: false,
            deadline: this.minDate,
            done: null
        },
        valid: true
    };
    handleText = (e) => {
        e.persist();
        this.setState(prevState => ({task: {...prevState.task, [e.target.id]: e.target.value}}));
    };
    handleImportant = (e) => {
        e.persist();
        this.setState(prevState => ({task: {...prevState.task, important: e.target.checked}}));
    };
    handleSubmit = async (e) => {
        e.persist();
        e.preventDefault();
        if(this.state.task.name.length > 2) {
            let lastId = this.props.tasks[this.props.tasks.length - 1].id;
            await this.setState(prevState => ({task: {...prevState.task, id: lastId + 1}}));
            this.props.addTask(this.state.task);
            this.setState(prevState => ({task: {...prevState.task, name: '', important: false, deadline: this.minDate}, valid: true}));
        } else {
            this.setState({valid: false});
        }
    };
    render() {
        const {name, deadline, important} = this.state.task;
        let maxDate = Number(this.minDate.slice(0, 4)) + 1;
        maxDate = String(maxDate + '-12-31');
        return (
            <div className="container">
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="add-task">
                        <h3>Dodaj zadanie</h3>
                        <div className={this.state.valid ? 'add-part' : 'add-part validate'}>
                            <input type="text" placeholder="dodaj zadanie" id="name" onChange={this.handleText} value={name}/>
                            <input type="checkbox" id="important" onChange={this.handleImportant} checked={important}/>
                            <label htmlFor="important">Priorytet</label>
                            <span className="validate_msg">minimalna ilość znaków: 3</span>
                        </div>
                        <div className="add-part">
                            <label htmlFor="deadline">Do kiedy zrobić</label>
                            <input type="date" id="deadline" min={this.minDate} max={maxDate} onChange={this.handleText} value={deadline}/>
                        </div>
                        <button className="btn_add_task" type="submit">Dodaj</button>
                        <hr/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;