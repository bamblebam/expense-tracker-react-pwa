import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ExpenseItem from './components/ExpenseItem.js'
import { Provider } from 'react-redux'
import store from './store.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ExpenseItem></ExpenseItem>
        </div>
      </Provider>
    )
  }
}

export default App;
