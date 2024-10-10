import { View, Text, Pressable } from 'react-native'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

const Screen1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Screen11')}>
          <Text>Screen 11</Text>
        </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </Pressable>
    </View>
  )
}

export default Screen1