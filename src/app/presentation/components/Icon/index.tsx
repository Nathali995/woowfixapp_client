import React from 'react'
import {styles} from './style'
import { MyThemme } from 'src/styles/_variables'

import {SvgXml} from 'react-native-svg'
import {IconoFantasma} from '@woowtechnology/iconospackage'

import {Pressable, TouchableOpacity, View} from 'react-native'
import TextGeneral from '../TextGeneral'

type Props = {
  texto?: string
  textoColor?: string
  textoTamanio?: number
  icono: any
  iconoTamanio?: any
  estilos?: any
  estiloTexto?: any
  onPress?: any
  alPresionar?: any
  direccion?: string
  nuevo?: any
  colorIcon?: string
  ancho: number
  alto: number
  flex?: number
}

export default function Icon(props: Props) {
  if (props.nuevo) {
    if (!props.alPresionar) {
      return (
        <View
          style={{
            ...props.estilos,
            flex: props.flex,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SvgXml
            xml={props.icono || IconoFantasma}
            width={props.ancho || 24}
            height={props.alto || 24}
            fill={props.colorIcon}
          />
          {props.texto && (
            <TextGeneral
              texto={props.texto}
              color={props.colorIcon || MyThemme.neutral_black}
              tamanio={props.textoTamanio}
              marginTop={6}
            />
          )}
        </View>
      )
    }
    return (
      <Pressable
        style={{
          ...props.estilos,
          flex: props.flex,
          zIndex: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={props.alPresionar}>
        <SvgXml
          xml={props.icono || IconoFantasma}
          width={props.ancho || 24}
          height={props.alto || 24}
          fill={props.colorIcon}
          onPress={props.alPresionar}
        />
        {props.texto && (
          <TextGeneral
            texto={props.texto}
            color={props.colorIcon || MyThemme.neutral_black}
            tamanio={props.textoTamanio}
            marginTop={6}
          />
        )}
      </Pressable>
    )
  }

  return (
    <TouchableOpacity onPress={props.onPress || props.alPresionar}>
      <View
        style={{
          ...styles.contenedor,
          ...props.estilos,
          flexDirection: props.direccion || 'column',
        }}>
        <View
          style={{
            ...styles.contenedorIcono,
            ...props.iconoTamanio,
          }}>
          {props.icono}
        </View>
        <TextGeneral
          texto={props.texto || ''}
          color={props.colorIcon || MyThemme.neutral_black}
          alinear="center"
          tamanio={props.textoTamanio}
          estilos={props.estiloTexto}
        />
      </View>
    </TouchableOpacity>
  )
}