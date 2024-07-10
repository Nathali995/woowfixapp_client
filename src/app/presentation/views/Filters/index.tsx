import React, { useState } from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {styles} from './style'
import {mainStyles} from 'src/styles/main'
import SliderInput from 'src/app/presentation/components/RangeInput'
import {useFormik} from 'formik'
import * as yup from 'yup'
import RadioButtonList from 'src/app/presentation/components/RadioButtonList'
import {MyThemme} from 'src/styles/_variables'
import StarRatingLabel from './StarRatingLabel'
import SwitchList from 'src/app/presentation/components/SwitchList'
import ActionButton from 'src/app/presentation/components/ActionButton'
import CheckboxList from 'src/app/presentation/components/CheckboxList'
import {items as ServicesItems} from 'src/shared/ExampleData/Services'
import {items as BrandsItems} from 'src/shared/ExampleData/Brands'
import InputField from '../../components/InputField'

function Filters({navigation}: any) {
  const formik = useFormik({
    initialValues: {
      priceMin: 30,
      priceMax: 100,
      distanceMax: 5,
      brands: [2],
      brandName: '',
      rating: 5,
      services: [1],
    },
    validationSchema: yup.object().shape({
      priceMin: yup.number(),
      priceMax: yup.number(),
      distanceMax: yup.number(),
      brands: yup.array(),
      rating: yup.number(),
      services: yup.array(),
    }),
    onSubmit: values => {
      console.log(values)
    },
  })

  const getRatingsListFilter = () => {
    return [
      {
        value: 5,
        labelComponent: (
          <StarRatingLabel
            starFullNumber={5}
            starEmptyNumber={0}
            label="5 estrellas"></StarRatingLabel>
        ),
      },
      {
        value: 4,
        labelComponent: (
          <StarRatingLabel
            starFullNumber={4}
            starEmptyNumber={1}
            label="4 estrellas"></StarRatingLabel>
        ),
      },
      {
        value: 3,
        labelComponent: (
          <StarRatingLabel
            starFullNumber={3}
            starEmptyNumber={2}
            label="3 estrellas"></StarRatingLabel>
        ),
      },
      {
        value: 2,
        labelComponent: (
          <StarRatingLabel
            starFullNumber={2}
            starEmptyNumber={3}
            label="2 estrellas"></StarRatingLabel>
        ),
      },
    ]
  }

  return (
    <View style={[styles.container]}>
      <ScrollView style={[styles.container]} showsVerticalScrollIndicator>
        <View style={[styles.section, {marginTop: 15}]}>
          <SliderInput
            name="priceMin"
            name2="priceMax"
            labelText="Precio del Servicio General"
            isRange
            formik={formik}
            minimumValue={0}
            maximumValue={200}></SliderInput>
        </View>
        <View style={[styles.section]}>
          <SliderInput
            name="distanceMax"
            labelText="Distancia Máxima"
            formik={formik}
            minimumValue={0}
            maximumValue={50}></SliderInput>
        </View>
        <View style={[styles.section]}>
          <CheckboxList
            name="brands"
            labelText="Por marcas"
            formik={formik}
            checkboxList={BrandsItems}></CheckboxList>
          <View style={{marginHorizontal: 30, marginTop: 20}}>
            <InputField
              tag="brandName"
              formik={formik}
              label={'Otra marca'}
              placeholder={'Ej: Changan'}
              maxLength={100}
            />
          </View>
        </View>
        <View style={[styles.section]}>
          <RadioButtonList
            name="rating"
            labelText="Por calificación"
            radioList={getRatingsListFilter()}
            formik={formik}></RadioButtonList>
        </View>
        <View style={[styles.section]}>
          <SwitchList
            name="services"
            labelText="Por servicios"
            formik={formik}
            switchList={ServicesItems}></SwitchList>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ActionButton
          label={'Aplicar'}
          onPress={() => console.log('aa')}
          colorText={MyThemme.neutral_white}
          style={{margin: 10, padding: 10}}
        />
      </View>
    </View>
  )
}

export default Filters
