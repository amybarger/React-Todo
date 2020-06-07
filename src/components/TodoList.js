// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Item from "./Item";

const ToDoList = props => {
    return (
        <div className="todo-list">
            {props.toDoItems.map(item => (
                <Item 
                key={item.id} 
                item={item}
                toggleItem={props.toggleItem}
                />
            ))}
            <button className='clear-button' onClick={props.clearItems}>
            Clear Items
            </button>
        </div>
    )
};

export default ToDoList;