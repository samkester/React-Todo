import React from 'react';
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// App [state: list of todo items; search filter]
//   SearchBar [props: search filter, set search filter, remove cleared items]
//   TodoList [props: list of todo items, remove item, toggle item]
//     Todo [props: specific todo item, remove item, toggle item]
//   TodoForm [state: form fields, errors, and button enabling / props: addItem ]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoItems: [],
      searchTerm: "",
    };
  }

  setSearchTerm = () => {};

  addItem = () => {};
  toggleItem = () => {};
  removeItem = () => {};
  removeAllDisabledItems = () => {};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <SearchBar searchTerm={this.state.searchTerm} setSearchTerm={this.setSearchTerm} removeAllCleared={this.removeAllDisabledItems} />
        <TodoList listItems={this.state.todoItems} removeItem={this.removeItem} toggleItem={this.toggleItem} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
