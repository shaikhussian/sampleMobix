import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import MainApp from './containers/App';
import TaskStore from './models/TaskStore';

const store = TaskStore.create({});
// makeInspectable(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}
