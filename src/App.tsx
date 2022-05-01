import React, { SyntheticEvent, useState } from 'react';
import InputField from './components/InputField';
import {Todo} from './model';



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
      </div>
  )
}


export default App;