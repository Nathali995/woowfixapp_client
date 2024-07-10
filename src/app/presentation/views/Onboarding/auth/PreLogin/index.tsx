import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {RoundedButton} from 'src/app/presentation/components/RoundedButton'
import {CustomCarousel} from 'src/app/presentation/components/CustomCarrusel'
import {API_KEY} from '@env'
import {styles} from './style'

function Prelogin({navigation}: any) {
  function handleLogin(): void {
    console.log(API_KEY, 'API_KEY')
    navigation.navigate('login')
  }
  function handleRegister(): void {
    navigation.navigate('register')
  }
  return (
    <View style={styles.container}>
      <CustomCarousel />
      <View style={styles.space_buttons}>
        <RoundedButton text="LOGIN" onPress={handleLogin} />
        <RoundedButton text="REGISTER" onPress={handleRegister} />
      </View>
    </View>
  )
}
export default Prelogin
