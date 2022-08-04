
import React from "react";
import  Button  from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Todo.css";

class ListingTodos extends React.Component{

    removeItem(e){
        this.props.removeTodo(e);
    }
    render(){
        return(
            <div className="show">
                    {this.props.todos.map((todo) =>(
                        <h5>{todo} <Button color="primary" sx={{color:"red"}} className = "button" variant="contained" onClick={() => {this.removeItem(todo)}} startIcon={ <DeleteIcon sx={{color : "red"}} />}>
                           Delete
                            </Button></h5>
                    ))}
            </div>
        )
    }
}
export default ListingTodos