import React, {Text, View, Animated, Image} from 'react-native';
import Styles from './css';
import axios from 'axios';
import {REACT_APP_OPEN_WEATHER_API_KEY} from '@env';
import CurrentPosition from '../../utils/CurrentPosition';
import {useEffect, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ClearDay from '../../../public/weatherIcons/clear-day.svg';
import Svg, {Path} from 'react-native-svg';

const animatedValue = new Animated.Value(1);

const Main = () => {
  console.info('Main component');
  const [weather, setWeather] = useState({
    main: {
      temp: '??',
    },
    weather: [
      {
        icon: '01d',
        main: '',
      },
    ],
  });
  const {currentLatitude, currentLongitude} = CurrentPosition();

  const getWeatherCurrentPosition = () => {
    if (currentLatitude && currentLongitude) {
      const options = {
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&units=metric&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`,
      };

      axios
        .request(options)
        .then(function (response) {
          console.log('right => ', response.data);
          setWeather(response.data);
        })
        .catch(function (error) {
          console.error('wrong => ', error);
        });
    }
  };

  const interpolateRotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  const animatedStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{rotate: interpolateRotation}],
  };

  const startAnimation = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
      easing: () => 10,
    }).start(() => startAnimation());
  };

  useEffect(() => {
    getWeatherCurrentPosition();
  }, [currentLatitude, currentLongitude]);

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <LinearGradient
      colors={['#00d4ff', '#2d2dad', '#171498']}
      style={Styles.body}
      start={{x: 0.0, y: 0.15}}
      end={{x: 0.95, y: 0.75}}>
      <View style={[Styles.transparenceMain, Styles.mainCard]} height="65%">
        <Text style={Styles.textHeader}>{weather?.name}</Text>
        <Text style={Styles.textSmall}>{new Date().toGMTString()}</Text>
        {/*<Image*/}
        {/*  style={Styles.logo}*/}
        {/*  source={{*/}
        {/*    uri: `https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`,*/}
        {/*  }}*/}
        {/*/>*/}

        {/*<View style={Styles.logo}>*/}
        {/*  <Svg*/}
        {/*    height="100%"*/}
        {/*    width="100%"*/}
        {/*    viewBox="1 -1 30 30"*/}
        {/*    fill="none"*/}
        {/*    xmlns="http://www.w3.org/2000/svg">*/}
        {/*    <ClearDay />*/}
        {/*  </Svg>*/}
        {/*</View>*/}

        <View style={Styles.logo}>
          <ClearDay height="100%" width="100%" viewBox="1 -1 30 30" />
        </View>

        {/*<Animated.View style={[Styles.logo, animatedStyle]}>*/}
        {/*  <ClearDay height="100%" width="100%" viewBox="1 -1 30 30" />*/}
        {/*</Animated.View>*/}

        {/*<Animated.View style={Styles.logo}>*/}
        {/*  <ClearDay height="100%" width="100%" viewBox="1 -1 30 30" />*/}
        {/*</Animated.View>*/}

        {/*<View style={Styles.logo}>*/}
        {/*  <LocalSvg*/}
        {/*    width="100%"*/}
        {/*    height="100%"*/}
        {/*    xml='../../../public/weatherIcons/clear-day.svg'*/}
        {/*  />*/}
        {/*</View>*/}
        <Text style={Styles.textHeader}>
          {weather?.main?.temp}º {weather?.weather[0]?.main}
        </Text>
      </View>

      <View style={Styles.card}>
        <View style={[Styles.transparence]}>
          <Text style={Styles.textDefault}>Sensação Term.</Text>
          <Text style={Styles.textDefault}>{weather?.main?.feels_like}</Text>
        </View>
        <View style={[Styles.transparence]}>
          <Text style={Styles.textDefault}>Vento</Text>
          <Text style={Styles.textDefault}>{weather?.wind?.speed}</Text>
        </View>
      </View>

      <View style={Styles.card}>
        <View style={[Styles.transparence]}>
          <Text style={Styles.textDefault}>Mínima</Text>
          <Text style={Styles.textDefault}>{weather?.main?.temp_min}</Text>
        </View>
        <View style={[Styles.transparence]}>
          <Text style={Styles.textDefault}>Máxima</Text>
          <Text style={Styles.textDefault}>{weather?.main?.temp_max}</Text>
        </View>
      </View>

      <View style={Styles.card}>
        <View style={[Styles.transparence]}>
          <Text style={Styles.textDefault}>Pressure</Text>
          <Text style={Styles.textDefault}>{weather?.main?.pressure}</Text>
        </View>
        <View style={[Styles.transparence]}>
          <Text style={Styles.textDefault}>Humidade</Text>
          <Text style={Styles.textDefault}>{weather?.main?.humidity}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Main;
