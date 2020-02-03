import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import Tasks from './containers/Tasks';
import Form from './containers/Form';
import Modal from './containers/Modal';

class App extends React.Component {
    state = {
        modal: {active: false, number: null}
    };
    showModal = id => {
        this.setState({modal: {active: true, number: id}});
    };
    hideModal = () => {
        this.setState({modal: {active: false}});
    };
    render() {
        const {modal} = this.state;
        return (
            <Provider store={store}>
                {modal.active ? <Modal hideModal={this.hideModal} number={modal.number} /> : ''}
                <Form />
                <Tasks modal={this.showModal} />
            </Provider>
        )
    }
}

export default App;