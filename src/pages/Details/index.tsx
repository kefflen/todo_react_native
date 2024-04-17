import React, {useState} from 'react'
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

export const Details = ({
  route: {todoItem, onTodoItemChange},
  ...rest
}: {
  route: RoutesProps['Details']
}) => {
  console.log(todoItem)
  console.log(rest)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSave = () => {
    onTodoItemChange({
      ...todoItem,
      title,
      description,
    })
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
