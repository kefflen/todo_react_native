import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Text} from 'react-native'
import {NavigationProps, TodoItem} from '../../../types'
import {
  Container,
  Title,
  TodoItemAction,
  TodoItemActionText,
  TodoItemActions,
  TodoItemInfo,
} from './styles'

type ToDoCardProps = {
  todoItem: TodoItem,
  removeItem: (item: TodoItem) => void,
}

export const ToDoCard = ({todoItem, removeItem}: ToDoCardProps) => {
  const navigate = useNavigation<NavigationProps>()
  console.log({ todoItem })
  const handleEdit = () => {
    navigate.navigate('Details', {
      todoItem,
    })
  }

  const handleRemove = () => {
    removeItem(todoItem)
  }

  return (
    <Container>
      <TodoItemInfo>
        <Title>{todoItem.title}</Title>
        <Text>{todoItem.description}</Text>
        <Text>{todoItem.status}</Text>
      </TodoItemInfo>
      <TodoItemActions>
        <TodoItemAction>
          <TodoItemActionText onPress={handleEdit}>Editar</TodoItemActionText>
        </TodoItemAction>
        <TodoItemAction>
          <TodoItemActionText>Excluir</TodoItemActionText>
        </TodoItemAction>
      </TodoItemActions>
    </Container>
  )
}
