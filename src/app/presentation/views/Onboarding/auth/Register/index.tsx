import React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import {styles} from './style'
import {mainStyles} from 'src/styles/main'
import {useFormik} from 'formik'
import * as yup from 'yup'
import InputField from 'src/app/presentation/components/InputField'
import ActionButton from 'src/app/presentation/components/ActionButton'
import {TRANSLATE} from 'src/app/infrastructure/config/constants'
import Checkbox from 'src/app/presentation/components/Checkbox'
import SocialButtons from 'src/app/presentation/components/SocialButtons'
import ImageWraper from 'src/app/presentation/components/ImageWraper'
import IconText from 'src/app/presentation/components/IconText'
import {ProfileFilled, WoowFixLogo} from 'src/assets/images'
import DividerLine from 'src/app/presentation/components/DividerLine'
import { MyThemme } from 'src/styles/_variables'

function Register({navigation}: any) {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      acceptTC: false,
    },
    validationSchema: yup.object().shape({
      fullName: yup.string().required('Campo requerido'),
      email: yup
        .string()
        .email('Correo electrónico es inválido')
        .required('Campo requerido'),
      password: yup
        .string()
        .min(4)
        .max(10, 'Contraseña no debe exceder los 10 caracteres.')
        .required('Campo requerido'),
      acceptTC: yup.bool().isTrue('Campo requerido'),
    }),
    onSubmit: values => {
      console.log(values)
    },
  })

  const handleRegister = () =>{
    formik.handleSubmit()      
    navigation.navigate('add-car-data')
  }

  return (
    <ScrollView style={[styles.container]}>
      <View style={mainStyles.headerContainer}>
        <ImageWraper src={WoowFixLogo} height={115} width={115} />
        <IconText src={ProfileFilled} label={`${TRANSLATE.ES.TAG_REGISTER_IN}`} />
      </View>
      <View style={{marginHorizontal: 30, marginTop: 20}}>
        <InputField
          tag="fullName"
          formik={formik}
          label={'Nombre y Apellido'}
          placeholder={'Ej: Jose Portilla'}
          maxLength={100}
        />
        <InputField
          tag="email"
          formik={formik}
          label={'Correo Electrónico'}
          placeholder={'Ej: tu@email.com'}
        />
        <InputField
          tag="password"
          formik={formik}
          label={'Contraseña'}
          placeholder={'Ingresa una contraseña'}
          secureTextEntry={true}
        />
        <View>
          <Checkbox
            name={'acceptTC'}
            labelText={'Acepto términos y condiciones'}
            formik={formik}
            isSquare={false}
          />
        </View>
        <ActionButton
          label={'Registrarse'}
          onPress={() => handleRegister()}
          colorText={MyThemme.neutral_white}
        />
        <DividerLine />
      </View>
      <View style={styles.socialsBtnContainer}>
        <Text style={mainStyles.textLoginLike}>
          {TRANSLATE.ES.MESSAGE_LOGIN_LIKE}:
        </Text>
        <SocialButtons
          googleEnable={true}
          facebookEnable={true}
          appleEnable={true}
          googleOnPress={() => {
            console.log('Iniciar sesión con google...')
          }}
          facebookOnPress={() => {
            console.log('Iniciar sesión con facebook...')
          }}
          appleOnPress={() => {
            console.log('Iniciar sesión con apple...')
          }}
        />
      </View>
    </ScrollView>
  )
}

export default Register
