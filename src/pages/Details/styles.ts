import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
`

export const FormContainer = styled.View`
  padding: 8px;
  margin-top: 12px;
`

export const Label = styled.Text`
  color: ${({ theme}) => theme.colors.primary};
  font-weight: bold;
  font-size: 16px;
  margin-top: 8px;
  margin-left: 8px;
`

export const Input = styled.TextInput`
  border: 1px solid ${({ theme}) => theme.colors.border};
  border-radius: 4px;
  margin: 8px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.textOnSecondary};
  color: black;
`

export const ActionsContainer = styled.View`

`

export const SaveAction = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  align-items: center;
`

export const SaveActionText = styled.Text`
  color: ${({ theme,
  }) => theme.colors.textOnPrimary};
`
