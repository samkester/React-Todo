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
                        {
                            if(this.props.filter === "" || item.text.includes(this.props.filter)){
                                return <Todo key={item.id} item={item} />;
                            }
                            return "";
                        }
                    )
                    : "Loading, please wait."
                }
            </div>
        )
    }
}

export default TodoList;