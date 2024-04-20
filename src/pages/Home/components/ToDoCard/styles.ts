import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  margin-top: 8px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.paper};
`

export const TodoItemInfo = styled.View`
  flex: 1;
  padding: 8px;
`

export const TodoItemActions = styled.View`
  padding: 8px;
  align-items: center;
  justify-content: center;`

type TodoItemActionProps = {
  color?: 'primary' | 'warn'
}

export const TodoItemAction = styled.TouchableOpacity<TodoItemActionProps>`
  padding: 8px;
  background-color: ${(props) => {
    const color = props.color || 'primary'
    return color === 'primary' ? props.theme.colors.primary : props.theme.colors.warning
  }};
  border-radius: 4px;
  margin: 4px;
`

export const TodoItemActionText = styled.Text`
  color: #fff;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textOnSecondary};
  font-size: 20px;
  font-weight: bold;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textOnSecondary};
  font-size: 16px;
  margin-top: 8px;
`

export const EmptyDescriptionMessage = styled.Text`
  color: ${({ theme }) => theme.colors.textOnSecondary};
  opacity: 0.4;
  font-size: 16px;
  margin-top: 8px;
`

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`

export const Status = styled.Text`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.textOnSecondary};
  font-size: 16px;
`
type StatusCircleProps = {
  isCompleted?: boolean
}

export const StatusCheck = styled.TouchableOpacity<StatusCircleProps>`
  height: 20px;
  width: 20px;
  border-radius: 5px;
  background-color: ${({ theme, isCompleted }) => isCompleted ? theme.colors.completed : theme.colors.secondary};
  border: 2px solid ${({ theme, isCompleted }) => isCompleted ? theme.colors.completed : theme.colors.pending};
`
