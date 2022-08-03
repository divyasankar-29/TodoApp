import React from "react";

class AddTodo extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input type="text" value={this.props.val} onChange={this.props.change} id="todo" autoComplete="off"/>
                    <button type="submit" onClick={this.props.setTodos}>Add</button>
                </form>
            </div>
        )
    }
}
export default AddTodo