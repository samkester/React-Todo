import React from 'react';
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// App [state: list of todo items; search filter]
//   SearchBar [props: set search filter]
//   TodoList [props: list of todo items; removeItem]
//     Todo [props: specific todo item; removeItem]
//   TodoForm [state: form fields, errors, and button enabling / props: addItem ]

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <SearchBar />
        <TodoList />
        <TodoForm />        
      </div>
    );
  }
}

export default App;
