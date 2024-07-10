import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './style'
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { items } from '../Home/ExampleData/AllMechanics'
import { Wrench, StarFull, Car, ChatBubble } from 'src/assets/svg'
import { MyThemme } from 'src/styles/_variables';
import { BasicCarousel } from '../../components/BasicCarousel';
import LinkText from '../../components/LinkText';
import Map from '../../components/Map';
import ImageWraper from '../../components/ImageWraper';
import { PositionMarker } from 'src/assets/images';
import { CommentsCarousel } from '../../components/CommentsCarousel';
import { items as CommentsItems } from '../Home/ExampleData/Comments'
import ActionButton from '../../components/ActionButton';
import LinkButton from '../../components/LinkButton';


export default function MechanicDetails() {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute()
  const [mechanics, setMechanics] = useState({})
  const [displayMap, setDisplayMap] = useState(false)

  useEffect(() => {
    // Consultar datos de la mecánica por el ID (route.params?.id)
    setMechanics(items[route.params?.id - 1 ?? 1])
    // Wait 1 seg to display map
    setTimeout(() => {
      setDisplayMap(true)
    }, 1000)
  }, [])

  useEffect(() => {
    navigation.setOptions({
      title: route.params?.mechanicsName
    })
  }, [])

  const showMoreWorks = () => {
    navigation.navigate('gallery', { id: mechanics?.id });
  }

  const showMoreComments = () => {
    navigation.navigate('comments', { id: mechanics?.id });
  }

  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.circleContainer}>
            <View style={styles.circleIcon}>
              <StarFull
                style={styles.imageIcon}
                width={24}
                height={24}
                color={'#FFD400'}
              />
            </View>
            <Text>{mechanics.mechanicsRating + '+' ?? 0}</Text>
            <Text style={styles.label}>Calificación</Text>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circleIcon}>
              <Car
                style={styles.imageIcon}
                width={24}
                height={24}
                color={MyThemme.woowfix_primary}
              />
            </View>
            <Text>{mechanics.totalClients + '+' ?? 0}</Text>
            <Text style={styles.label}>Clientes</Text>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circleIcon}>
              <Wrench
                style={styles.imageIcon}
                width={24}
                height={24}
                color={MyThemme.woowfix_primary}
              />
            </View>
            <Text>{mechanics.yearsExp + '+' ?? 0}</Text>
            <Text style={styles.label}>Años Exp.</Text>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circleIcon}>
              <ChatBubble
                style={styles.imageIcon}
                width={24}
                height={24}
                color={MyThemme.woowfix_primary}
              />
            </View>
            <Text>{mechanics.totalComments ?? 0}</Text>
            <Text style={styles.label}>Comentarios</Text>
          </View>
        </View>
        <View style={styles.aboutUsContainer}>
          <Text style={styles.titles}>Sobre nosotros</Text>
          <Text style={styles.paragraph}>{mechanics.aboutUs ?? 'No data'}</Text>
        </View>
        <View style={styles.worksDoneContainer}>
          <View style={styles.worksDoneAndShowMoreContainer}>
            <Text style={styles.titles}>Trabajos realizados</Text>
            <LinkText
              style={styles.linkTextShowMore}
              label={'Ver más'}
              onPress={showMoreWorks}
            />
          </View>
          <View style={styles.worksDoneCarouselContainer}>
            <BasicCarousel
              items={mechanics.imageStack ?? []}
            />
          </View>
        </View>
        <View style={styles.enabledServiceContainer}>
          <Text style={styles.titles}>Servicios disponibles</Text>
          <View style={styles.serviceBagContainer}>
            {
              mechanics.repairing ?
                mechanics.repairing.map((item: string, index: number) => {
                  return (
                    <View key={index} style={styles.serviceBag}><Text>{item}</Text></View>
                  );
                }) : (<></>)
            }
          </View>
        </View>
        <View style={styles.schedulesContainer}>
          <Text style={styles.titles}>Horarios de atención</Text>
          {
            mechanics.serviceHours ?
              mechanics.serviceHours.map((item: {}, index: number) => {
                return (
                  <View style={styles.serviceEnabledContainer} key={index}>
                    <Text style={styles.label}>{item?.label}</Text>
                    <Text style={styles.label}>{item?.start && item?.end ? `${item?.start} - ${item?.end}` : 'No hay atención'}</Text>
                  </View>
                )
              }) : (<></>)
          }
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.titles}>Dirección</Text>
          <View style={styles.addressAndMapContainer}>
            <View style={{ flexDirection: 'row' }}>
              <ImageWraper src={PositionMarker} height={18} width={18} opacity={0.5} />
              <Text style={styles.label}>{mechanics?.mechanicsAddress}</Text>
            </View>
            {
              displayMap ? (<Map markers={mechanics.mechanicsLocation} />) : (<></>)
            }
          </View>
        </View>
        <View style={styles.schedulesContainer}>
          <View style={styles.commentsAndShowMoreContainer}>
            <Text style={styles.titles}>Comentarios</Text>
            <LinkText
              style={styles.linkTextShowMore}
              label={'Ver más'}
              onPress={showMoreComments}
            />
          </View>
          <CommentsCarousel
            items={CommentsItems}
          />
          <LinkButton label='Crear una reseña' onPress={() => navigation.navigate('comments-form', {id: route.params?.id})}/>
        </View>
      </ScrollView>
      <View style={styles.actionButtonContainer}>
        <ActionButton
          label={'Agendar cita'}
          colorText={MyThemme.neutral_white}
          disabled={false}
          onPress={() => { console.log('Agendar cita...')}}
        />
      </View>
    </View>
  )
}
