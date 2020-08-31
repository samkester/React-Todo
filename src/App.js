import React from 'react';
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import data from "./data/data";

// App [state: list of todo items; search filter]
//   SearchBar [props: search filter, set search filter, remove cleared items]
//   TodoList [props: list of todo items, remove item, toggle item]
//     Todo [props: specific todo item, remove item, toggle item]
//   TodoForm [state: form fields, errors, and button enabling / props: addItem ]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoItems: data.initialItems,
      searchTerm: "",
    };
  }

  setSearchTerm = term => {
    this.setState({
      searchTerm: term,
    });
  };

  addItem = text => {
    this.setState({
      todoItems: this.state.todoItems.concat({
        text,
        id: Date.now(),
        complete: false,
      })
    });
  };

  toggleItem = id => {
    //console.log(`Toggle ${id}`);
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if(item.id === id){
          return {...item, complete: !item.complete}
        }else{
          return item;
        }
      })
    });
  };

  removeItem = id => {
    //console.log(`Remove ${id}`);
    this.setState({
      todoItems: this.state.todoItems.filter(item => item.id !== id) // filter will keep things that return true, so in this case, everything BUT that id
    });
  };

  removeAllDisabledItems = () => {
    console.log("remove all completed items");
    this.setState({
      todoItems: this.state.todoItems.filter(item => !item.complete) // and in this case, everything BUT the complete items
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <SearchBar searchTerm={this.state.searchTerm} setSearchTerm={this.setSearchTerm} removeAllCleared={this.removeAllDisabledItems} />
        <TodoList listItems={this.state.todoItems} removeItem={this.removeItem} toggleItem={this.toggleItem} filter={this.state.searchTerm} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
