import React from 'react';
import './App.css';
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="all">
      <h1
        style={{
          textAlign: "center",
          color: 'violet',
          textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"
        }}
      >
        TO DO APP
      </h1>
      <p style={{ textAlign: "center" }}>
        <strong>Make The Most Out Of The App By Ticking Boxes Once They Get Finished.</strong>
      </p>
      <h2 style={{ color: 'blueviolet' }}>CheckList:</h2>
      <div className="todo-list">
        {todoItems}
      </div>
    </div>
    );
  }
}

export default App;
