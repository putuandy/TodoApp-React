import React from "react";
import TodoItem from "./TodoItem"

class TodoList extends React.Component {
    render() {
      return(
        <div className="todo-list col-md-4 offset-md-4">
          {this.props.todos.map((todo, idx) => (
            <TodoItem 
              todo={todo} 
              index={idx} 
              completeTodo={this.props.completeTodo}
              deleteTodo={this.props.deleteTodo}
              key={idx} />
          ))}
        </div>
      )
    }
  }

  export default TodoList