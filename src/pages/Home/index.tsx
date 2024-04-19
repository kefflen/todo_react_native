import React from 'react'
import {ToDoListContext} from '../../contexts/toDoList'
import {StatusEnum, TodoItem} from '../types'
import {ToDoCard} from './components/ToDoCard'
import {
  AddButton,
  ButtonText,
  Container,
  Input,
  InputContainer,
  ToDoList,
} from './styles'

export const Home = () => {
  const {todoList, addTodoItem, removeTodoItem} =
    React.useContext(ToDoListContext)
  const [todoTitleInputText, setTodoTitleInputText] = React.useState('')

  function handleAddTodo() {
    if (!todoTitleInputText) {
      return
    }

    addTodoItem({
      id: new Date().getTime().toString(),
      title: todoTitleInputText,
      description: '',
      status: StatusEnum.PENDING,
    })

    setTodoTitleInputText('')
  }

  function handleRemoveTodo(todoItem: TodoItem) {
    removeTodoItem(todoItem)
  }

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Digite o título da tarefa"
          value={todoTitleInputText}
          onChangeText={setTodoTitleInputText}
          onSubmitEditing={handleAddTodo}
        />
        <AddButton onPress={handleAddTodo}>
          <ButtonText>+</ButtonText>
        </AddButton>
      </InputContainer>
      <ToDoList
        data={todoList}
        renderItem={({item}) =>
          renderTodoCard({
            item: item as any,
          })
        }
        keyExtractor={item => (item as any).title}
      />
    </Container>
  )

  function renderTodoCard({item}: {item: TodoItem}) {
    return (
      <ToDoCard todoItem={item} removeItem={() => handleRemoveTodo(item)} />
    )
  }
}
