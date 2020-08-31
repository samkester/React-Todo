import React from "react";
import StyledTodo from "./styled/StyledTodo";

//     Todo [props: specific todo item; removeItem]

class Todo extends React.Component {
    toggleMe = () => {
        this.props.toggleItem(this.props.item.id);
    }

    removeMe = event => {
        event.stopPropagation();
        this.props.removeItem(this.props.item.id);
    }

    render () {
        return (
            <StyledTodo className={this.props.item.complete ? "complete" : ""} onClick={this.toggleMe}>
                <p>{
                    this.props.item ?
                    this.props.item.text :
                    "Loading, please wait."
                }</p>
                <button onClick={this.removeMe}>Remove</button>
            </StyledTodo>
        )
    }
}

export default Todo;