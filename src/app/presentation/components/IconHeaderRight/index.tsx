import React from 'react'
import {FlexStyle, TouchableOpacity, View} from 'react-native'
import {styles} from './style'
import {IconProfile, Filter, Bell} from 'src/assets/svg'
import {ParamListBase, useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {MyThemme} from 'src/styles/_variables'

type ButtonProps = {
  style?: FlexStyle
  showButton: boolean
  enabledButton?: boolean
  screenName?: string
}

export default function IconHeaderRight(props: ButtonProps) {
  const {screenName, enabledButton= false} = props
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  const hasNotifications = false;

  const navigateTo = (route: string) =>{
    navigation.navigate(route)
  }

  const getIconHeaderRight = () => {
    let component = <></>
    switch (screenName) {
      case 'home':
        component = (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.pressable}
              onPress={() => navigateTo('filters')}>
              <Filter
                width={18}
                height={18}
                color={
                  enabledButton
                    ? MyThemme.woowfix_secondary
                    : MyThemme.neutral_gray
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pressable}
              onPress={() => navigateTo('notifications')}>
              <Bell
                width={18}
                height={18}
                color={
                  hasNotifications
                    ? MyThemme.woowfix_secondary
                    : MyThemme.neutral_gray
                }
              />
            </TouchableOpacity>
          </View>
        )
        break

      default:
        component = (
          <TouchableOpacity style={styles.pressable} onPress={()=>navigateTo('profile')}>
            <IconProfile
              width={18}
              height={19}
              color={
                props.enabledButton
                  ? MyThemme.woowfix_secondary
                  : MyThemme.neutral_gray
              }
            />
          </TouchableOpacity>
        )
        break
    }
    return component
  }

  return <View>{props.showButton && getIconHeaderRight()}</View>
}
