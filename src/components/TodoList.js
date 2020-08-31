import React from "react";
import Todo from "./Todo";

//   TodoList [props: list of todo items; removeItem]
//     Todo [props: specific todo item; removeItem]

class TodoList extends React.Component {
    render () {
        return (
            <div>
                {
                    this.props.listItems ?
                    this.props.listItems.map (item =>
                    <Todo key={item.id} item={item} />
                    )
                    : "Loading, please wait."
                }
            </div>
        )
    }
}

export default TodoList;