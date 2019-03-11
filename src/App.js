import React, { Component } from 'react';
import TodoList from './components/TodoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="App container">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="blue-text center">Todos Starter Code</h4>
          </li>
          <TodoList/>
          <li className="collection-item">
            <i className="material-icons" >add</i>
          </li>
        </ul>          
          <form onSubmit={(e)=>{
            e.preventDefault()
            alert("new todo added!")}}>
            <input/>
            <label>Sample Input</label>
          </form>
      </div>
    );
  }
}

export default App;
