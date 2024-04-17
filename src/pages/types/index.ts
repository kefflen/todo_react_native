export * from './NavigationProps'

export enum StatusEnum {
  PENDING = 'PENDING',
  DONE = 'DONE'
}

export type TodoItem = {
  title: string
  description: string
  status: StatusEnum
}
