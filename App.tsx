import React from 'react'
import {ThemeProvider} from 'styled-components'
import ToDoListProvider from './src/contexts/toDoList'
import Routes from './src/routes'
import {theme} from './src/theme'

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ToDoListProvider>
        <Routes />
      </ToDoListProvider>
    </ThemeProvider>
  )
}

export default App
