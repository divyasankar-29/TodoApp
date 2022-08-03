import React from 'react';

class TodoCount extends React.Component{
    render(){
        return(
            <div>
                Total todos : {this.props.todos.length}
            </div>
        )
    }
}
export default TodoCount