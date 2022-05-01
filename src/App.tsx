import React, { SyntheticEvent, useState } from 'react';
import InputField from './components/InputField';
import {Todo} from './model';
import TodoList from './components/TodoList'


const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos)

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault()
    if(todo) {
      setTodos([...todos, {id: new Date().toLocaleString(), todo, isDone: false}]);
      setTodo('');
    }
    
  }

  return (
      <div className="App">
    <span className="heading">
       TODO LIST
    </span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos}/>
      </div>
  )
}


export default App;