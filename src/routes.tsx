import {NavigationContainer} from '@react-navigation/native'
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack'
import React from 'react'
import {useTheme} from 'styled-components'
import {Details} from './pages/Details'
import {Home} from './pages/Home'

const Stack = createStackNavigator()

export default function Routes() {
  const theme = useTheme()
  console.log(theme)
  const basicScreanOptions: StackNavigationOptions = {
    title: 'Todo App',
    headerTitleAlign: 'center',
    headerTintColor: theme.colors.textOnPrimary,
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: theme.colors.textOnPrimary,
    },
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            ...basicScreanOptions,
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details as any}
          options={{
            ...basicScreanOptions,
            title: 'Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
