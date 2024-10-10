import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import Screen1 from "./screens/Screen1"
import Screen2 from "./screens/Screen2"
import Screen11 from "./screens/Screen11"

export type RootStackParamList = {
  Home: undefined
  Screen1: undefined
  Screen2: undefined
  Screen11: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Screen1' component={Screen1} />
        <Stack.Screen name='Screen2' component={Screen2} />
        <Stack.Screen name='Screen11' component={Screen11} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App