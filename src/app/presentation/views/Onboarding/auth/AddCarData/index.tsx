import React, {useState} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import {styles} from './style'
import {mainStyles} from 'src/styles/main'
import {useFormik} from 'formik'
import * as yup from 'yup'
import InputField from 'src/app/presentation/components/InputField'
import ActionButton from 'src/app/presentation/components/ActionButton'
import {TRANSLATE} from 'src/app/infrastructure/config/constants'
import TextHeader from 'src/app/presentation/components/TextHeader'
import {MyThemme} from 'src/styles/_variables'
import LinkText from 'src/app/presentation/components/LinkText'
import {useAuth} from 'src/app/presentation/contexts/AuthContext'
import Selector from 'src/app/presentation/components/Selector'
import {getYearList} from 'src/shared/utils/DateUtils'
import {CAR_CATEGORIES, CAR_SUB_CATEGORIES} from 'src/shared/utils/Constants'

function AddCarData({navigation}: any) {
  const {signIn} = useAuth()
  const formik = useFormik({
    initialValues: {
      phone: '',
      brand: '',
      model: '',
      year: '',
      mileage: '',
      category: '',
      subcategory: '',
    },
    validationSchema: yup.object().shape({
      phone: yup.string(),
      brand: yup.string(),
      model: yup.string(),
      year: yup.string(),
      mileage: yup.string(),
      category: yup.string(),
      subcategory: yup.string(),
    }),
    onSubmit: values => {
      console.log(values)
    },
  })

  const [subcategories, setSubcategories] = useState<any[]>([])

  const goToDashboard = () => {
    signIn({
      /* Pasar datos de sesión */
    })
  }
  const onChangeCategory = (category: string) => {
    const newSubcategories = CAR_SUB_CATEGORIES.filter(
      item => item.category === category,
    )
    setSubcategories(newSubcategories)
  }
  const handleSave = () => {
    formik.handleSubmit()
    goToDashboard()
  }

  return (
    <ScrollView style={[styles.container]}>
      <View style={{marginHorizontal: 30, marginTop: 20}}>
        <View style={mainStyles.headerContainer}>
          <TextHeader label={`${TRANSLATE.ES.TAG_CAR_DATA}`}></TextHeader>
        </View>
        <InputField
          tag="phone"
          formik={formik}
          label={'Número telefónico'}
          placeholder={'Ej: 0988877766'}
          maxLength={10}
          keyboardType='phone-pad'
          isPhoneType={true}
        />
        <InputField
          tag="brand"
          formik={formik}
          label={'Marca'}
          placeholder={'Ej: Toyota'}
          maxLength={100}
        />
        <InputField
          tag="model"
          formik={formik}
          label={'Modelo'}
          placeholder={'Ej: Tacoma'}
        />
        <Selector
          name="year"
          formik={formik}
          label={'Año'}
          placeholder={'Seleccione un año'}
          data={getYearList()}></Selector>
        <InputField
          tag="mileage"
          formik={formik}
          label={'Kilometraje'}
          placeholder={'Ej: 67000'}
        />
        <Selector
          name="category"
          formik={formik}
          label={'Categoría'}
          placeholder={'Seleccione una categoría'}
          data={CAR_CATEGORIES}
          onSelect={onChangeCategory}></Selector>
        <Selector
          name="subcategory"
          formik={formik}
          label={'Subcategoría'}
          placeholder={'Seleccione una subcategoría'}
          data={subcategories}
          disabled={subcategories.length === 0}></Selector>
        <View style={styles.actionButton}>
          <ActionButton
            label={'Guardar'}
            onPress={() => handleSave()}
            colorText={MyThemme.neutral_white}
          />
          <LinkText label={TRANSLATE.ES.TAG_SKIP} onPress={goToDashboard} />
        </View>
      </View>
    </ScrollView>
  )
}

export default AddCarData
