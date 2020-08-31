import React from "react";

//     Todo [props: specific todo item; removeItem]

class Todo extends React.Component {
    render () {
        return (
            <div>
                {
                    this.props.item ?
                    <p>{this.props.item.text}</p>
                    : "Loading, please wait."
                }
            </div>
        )
    }
}

export default Todo;