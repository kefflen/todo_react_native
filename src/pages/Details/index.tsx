import React, {useContext, useState} from 'react'
import {ToDoListContext} from '../../contexts/toDoList'
import {RoutesProps} from '../types'
import {
  ActionsContainer,
  Container,
  FormContainer,
  Input,
  Label,
  SaveAction,
  SaveActionText,
} from './styles'

type DetailsProps = {
  navigation: any,
  route: {
    params: RoutesProps['Details']
  },
}

export const Details = ({route, navigation}: DetailsProps) => {
  const {params} = route
  const {updateTodoItem} = useContext(ToDoListContext)
  const [title, setTitle] = useState(params.todoItem.title)
  const [description, setDescription] = useState(params.todoItem.description)

  const handleSave = () => {
    updateTodoItem({
      ...params.todoItem,
      title,
      description,
    })
    navigation.goBack()
  }

  return (
    <Container>
      <FormContainer>
        <Label>Title</Label>
        <Input value={title} onChangeText={setTitle} />
        <Label>Description</Label>
        <Input value={description} onChangeText={setDescription} />
      </FormContainer>
      <ActionsContainer>
        <SaveAction onPress={handleSave}>
          <SaveActionText>Save</SaveActionText>
        </SaveAction>
      </ActionsContainer>
    </Container>
  )
}
