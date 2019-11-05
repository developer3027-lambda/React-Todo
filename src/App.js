import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todo: data,
      newItem: ""
    };
  }

  addItem = (task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  }

  deleteItem = () => {
    this.setState({
      todo: this.state.todo.filter(item => {
        return item.completed !== true;
      })
    })
  }
  
  toggleDone = (id) => {
  this.setState({
    todo: this.state.todo.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }else{
        return item;
      }
    })
  })
}

  
  // onSubmit()
  render() {
    return (
      <div>
      <TodoForm addItem={this.addItem} />
      <TodoList todo={this.state.todo} toggleDone={this.toggleDone} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;

