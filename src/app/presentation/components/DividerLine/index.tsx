import React from 'react'
import {Text, View} from 'react-native'
import {styles} from './style'

function DividerLine() {
  return (
      <View style={styles.divider}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>o</Text>
        <View style={styles.dividerLine}></View>
      </View>
  )
}

export default DividerLine
