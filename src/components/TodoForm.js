import React from "react";

//   TodoForm [state: form fields, errors, and button enabling / props: addItem ]

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            fields: {},
            errors: {},
            enabled: false,
        };
    }

    render () {
        return (
            <form>
                I am a todo form.
            </form>
        )
    }
}

export default TodoForm;