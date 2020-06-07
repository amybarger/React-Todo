// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from "./Todo"

const ToDoList = (props) => {
    console.log("todo list props", props)
    return (
        <div className="todo-list">
            {props.task.map(todo => (
                <ToDo 
                key={todo.id} 
                task={todo}
                toggleItem={props.toggleItem}
                />
            ))}
        </div>
    )
};

export default ToDoList;