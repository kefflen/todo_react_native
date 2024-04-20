import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import React, {useContext} from 'react'
import {ToDoListContext} from '../../../../contexts/toDoList'
import {NavigationProps, StatusEnum, TodoItem} from '../../../types'
import {
  Container,
  Description,
  EmptyDescriptionMessage,
  Status,
  StatusCheck,
  StatusContainer,
  Title,
  TodoItemAction,
  TodoItemActionText,
  TodoItemActions,
  TodoItemInfo,
} from './styles'

type ToDoCardProps = {
  todoItem: TodoItem
  removeItem: (item: TodoItem) => void
}

export const ToDoCard = ({todoItem, removeItem}: ToDoCardProps) => {
  const {updateTodoItem} = useContext(ToDoListContext)
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
      status:
        todoItem.status === StatusEnum.PENDING
          ? StatusEnum.DONE
          : StatusEnum.PENDING,
    })
  }

  return (
    <Container onPress={handleEdit}>
      <TodoItemInfo>
        <Title>{todoItem.title}</Title>
        {todoItem.description ? (
          <Description numberOfLines={2}>{todoItem.description}</Description>
        ) : (
          <EmptyDescriptionMessage>Descrição não informada</EmptyDescriptionMessage>
        )}
        <StatusContainer>
          <StatusCheck
            isCompleted={todoItem.status === StatusEnum.DONE}
            onPress={handleStatusCircleClick}
          />
          <Status>{todoItem.status}</Status>
        </StatusContainer>
      </TodoItemInfo>
      <TodoItemActions>
        <TodoItemAction>
          <TodoItemActionText onPress={handleEdit}>
            <Icon name="edit" size={16} color="#fff" />
          </TodoItemActionText>
        </TodoItemAction>
        <TodoItemAction color="warn">
          <TodoItemActionText onPress={handleRemove}>
            <Icon name="delete" size={16} color="#fff" />
          </TodoItemActionText>
        </TodoItemAction>
      </TodoItemActions>
    </Container>
  )
}
