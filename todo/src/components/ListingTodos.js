
import React from "react";

class ListingTodos extends React.Component{
    render(){
        return(
            <div>
                    {this.props.todos.map((todo,index) =>(
                        <h3>{todo} <button>del</button></h3>
                    ))}
            </div>
        )
    }
}
export default ListingTodos