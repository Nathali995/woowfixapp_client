import React from 'react'
import {ScrollView, Text, View} from 'react-native'
import {styles} from './style'
import { useAuth } from 'src/app/presentation/contexts/AuthContext';
import { TRANSLATE } from 'src/app/infrastructure/config/constants'
import ActionButton from 'src/app/presentation/components/ActionButton'
import InputField from 'src/app/presentation/components/InputField';
import LinkText from 'src/app/presentation/components/LinkText';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DividerLine from 'src/app/presentation/components/DividerLine';
import * as yup from 'yup';
import {useFormik} from 'formik';
import { WoowFixLogo, ProfileFilled } from 'src/assets/images';
import ImageWraper from 'src/app/presentation/components/ImageWraper';
import IconText from 'src/app/presentation/components/IconText';
import SocialButtons from 'src/app/presentation/components/SocialButtons';
import LoginInfo from 'src/app/domain/entity/AuthUser/structure/LoginInfo';
import LoginPresenter from './LoginPresenter';
import { MyThemme } from 'src/styles/_variables'

function Login() {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const presenter: LoginPresenter = new LoginPresenter();

  const {signIn} = useAuth();

  function goToRegister(){
    navigation.navigate('register', {});
  }

  function goToForgotPassword(){
    navigation.navigate('forgot-password', {});
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string()
        .required(TRANSLATE.ES.MESSAGE_EMAIL_REQUIRED),
      password: yup.string()
        .min(8, TRANSLATE.ES.MESSAGE_PASSWORD_MIN)
        .max(32, TRANSLATE.ES.MESSAGE_PASSWORD_MAX)
        .required(TRANSLATE.ES.MESSAGE_PASSWORD_REQUIRED),
    }),
    onSubmit: async formData => {
      const loginInfo : LoginInfo = {
        email: formData.email,
        password: formData.password,
      }
      await presenter.submitFormLogin(loginInfo)
      .then(response => {
        if (response){
          signIn(response)
          console.log('Usuario logueado',  formData.email)
        }
      })
      .catch(err => {
        formik.setFieldError('password', 'Correo o contraseña incorrecta.')
      })
    },
  });

  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <ImageWraper src={WoowFixLogo} height={115} width={115} />
          <IconText src={ProfileFilled} label={`${TRANSLATE.ES.TAG_LOGIN}`} />
        </View>
        <InputField
          tag='email'
          formik={formik}
          label={TRANSLATE.ES.TAG_EMAIL}
          placeholder={TRANSLATE.ES.MESSAGE_EMAIL_EXAMPLE}
          maxLength={128}
        />
        <InputField
          tag='password'
          label={TRANSLATE.ES.TAG_PASSWORD}
          formik={formik}
          placeholder={TRANSLATE.ES.MESSAGE_PASSWORD}
          maxLength={128}
          secureTextEntry={true}
        />
        <View style={styles.forgotPasswordContainer}>
          <LinkText 
            style={styles.linkTextForgotPassword} 
            label={`¿${TRANSLATE.ES.MESSAGE_FORGOT_PASSWORD}?`} 
            onPress={goToForgotPassword}
          />
        </View>
        <ActionButton 
          label={TRANSLATE.ES.TAG_LOG}
          colorText={MyThemme.neutral_white}
          disabled={!(formik.dirty && formik.isValid)}
          onPress={formik.handleSubmit}
        />
        <DividerLine />
      </View>
      <View style={styles.socialsBtnContainer}>
        <Text style={styles.textLoginLike}>{TRANSLATE.ES.MESSAGE_LOGIN_LIKE}:</Text>
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
      <View style={styles.registredLabel}>
        <Text style={styles.textRegister}>{`¿${TRANSLATE.ES.MESSAGE_NO_ACCOUNT_YET}? `}</Text>
        <LinkText 
          style={styles.linkTextRegister} 
          label={TRANSLATE.ES.TAG_REGISTER_IN} 
          onPress={goToRegister}
        />
      </View>
      </ScrollView>
  )
}

export default Login
