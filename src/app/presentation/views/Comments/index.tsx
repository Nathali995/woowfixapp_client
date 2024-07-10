import React, { useEffect, useState } from 'react'
import {ScrollView, Text, View, Image, useWindowDimensions} from 'react-native'
import { styles, colors } from './style'
import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StarFull } from 'src/assets/svg'
import { MyThemme } from 'src/styles/_variables';
import { items } from '../Home/ExampleData/Comments'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

type Item = {
  id: number,
  image: string
  username: string,
  comment: string,
  rating: number,
}

export default function Comments() {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute()
  const layout = useWindowDimensions();
  const [allComments, setAllComments] = useState([])
  const [fiveStarComments, setFiveStarComments] = useState([])
  const [fourStarComments, setFourStarComments] = useState([])
  const [threeStarComments, setThreeStarComments] = useState([])
  const [twoStarComments, setTwoStarComments] = useState([])
  const [oneStarComments, setOneStarComments] = useState([])
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { 
      key: 'all', 
      title: 'Todos' 
    },
    { 
      key: 'fiveStar', 
      title: '5 estrellas' 
    },
    { 
      key: 'fourStar', 
      title: '4 estrellas' 
    },
    { 
      key: 'threeStar', 
      title: '3 estrellas' 
    },
    { 
      key: 'twoStar', 
      title: '2 estrellas' 
    },
    { 
      key: 'oneStar', 
      title: '1 estrellas' 
    },
  ]);
  
  useEffect(() => {
    // Consultar datos de los comentarios
    setAllComments(items)
    handleStarItems(items)
  }, []);

  function handleStarItems(items: Item[]) {
    let result: Item[] = []
    items.map((item: Item, index: number) => {
      switch (item.rating) {
        case 5:
          setFiveStarComments([...fiveStarComments, item])
        break;
        case 4:
          setFourStarComments([...fourStarComments, item])
        break;
        case 3:
          setThreeStarComments([...threeStarComments, item])
        break;
        case 2:
          setTwoStarComments([...twoStarComments, item])
        break;
        case 1:
          setOneStarComments([...oneStarComments, item])
        break;
        default:
          break;
      }
    });
  }

  const returnComments = (item: Item, index: number) => {

    let rating = []
    for (let i = 0; i < item.rating; i++) {
      rating[i] = i
    }
  
    return (
      <View style={styles.item} key={index}>
        <View style={styles.imageAndRatingContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: item.image }}
              resizeMode={'cover'}
              style={styles.image}
              width={45}
              height={45}
            />
          </View>
          <View style={styles.ratingContainer}>
            {
              rating.map((i: number, v: number) => {
                return (
                  <View key={v}>
                    <StarFull
                      style={[styles.image, {marginLeft: 5}]}
                      width={20}
                      height={20}
                      color={MyThemme.woowfix_primary}
                    />
                  </View>
                )
              })
            }
          </View>
        </View>
        <View style={styles.textsContainer}>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{item.username}</Text>
          </View>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      </View>
    )
  }

  const AllCommentsRoute = () => (
    <ScrollView style={styles.scrollView}> 
      {
        allComments.length > 0 && allComments[0].id ? allComments.map((item: any, index: number) => {
          return returnComments(item, index);
        }) : (<></>)
      }
    </ScrollView>
  );

  const FiveStarRoute = () => (
    <ScrollView style={styles.scrollView}> 
      {
        fiveStarComments.length > 0 && fiveStarComments[0].id ? fiveStarComments.map((item: any, index: number) => {
          return returnComments(item, index);
        }) : (<></>)
      }
    </ScrollView>
  );

  const FourStarRoute = () => (
    <ScrollView style={styles.scrollView}> 
      {
        fourStarComments.length > 0 && fourStarComments[0].id ? fourStarComments.map((item: any, index: number) => {
          return returnComments(item, index);
        }) : (<></>)
      }
    </ScrollView>
  );
  const ThreeStarRoute = () => (
    <ScrollView style={styles.scrollView}> 
      {
        threeStarComments.length > 0 && threeStarComments[0].id ? threeStarComments.map((item: any, index: number) => {
          return returnComments(item, index);
        }) : (<></>)
      }
    </ScrollView>
  );

  const TwoStarRoute = () => (
    <ScrollView style={styles.scrollView}> 
      {
        twoStarComments.length > 0 && twoStarComments[0].id ? twoStarComments.map((item: any, index: number) => {
          return returnComments(item, index);
        }) : (<></>)
      }
    </ScrollView>
  );

  const OneStarRoute = () => (
    <ScrollView style={styles.scrollView}> 
      {
        oneStarComments.length > 0 && oneStarComments[0].id ? oneStarComments.map((item: any, index: number) => {
          return returnComments(item, index);
        }) : (<></>)
      }
    </ScrollView>
  );

  const renderScene = SceneMap({
    all: AllCommentsRoute,
    fiveStar: FiveStarRoute,
    fourStar: FourStarRoute,
    threeStar: ThreeStarRoute,
    twoStar: TwoStarRoute,
    oneStar: OneStarRoute,
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
