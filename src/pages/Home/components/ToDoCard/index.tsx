import {useNavigation} from '@react-navigation/native'
import React, { useContext } from 'react'
import {NavigationProps, StatusEnum, TodoItem} from '../../../types'
import {
  Container,
  Description,
  Status,
  StatusCircle,
  StatusContainer,
  Title,
  TodoItemAction,
  TodoItemActionText,
  TodoItemActions,
  TodoItemInfo,
} from './styles'
import { ToDoListContext } from '../../../../contexts/toDoList'

type ToDoCardProps = {
  todoItem: TodoItem
  removeItem: (item: TodoItem) => void
}

export const ToDoCard = ({todoItem, removeItem}: ToDoCardProps) => {
  const { updateTodoItem } = useContext(ToDoListContext)
  const navigate = useNavigation<NavigationProps>()
  const handleEdit = () => {
    navigate.navigate('Details', {
      todoItem,
    })
  }

  const handleRemove = () => {
    removeItem(todoItem)
  }

  const handleStatusCircleClick = () => {
    updateTodoItem({
      ...todoItem,
      status: todoItem.status === StatusEnum.PENDING ? StatusEnum.DONE : StatusEnum.PENDING
    })
  }

  return (
    <Container
      onPress={handleEdit}
    >
      <TodoItemInfo>
        <Title>{todoItem.title}</Title>
        <Description>{todoItem.description}</Description>
        <StatusContainer>
          <StatusCircle 
            isCompleted={todoItem.status === StatusEnum.DONE}
            onPress={handleStatusCircleClick}
          />
          <Status>{todoItem.status}</Status>
        </StatusContainer>
      </TodoItemInfo>
      <TodoItemActions>
        <TodoItemAction>
          <TodoItemActionText onPress={handleEdit}>Editar</TodoItemActionText>
        </TodoItemAction>
        <TodoItemAction color="warn">
          <TodoItemActionText onPress={handleRemove}>
            Excluir
          </TodoItemActionText>
        </TodoItemAction>
      </TodoItemActions>
    </Container>
  )
}
