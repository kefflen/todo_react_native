import React, {createContext} from 'react'
import {TodoItem} from '../pages/types'

type contextvalue = {
  todoList: TodoItem[]
  setTodoList: (todoList: TodoItem[]) => void
  addTodoItem: (todoItem: TodoItem) => void
  removeTodoItem: (todoItem: TodoItem) => void
  removeAllTodoItems: () => void
  updateTodoItem: (todoItem: TodoItem) => void
}

export const ToDoListContext = createContext<contextvalue>({} as contextvalue)

function ToDoListProvider({children}: {children: React.ReactNode}) {
  const [todoList, setTodoList] = React.useState<TodoItem[]>([])
  const addTodoItem = (todoItem: TodoItem) => {
    setTodoList([...todoList, todoItem])
  }

  const updateTodoItem = (todoItem: TodoItem) => {
    const newTodoList = todoList.map(item => {
      if (item.id === todoItem.id) {
        return todoItem
      }
      return item
    })
    setTodoList(newTodoList)
  }

  const removeTodoItem = (todoItem: TodoItem) => {
    const newTodoList = todoList.filter(item => item.id !== todoItem.id)
    setTodoList(newTodoList)
  }
  const removeAllTodoItems = () => {
    setTodoList([])
  }

  return (
    <ToDoListContext.Provider
      value={{
        todoList,
        setTodoList,
        addTodoItem,
        updateTodoItem,
        removeTodoItem,
        removeAllTodoItems,
      }}>
      {children}
    </ToDoListContext.Provider>
  )
}

export default ToDoListProvider
