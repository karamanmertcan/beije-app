import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Header from '../components/Header';
import PageHoc from '../layout/PageHoc';

import {Slider} from '@miblanchard/react-native-slider';

import {
  TabView,
  SceneMap,
  TabBar,
  TabBarItem,
  TabBarIndicator,
} from 'react-native-tab-view';
import colors from '../styles/colors';
import SliderContainer from '../components/SliderContainer';

type Props = {};

const FirstRoute = () => {
  const layout = useWindowDimensions();

  const [value, setValue] = React.useState(0);
  return (
    <View
      style={{
        backgroundColor: colors.green,
        alignSelf: 'stretch',
        width: layout.width - 60,
      }}>
      <SliderContainer
        caption="<Slider/> with track marks"
        sliderValue={[1]}
        trackMarks={[3, 7, 11]}>
        <Slider maximumValue={17} minimumValue={0} step={1} />
      </SliderContainer>
    </View>
  );
};

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: colors.fixedWhite}} />
);
const ThirdRoute = () => (
  <View style={{flex: 1, backgroundColor: colors.fixedWhite}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const HomeScreen = (props: Props) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'beije Ped'},
    {key: 'second', title: 'beije Günlük Ped'},
    {key: 'third', title: 'beije Tampon'},
  ]);

  return (
    <>
      <Header />
      <View style={styles.filler} />
      <View style={styles.container}>
        <View
          style={{
            padding: 27,
          }}>
          <Text style={styles.headerText}>Kendi Paketini Oluştur</Text>
          <View style={styles.filler2} />
          <Text style={styles.innerText}>
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </Text>
        </View>

        <TabView
          swipeEnabled={false}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{
                backgroundColor: '#fff',
              }}
              renderLabel={({route, focused}) => (
                <Text style={{color: 'rgb(52, 49, 49)', margin: 8}}>
                  {route.title}
                </Text>
              )}
              indicatorStyle={{
                backgroundColor: 'black',
              }}
            />
          )}
          style={{
            padding: 27,
          }}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  filler: {
    height: 40,
    width: '100%',
  },
  headerText: {
    fontWeight: '500',
    fontSize: 28,
  },
  innerText: {
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(0,0,0,.6)',
  },
  filler2: {
    height: 24,
  },
});

export default PageHoc(HomeScreen);
