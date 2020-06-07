import React from 'react';

const ToDo = (props) => {
    console.log("ToDo props", props)
    return(
        <div className={`item${props.task.completed ? '-completed' : ''}`} onClick={(() => props.toggleItem(props.task.id))}>
        <p>{props.task.task}</p>
        {/* <p>{props.task.id}</p> */}
        </div>
    )
}

  export default ToDo;