import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {styles} from './style'
//import {mainStyles} from 'src/styles/main'
import InputField from '../../../../components/InputField'
import { Formik, useFormik } from 'formik';
import * as yup from 'yup'
import ActionButton from 'src/app/presentation/components/ActionButton';
import { APP_COLOR } from 'src/app/infrastructure/config/constants';

function ForgotPassword() {
  
  
    const formik = useFormik({
      initialValues: {
        email: ''
      },
      validationSchema:(yup.object().shape({
        email: yup.string().email().required('El campo correo es requerido.'),
        
      })),
      onSubmit: values => {
        console.log(values)
      },
    });

  return (
    <View style={[styles.container]}>
      <View style={{marginHorizontal: 30}}>
        <InputField
            tag="email"
            label=""
            touched={formik.touched.email}
            onChangeText={(text: any) => {
              console.log(text)
              formik.setFieldValue('email', text.replace(/\s/g, ''));
            }}
            textError={formik.errors['email']}
            placeholder="Email"
            maxLength={64}
          />
            <ActionButton 
                label={'Enviar'}
                onPress={() => formik.handleSubmit()}
                type={'Submit'}
                colorText={APP_COLOR.generic.neutral_white}
              />
      </View>
    </View>
  )
}

export default ForgotPassword
