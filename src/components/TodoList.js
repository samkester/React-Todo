import React from "react";
import Todo from "./Todo";
import StyledList from "./styled/StyledList";

//   TodoList [props: list of todo items; removeItem]
//     Todo [props: specific todo item; removeItem]

class TodoList extends React.Component {
    render () {
        return (
            <StyledList>
                {
                    this.props.listItems ?
                    this.props.listItems.map (item =>
                        {
                            if(this.props.filter === "" || item.text.includes(this.props.filter)){
                                return <Todo key={item.id} item={item} removeItem={this.props.removeItem} toggleItem={this.props.toggleItem} />;
                            }
                            return "";
                        }
                    )
                    : "Loading, please wait."
                }
            </StyledList>
        )
    }
}

export default TodoList;