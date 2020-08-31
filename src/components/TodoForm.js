import React from "react";
import StyledForm from "./styled/StyledForm";

//   TodoForm [state: form fields, errors, and button enabling / props: addItem ]

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            fields: {text: ""},
            errors: {},
            enabled: false,
        };
    }

    updateField = event => {
        const name = event.target.name;
        const value = event.target.value;

        //console.log(value);

        this.setState({
            fields: {
                ...this.state.fields,
                [name]: value,
            }
        });

        // put validation checks here
        if(value.trim() === ""){
            this.setState({
                errors: {
                    ...this.state.errors,
                    [name]: "Please enter a todo item.",
                }
            })
        }
        else{
            this.setState({
                errors: {
                    ...this.state.errors,
                    [name]: "",
                }
            })
        }
        
        this.updateButtonState();
    };

    updateButtonState = () => {
        this.setState({
            enabled: this.state.fields.text.trim() !== "",
        });
    }

    createNewTodo = event => {
        event.preventDefault();
        //console.log(`Create ${this.state.fields.text}`)
        this.props.addItem(this.state.fields.text);
        this.setState({fields: {text: ""}, enabled: false});
    };

    render () {
        return (
            <StyledForm>
                <form onSubmit={this.createNewTodo}>
                    <input type="text" name="text" value={this.state.fields.text} onChange={this.updateField} />
                    <button onClick={this.createNewTodo} disabled={!this.state.enabled}>Add</button>
                </form>
                <div className="errors">
                    {this.state.errors &&
                    Object.values(this.state.errors).map((error, index) => <p key={index}>{error}</p>) /* for each field in "errors", create a <p> with that field's value */
                    }
                </div>
            </StyledForm>
        )
    }
}

export default TodoForm;