import React, {Component} from 'react'

class ToDoList extends Component{
    render(){
        return <p>{this.props.task}</p>
    }
}

export default ToDoList;