export * from './NavigationProps'

export enum StatusEnum {
  PENDING = 'Pendente',
  DONE = 'Completo'
}

export type TodoItem = {
  id: string
  title: string
  description: string
  status: StatusEnum
}
