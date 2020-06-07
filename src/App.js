import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from "./components/TodoForm"

const item = [
  {
       task: `Go to the #BLM protests`,
       id: 12354637,
       completed: false
  },
  {
       task: `Donate to one or more of the following: Justice for Breonna Taylor, The Bail Project, My Block My Hood My City, Black Table Arts, Fair Fight,`,
       id: 47573892,
       completed: false
  },
  {
       task: `Sign petitions`,
       id: 363464738,
       completed: false
  },
  {
       task: `Discontinue purchases from racist businesses and support anti-racist businesses`,
       id: 2636573726,
       completed: false
  },
  {
       task: `Civil discussions with multiple views and backgrounds for the common goal of unity`,
       id: 4657382827,
       completed: false
  }

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      item: item
    };
  }
    toggleItem = itemId => {
      console.log("Toggleitem reveal ID", itemId);
      this.setState({
        item: this.state.item.map(
          item => {
            if (itemId === item.id) {
              return {
                ...item, completed: !item.completed
              };
            }
            return item;
        })
      });
    };

    addItem = (e, item) => {
      e.preventDefault();
      const newItem = {
        name: item,
        id: Date.now(),
        completed: false
      };
      this.setState({
        item: [...this.state.item, newItem]
      });
    };

  render() {
    return (
      <div className="App">
        <div className="Header">
        <h2>Supporting #BLM To-Do List</h2>
        <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList 
          toggleItem={this.toggleItem}
          task={this.state.item}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
