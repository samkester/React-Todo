import React from "react";
import Todo from "./Todo";

//   TodoList [props: list of todo items; removeItem]
//     Todo [props: specific todo item; removeItem]

class TodoList extends React.Component {
    render () {
        return (
            <div>
                I am a todo list.
                <Todo />
                <Todo />
            </div>
        )
    }
}

export default TodoList;