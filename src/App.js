import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleTodo from './singleTodo';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert'



class App extends Component {
  constructor() {
      super();
      this.state = {
          todos: [],
          currentTodo: "",
          todoFound: false
      };

}
    onInputChange = e => {
        this.setState({ currentTodo: e.target.value })
}

    onAdd = () => {
        let current = this.state.currentTodo;
        let todosCopy = this.state.todos.slice();
        let found = false;

        for (let i = 0; i < todosCopy.length; i++) {
          if (todosCopy[i] === current) {
            found = true;
            i = todosCopy.length;
            this.setState({todoFound: true});
          }
        }
        if (!found) {
          todosCopy.push(this.state.currentTodo);
          this.setState({todos: todosCopy, currentTodo: ""});
        } // raise alert event in else case

        this.setState({todoFound: false});

    }
    onRemoveAll = () => {
      this.setState({todos: []});
    }
    onDelete = i => {
      let todosCopy = this.state.todos.slice();
      todosCopy.splice(i, 1);
      this.setState({todos: todosCopy});

    }

    render(){
      let bulletedTodos = this.state.todos.map((element,index) => {
          return(
          <SingleTodo todo={element} deleteTodo={() => this.onDelete(index)} />
          )
      })
        return (
            <div>
                <input placeholder="Whacha doin?!" value={this.state.currentTodo}
                onChange={this.onInputChange}/>
                <Button disabled={!this.state.currentTodo} onClick={this.onAdd}>Add!</Button>
                <div>
                      {bulletedTodos}
                </div>
                <div>
                  <Button
                    variant="danger"
                    onClick={this.onRemoveAll}
                    size="lg"
                    disabled={this.state.todos.length < 2}>
                    Remove All</Button>
                  </div>
                  <div>
                      <Alert show={this.state.todoFound} variant="danger" closeLabel="close">Todo already Exist!</Alert>
                  </div>
            </div>
        )
    }
}




export default App;
