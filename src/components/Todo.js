import React from "react";

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
            <div className={this.props.item.complete ? "complete" : ""} onClick={this.toggleMe}>
                {
                    this.props.item ?
                    <p>{this.props.item.text}</p>
                    : "Loading, please wait."
                }
                <button onClick={this.removeMe}>Remove</button>
            </div>
        )
    }
}

export default Todo;