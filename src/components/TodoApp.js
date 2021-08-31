import React from "react";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        text: "Learn About React",
        isCompleted: false
      },
      {
        text: "Zoom Meeting at 1 PM",
        isCompleted: false
      }]
    };
  }

  addTodoItem = text => {
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, {
          text: text,
          isCompleted: false
        }]
      }
    });
  };

  completeTodo = index => {
    this.setState(prevState => {
      let prevTodos = [...prevState.todos];
      prevTodos[index].isCompleted = !prevTodos[index].isCompleted;
      return {
        prevTodos
      }
    })
  }

  deleteTodo = index => {
    this.setState(prevState => {
      let prevTodos = [...prevState.todos];
      prevTodos.splice( index, 1);
      return {
        todos: prevTodos
      }
    })
  }

  render(){
    return (
      <div className="App">
          <div className="col-md-12">
              <div className="title text-center">
                <h2>To Do App - React Js</h2>
                <p>This is simple ToDo App using only React Js<br/> to use it please add text and click submit</p>
              </div>
              <InputForm addItem={this.addTodoItem}/>
              <TodoList 
                todos={this.state.todos} 
                completeTodo={this.completeTodo}
                deleteTodo={this.deleteTodo}/>
          </div>
      </div>
    )
  }
}

export default TodoApp;
