import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class SingleTodo extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
        <li >{this.props.todo}
          <Button variant="danger" onClick={this.props.deleteTodo} size="sm">DELETE</Button>
          </li>
      </div>
    )
  }
}

// export to use this conponent in other components
export default SingleTodo;
