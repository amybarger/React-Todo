import React from 'react';

class TodoForm extends React.Component {
    constructor() {
    super();
    this.state = {
        item: ""
        };
    };

    handleChanges = e => {
        this.setState({ [e.target.name] : e.target.value });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(e, this.state.item);
        this.setState({ item: "" })
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input 
                type="text"
                value={this.state.item}
                name="item"
                onChange={this.handleChanges}
                />
                <button>Add</button>
                <button className='clear-button' onClick={this.clearItems}>
                Clear Items
                </button>
            </form>
        )
    }
}

export default TodoForm;