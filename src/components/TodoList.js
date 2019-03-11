import React from 'react'

const TodoList = (props) => {
    const { todoItems, deleteItem, editItem } = props
    if(todoItems.length){
        return (
            todoItems.map(todo => {
                return <li className="collection-item" key={todo.id}>
                    <div>
                        {todo.content}
                        <div className="secondary-content">
                           <i className="material-icons" onClick={()=>{editItem(todo)}}>edit</i>
                           <i className="material-icons" onClick={()=>{deleteItem(todo.id)}}>delete</i>
                        </div>
                    </div>
                </li>
            })
        )
    } else return(
        <li className="collection-item">
            <h6 className="blue-text center">No more task left!</h6>
          </li>
    )
    
}

export default TodoList