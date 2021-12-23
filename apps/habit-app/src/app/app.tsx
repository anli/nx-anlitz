import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const Stack = createNativeStackNavigator()

const WelcomeScreen = (): React.ReactElement => {
  return (
    <SafeAreaView>
      <Text>Welcome</Text>
    </SafeAreaView>
  )
}

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
