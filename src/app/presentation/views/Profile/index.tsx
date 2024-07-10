import React from 'react'
import {Text, View} from 'react-native'
import { styles } from './style'
import InputField from '../../components/InputField'
import ActionButton from '../../components/ActionButton'
import { useAuth } from '../../contexts/AuthContext';
import { MyThemme } from 'src/styles/_variables';

function Profile() {

  const { signOut } = useAuth();

  function handleLogout(): void {
    signOut()
  }

  return (
    <View style={[styles.container]}>
      <View style={{marginHorizontal: 30}}>
        <View style={styles.titleContainer}>
          <Text>Entradas de texto de ejemplo</Text>
        </View>
        <InputField
          tag='test1'
          label="Input Test"
          //value={'formik.values.test1'}
          touched={true}
          onChangeText={text => {
            console.log(text)
            //formik.setFieldValue('test1', text.replace(/\s/g, ''));
          }}
          //textError={"Formik errors value"}
          placeholder="Ingresa el valor del input"
          maxLength={64}
        />
        <InputField
          tag='test2'
          label="Input Test 2"
          //value={'formik.values.test2'}
          touched={true}
          onChangeText={text => {
            console.log(text)
            //formik.setFieldValue('test2', text.replace(/\s/g, ''));
          }}
          //textError={"Formik errors value"}
          placeholder="Ingresa el valor del input 2"
          maxLength={64}
        />

        <InputField
          tag='test3'
          label="Input Test 3"
          //value={'formik.values.test3'}
          touched={true}
          onChangeText={text => {
            console.log(text)
            //formik.setFieldValue('test3', text.replace(/\s/g, ''));
          }}
          //textError={"Formik errors value"}
          placeholder="Ingresa el valor del input 3"
          maxLength={64}
          secureTextEntry={true}
        />

        <ActionButton 
          label={'Cerrar sesión'}
          onPress={() => handleLogout()}
          colorText={MyThemme.neutral_white}
        />
      </View>
    </View>
  )
}

export default Profile
