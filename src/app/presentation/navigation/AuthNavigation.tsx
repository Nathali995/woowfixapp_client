import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {TouchableOpacity} from 'react-native'
import PreLogin from '../views/Onboarding/auth/PreLogin'
import Login from '../views/Onboarding/auth/Login'
import Register from '../views/Onboarding/auth/Register'
import OneTimePassword from '../views/Onboarding/auth/OneTimePassword'
import ForgotPassword from '../views/Onboarding/auth/ForgotPassword'
import AddCarData from '../views/Onboarding/auth/AddCarData'
import {ArrowLeft} from 'src/assets/svg'
import {MyThemme} from 'src/styles/_variables'

const Stack = createNativeStackNavigator()

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="pre-login">
      <Stack.Screen
        name="pre-login"
        component={PreLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
          title: '',
          headerBackTitleVisible: false,
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={({navigation, route}) => ({
          headerShown: true,
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft
                width={16}
                height={16}
                color={MyThemme.woowfix_primary}></ArrowLeft>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="one-time-password"
        component={OneTimePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgot-password"
        component={ForgotPassword}
        options={{headerShown: true, title: "Olvidate tu contraseña", headerBackTitle: 'Olvidate tu contraseña'}}
      />
      <Stack.Screen
        name="add-car-data"
        component={AddCarData}
        options={{headerShown: false, headerBackTitleVisible: false,}}
      />
    </Stack.Navigator>
  )
}
