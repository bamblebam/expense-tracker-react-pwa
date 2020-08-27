import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ExpenseItem from './components/ExpenseItem.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpenseItem></ExpenseItem>
      </div>
    )
  }
}

export default App;
