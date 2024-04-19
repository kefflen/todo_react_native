export * from './NavigationProps'

export enum StatusEnum {
  PENDING = 'PENDING',
  DONE = 'DONE'
}

export type TodoItem = {
  id: string
  title: string
  description: string
  status: StatusEnum
}
