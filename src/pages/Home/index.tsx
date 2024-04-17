import React from 'react'
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
  const [todoTitleInputText, setTodoTitleInputText] = React.useState('')
  const [todoList, setTodoList] = React.useState<TodoItem[]>([])

  const handleAddTodo = () => {
    if (!todoTitleInputText) {
      return
    }
    const newTodoItem: TodoItem = {
      title: todoTitleInputText,
      description: '',
      status: StatusEnum.PENDING,
    }

    setTodoList([...todoList, newTodoItem])
    setTodoTitleInputText('')
  }

  const handleRemoveTodo = (todoItem: TodoItem) => {
    const newTodoList = todoList.filter(item => item.title !== todoItem.title)
    setTodoList(newTodoList)
  }

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Digite o título da tarefa"
          value={todoTitleInputText}
          onChangeText={setTodoTitleInputText}
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
