import { NavigationProp } from '@react-navigation/native'
import { TodoItem } from '.'

export type RoutesProps = {
  Home: undefined
  Details: { todoItem: TodoItem, onTodoItemChange: (item: TodoItem) => void }
}

export type NavigationProps = NavigationProp<{
  Home: undefined
  Details: { todoItem: TodoItem }
}>
