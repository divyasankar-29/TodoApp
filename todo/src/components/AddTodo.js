import React from "react";
import  Button  from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import './Todo.css';
class AddTodo extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.setTodos}>
                    <TextField className="textfield" id="filled-basic" variant="filled" type="text" value={this.props.val} onChange={this.props.change} placeholder="Enter Task" autoComplete="off"/>
                    <Button color = "secondary" variant="contained" onClick={this.props.setTodos}>
                        Add
                    </Button>
                </form>
            </div>
        )
    }
}
export default AddTodo