import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import Tasks from './containers/Tasks';

const App = () => {
  return (
      <Provider store={store}>
        <Tasks />
      </Provider>
  )
};

export default App;