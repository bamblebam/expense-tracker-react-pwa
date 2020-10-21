import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ExpenseItem from './components/ExpenseItem.js'
import { Provider } from 'react-redux'
import store from './store.js'
import { loaduser } from './actions/authAction';
import MyNavbar from './components/MyNavbar'

class App extends Component {
  componentDidMount() {
    store.dispatch(loaduser())
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MyNavbar></MyNavbar>
          <ExpenseItem></ExpenseItem>
        </div>
      </Provider>
    )
  }
}

export default App;
