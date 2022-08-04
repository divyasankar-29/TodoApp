import React from 'react';

class TodoCount extends React.Component{
    render(){
        return(
            <div className='length'>
               <b>YET TO COMPLETE {this.props.todos.length} TASKS</b> 
            </div>
        )
    }
}
export default TodoCount