import styled from 'styled-components/native'

export const Container = styled.View`
  border: 1px solid #333;
  border-radius: 4px;
  margin-top: 8px;
  flex-direction: row;
`

export const TodoItemInfo = styled.View`
  flex: 1;
  padding: 8px;
`

export const TodoItemActions = styled.View`
`

export const TodoItemAction = styled.TouchableOpacity`
  padding: 8px;
  background-color: #333;
  border-radius: 4px;
  margin: 4px;
`

export const TodoItemActionText = styled.Text`
  color: #fff;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const Description = styled.Text`
  font-size: 16px;
  margin-top: 8px;
`

export const Status = styled.Text`
  font-size: 16px;
  margin-top: 8px;
`
