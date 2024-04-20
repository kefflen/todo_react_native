import React, {useContext, useState} from 'react'
import {ToDoListContext} from '../../contexts/toDoList'
import {RoutesProps, StatusEnum} from '../types'
import {
  ActionsContainer,
  Container,
  FormContainer,
  Input,
  Label,
  SaveAction,
  SaveActionText,
  Status,
  StatusCheck,
  StatusContainer,
} from './styles'

type DetailsProps = {
  navigation: any
  route: {
    params: RoutesProps['Details']
  }
}

export const Details = ({route, navigation}: DetailsProps) => {
  const {params} = route
  const {updateTodoItem} = useContext(ToDoListContext)
  const [title, setTitle] = useState(params.todoItem.title)
  const [description, setDescription] = useState(params.todoItem.description)
  const [status, setStatus] = useState(params.todoItem.status)

  const handleSave = () => {
    updateTodoItem({
      title,
      description,
      status,
      id: params.todoItem.id,
    })
    navigation.goBack()
  }

  const handleStatusCircleClick = () => {
    setStatus(
      status === StatusEnum.PENDING ? StatusEnum.DONE : StatusEnum.PENDING,
    )
  }

  return (
    <Container>
      <FormContainer>
        <Label>Title</Label>
        <Input value={title} onChangeText={setTitle} />
        <Label>Description</Label>
        <Input value={description} onChangeText={setDescription} />
        <StatusContainer>
          <StatusCheck
            isCompleted={status === StatusEnum.DONE}
            onPress={handleStatusCircleClick}
          />
          <Status>{status}</Status>
        </StatusContainer>
      </FormContainer>
      <ActionsContainer>
        <SaveAction onPress={handleSave}>
          <SaveActionText>Save</SaveActionText>
        </SaveAction>
      </ActionsContainer>
    </Container>
  )
}
