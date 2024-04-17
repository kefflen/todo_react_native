import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  margin-top: 12px;
`

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0 8px;
`

export const AddButton = styled.TouchableOpacity`
  background-color: #333;
  height: 40px;
  width: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`

export const ToDoList = styled.FlatList`
  margin-top: 16px;
  padding: 0 8px;
`