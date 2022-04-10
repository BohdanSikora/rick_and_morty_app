import React, { useEffect, useState } from "react"
import Form from "./components/Form"
import Layout from "./components/Layout"
import Lists from "./components/List"

const WatchList = () => {
  const [error, setError] = useState(null)
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const submitHandler = (e) => {
    e.preventDefault()

    if (todo.length < 10) {
      setError("At least 10 word required!")
      return false
    }

    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos])

    setTodo('')
    setError(null)
  }

  const delHandler = (todoId) => {
      const updatedTodos = todos.filter((item) => item.id !== todoId)
      setTodos(updatedTodos)
    }
  

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId)
    const newTodo = [...todos]

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    }

    setTodos(newTodo)
  }
  return (
    <Layout>
      <Form
        error={error}
        value={todo}
        submit={submitHandler}
        onChange={(e) => setTodo(e.target.value)}
      />
      <hr className="border-primary" />
      <Lists todos={todos} delHandler={delHandler} doneHandler={doneHandler} />
    </Layout>
  )
}

export default WatchList