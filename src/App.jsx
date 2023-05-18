/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Todo from "./components/Todo.jsx"
import './app.css'
import { TodoForm } from './components/TodoForm.jsx';
import Search from './components/Search.jsx';
import Filter from './components/Filter.jsx';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer Deploy dos projetos",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Estudar Inglês",
      category: "Pessoal",
      isCompleted: false
    },
    
  ]);

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('')

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }
  ]
  setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id == id ? todo.isCompleted = !todo.isCompleted: todo)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter}  setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
        .filter((todo) => filter ==="All" ? true : filter ==="Completed" ? todo.isCompleted : !todo.isCompleted)
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => sort == "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
