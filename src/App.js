import React, { Component } from 'react';
import TodoList from './components/TodoList'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showAddTodo: false,
      showEditTodo: false,
      newItemContent:'',
      editItemContent:'',
      editItemId:'',
      todoItems: [
        {
          id: 1,
          content: "Do 1231 PYP"
        },
        {
          id: 2,
          content: "Fix 2040 bugs"
        }
      ]
    };
  }
  handleDeleteItem = (id) => {
    let currentItems = this.state.todoItems.filter(item => {
      return item.id !== id
    })
    this.setState({ todoItems: currentItems })
  }
  handleAddItem = (newItemContent) =>{
    let newItem = {}
    newItem.content = newItemContent
    newItem.id = Math.random()
    this.setState({
      todoItems:[...this.state.todoItems,newItem],
      newItemContent:'',
      showAddTodo:false
    })
  }
  triggerEditItem = (item) =>{
    this.setState({
      editItemContent:item.content,
      editItemId:item.id,
      showEditTodo:!this.state.showEditTodo
    })
  }
  handleEditItem = () =>{
    let items = this.state.todoItems
    const itemIndex = items.findIndex(obj => obj.id === this.state.editItemId)
    items[itemIndex].content = this.state.editItemContent
    this.setState({
      todoItems:items,
      editItemContent:'',
      editItemId:'',
      showEditTodo:false
    })
  }
  handleAddContentChange = (e) =>{
    this.setState({newItemContent:e.target.value})
  }
  handleEditContentChange = (e) =>{
    this.setState({editItemContent:e.target.value})
  }
  render() {
    return (
      <div className="App container">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="blue-text center">Todos Starter</h4>
          </li>
          <TodoList todoItems={this.state.todoItems} deleteItem={this.handleDeleteItem} editItem={this.triggerEditItem}/>
          <li className="collection-item">
            <i className="material-icons" onClick={()=>this.setState({showAddTodo:!this.state.showAddTodo})}>add</i>
          </li>
        </ul>

          {this.state.showAddTodo &&
          <form onSubmit={(e)=>{
            e.preventDefault()
            this.handleAddItem(this.state.newItemContent)}}>
            
            <input
            value={this.state.newItemContent}
            onChange={(e)=>this.handleAddContentChange(e)}/>
            
            <label>New Task</label>
          </form>
          }

          {this.state.showEditTodo &&
          <form onSubmit={(e)=>{
            e.preventDefault()
            this.handleEditItem()}}>
            
            <input
            value={this.state.editItemContent}
            onChange={(e)=>this.handleEditContentChange(e)}/>
            
            <label>Editing Task #{this.state.editItemId}</label>
          </form>
          }
      </div>
    );
  }
}

export default App;
