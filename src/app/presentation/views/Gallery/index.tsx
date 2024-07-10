import React, { useEffect, useState } from 'react'
import {ScrollView, Text, View, Image, useWindowDimensions} from 'react-native'
import { styles, colors } from './style'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { items } from '../Home/ExampleData/AllMechanics';
import { useRoute } from '@react-navigation/native';
import { MultimediaGallery } from '../../components/MultimediaGallery';

export default function Gallery() {

  const route = useRoute()
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([])
  const videos = [
    {
      id: 1,
      itemUrl: 'https://player.vimeo.com/progressive_redirect/playback/907581242/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=371b165bd4e058486034721b3150cbacbfd0e0e557c7abd1c7349f2941a21615',
    },
    {
      id: 2,
      itemUrl: 'https://player.vimeo.com/progressive_redirect/playback/796225084/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=377689968cf565f91b379159803b58be5991063b81da0115b178c80615b256e1',
    },
    {
      id: 3,
      itemUrl: 'https://player.vimeo.com/progressive_redirect/playback/902708404/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=8978e70f339104ef80bc5d55012b96e4d1889c713a7f4345fd8aff8d003ce2f7',
    }
  ]
  const [routes] = useState([
    { 
      key: 'images', 
      title: 'Fotografías' 
    },
    { 
      key: 'videos', 
      title: 'Videos' 
    }
  ]);
  
  useEffect(() => {
    // Consultar datos de los videos y fotos por mecánica
    handleImages()
  }, []);

  const handleImages = () => {
    const fullImages = items[route.params?.id - 1 ?? 1].imageStack
    let result = []
    fullImages.map((item, index) => {
      result.push({id: item.id, itemUrl: item.image})
      
    });
    setImages(result)
  }
  
  const ImagesRoute = () => (
    <View style={styles.scrollView}> 
      <View style={{paddingTop: 15}}>
        <MultimediaGallery 
          type={'photos'}
          items={images}
        />
      </View>
    </View>
  );

  const VideosRoute = () => (
    <View style={styles.scrollView}> 
      <View style={{paddingTop: 15}}>
        <MultimediaGallery 
          type={'videos'}
          items={videos}
        />
      </View>
    </View>
  );

  const renderScene = SceneMap({
    images: ImagesRoute,
    videos: VideosRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      inactiveColor={colors.tabBarInactiveColor}
      activeColor={colors.tabBarActiveColor}
      getLabelText={({route}) => {
        return route.title
      }}
      labelStyle={styles.tabBarLabel}
      style={styles.tabBar}
      scrollEnabled={true}
    />
  );

  return (
    <View style={styles.tabViewContainer}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width}}
        renderTabBar={renderTabBar}
        style={styles.tabView}
      />
    </View>
  )
}
