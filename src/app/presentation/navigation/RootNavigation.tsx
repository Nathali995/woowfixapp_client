import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomNavigation from './BottomNavigation'
import Filters from '../views/Filters'
import {StyleProp, Text, TouchableOpacity} from 'react-native'
import {ArrowLeft, AddIcon} from 'src/assets/svg'
import {MyThemme} from 'src/styles/_variables'
import MechanicDetails from '../views/MechanicDetails'
import Comments from '../views/Comments'
import Gallery from '../views/Gallery'
import CommentsForm from '../views/Comments/form'
import { styles } from './style'

const Stack = createNativeStackNavigator()

const tabs = ['Inicio', 'Mi auto', 'Reservas', 'Cuenta', 'Mapa']

type Props = {
  titleState: any
}
export default function RootNavigation({titleState}: Props) {
  const getBack = (navigation: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft
          width={16}
          height={16}
          color={MyThemme.woowfix_primary}></ArrowLeft>
      </TouchableOpacity>
    )
  }
  const addReview = (navigation: any) => {
    return (
      <TouchableOpacity style={styles.reviewButtonContainer} onPress={() => navigation.navigate('comments-form', {})}>
        <AddIcon
          width={16}
          height={16}
          color={MyThemme.woowfix_primary}></AddIcon>
          <Text style={styles.reviewText} >Escribir reseña</Text>
      </TouchableOpacity>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="main" options={{headerShown: false, contentStyle: {backgroundColor: MyThemme.neutral_white}}}>
        {props => (
          <BottomNavigation {...props} currentTab={tabs.indexOf(titleState)} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="filters"
        component={Filters}
        options={({navigation, route}) => ({
          headerShown: true,
          headerShadowVisible: true,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Filtros',
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: MyThemme.font_family,
            fontWeight: '400',
          },
          headerLeft: () => getBack(navigation),
        })}
      />
      <Stack.Screen
        name="mechanic-details"
        component={MechanicDetails}
        options={({navigation, route}) => ({
          headerShown: true,
          headerShadowVisible: true,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Mecánica',
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: MyThemme.font_family,
            fontWeight: '400',
          },
          headerLeft: () => getBack(navigation),
        })}
      />
      <Stack.Screen
        name="comments"
        component={Comments}
        options={({navigation, route}) => ({
          headerShown: true,
          headerShadowVisible: true,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Comentarios',
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: MyThemme.font_family,
            fontWeight: '400',
          },
          headerLeft: () => getBack(navigation),
          headerRight: () => addReview(navigation),
        })}
      />
      <Stack.Screen
        name="gallery"
        component={Gallery}
        options={({navigation, route}) => ({
          headerShown: true,
          headerShadowVisible: true,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Galería de archivos',
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: MyThemme.font_family,
            fontWeight: '400',
          },
          headerLeft: () => getBack(navigation),
        })}
      />
      <Stack.Screen
        name="comments-form"
        component={CommentsForm}
        options={({navigation, route}) => ({
          headerShown: true,
          headerShadowVisible: true,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Escribir reseña',
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: MyThemme.font_family,
            fontWeight: '400',
          },
          headerLeft: () => getBack(navigation),
        })}
      />
    </Stack.Navigator>
  )
}
