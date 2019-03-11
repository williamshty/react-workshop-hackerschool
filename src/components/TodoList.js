import React from 'react'

const TodoList = (props) => {
    const { } = props
    return (
        <li className="collection-item" >
            <div>
                sample content
                <div className="secondary-content">
                    <i className="material-icons">edit</i>
                    <i className="material-icons">delete</i>
                </div>
            </div>
        </li>
    )

}

export default TodoList