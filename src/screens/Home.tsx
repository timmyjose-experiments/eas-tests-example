import { View, Text, Pressable } from 'react-native'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

const Home = () => {
  const navigaton = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigaton.navigate('Screen1')}>
          <Text>Screen 1</Text>
        </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigaton.navigate('Screen2')}>
          <Text>Screen 2</Text>
        </Pressable>
    </View>
  )
}

export default Home