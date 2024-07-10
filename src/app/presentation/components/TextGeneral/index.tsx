import React from 'react'
import { MyThemme } from 'src/styles/_variables'
import {Skeleton} from '@rneui/themed'
import {Text} from 'react-native'

type Props = {
  color?: string
  fuente?: string
  tamanio?: number
  texto: string
  alinear?: string
  children?: any
  estilos?: any
  marginHorizontal?: number
  marginVertical?: number
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  ellipsis?: number
  cargando?: any
  tamanoEsqueleto?: number
  alturaEsqueleto?: number
  estiloEsqueletoCapaPrimaria?: any
  estiloEsqueletoCapaSecundaria?: any
  flex?: number
}

export default function TextGeneral(props: Props) {
  const selecionarFuente = (selecionarFuenteParametro: string) => {
    switch (selecionarFuenteParametro) {
      case 'light':
        return 'Montserrat-Light'
      case 'regular':
        return 'Montserrat-Regular'
      case 'medium':
        return 'Montserrat-Medium'
      case 'semiBold':
        return 'Montserrat-SemiBold'
      case 'bold':
        return 'Montserrat-Bold'
      default:
        return 'Montserrat-Regular'
    }
  }

  const TextoARenderizar = () => (
    <Text
      style={{
        color: props.color || MyThemme.neutral_black,
        fontFamily: selecionarFuente(props.fuente || 'Montserrat-Regular'),
        fontSize: props.tamanio,
        textAlign: props.alinear || 'left',
        marginHorizontal: props.marginHorizontal,
        marginVertical: props.marginVertical,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        flex: props.flex,
        ...props.estilos,
      }}
      numberOfLines={props.ellipsis}
      allowFontScaling={false}
      {...props}>
      {props.texto || props.children}
    </Text>
  )

  if (props.cargando) {
    return (
      <Skeleton
        width={props.tamanoEsqueleto || 100}
        height={props.alturaEsqueleto || 15}
        style={props.estiloEsqueletoCapaPrimaria}
        skeletonStyle={props.estiloEsqueletoCapaSecundaria}
      />
    )
  }

  return <TextoARenderizar />
}