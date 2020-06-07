import React from 'react';

const toDoItems = [
  {
       task: `Go to the #BLM protests`,
       id: Date.now(),
       completed: false
  },
  {
       task: `Donate to one or more of the following: Justice for Breonna Taylor, The Bail Project, My Block My Hood My City, Black Table Arts, Fair Fight,`,
       id: Date.now(),
       completed: false
  },
  {
       task: `Sign petitions`,
       id: Date.now(),
       completed: false
  },
  {
       task: `Discontinue purchases from anti-racist businesses`,
       id: Date.now(),
       completed: false
  },
  {
       task: `Civil discussions with multiple views and backgrounds for the common goal of unity`,
       id: Date.now(),
       completed: false
  }

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoItems
    };
  }
    toggleItem = itemId => {
      console.log(itemId);
      this.state({
        toDoItems: this.state.toDoItems.map(
          item => {
            if (itemId === item.id) {
              return {
                ...item, purchased: !item.purchased
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
        purchased: false
      };
      this.setState({
        toDoItems: [...this.state.toDoItems, newItem]
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
          toDoItems={this.state.toDoItems}
        />
      </div>
    );
  }
}

export default App;
