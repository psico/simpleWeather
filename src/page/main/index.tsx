import React, {Image, Text, View} from 'react-native';
import Styles from './css';
import axios from 'axios';
import {REACT_APP_OPEN_WEATHER_API_KEY} from '@env';
import CurrentPosition from '../../utils/CurrentPosition';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

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

  useEffect(() => {
    getWeatherCurrentPosition();
  }, [currentLatitude, currentLongitude]);

  return (
    <LinearGradient
      colors={['#00d4ff', '#2d2dad', '#171498']}
      style={Styles.body}
      start={{x: 0.0, y: 0.15}}
      end={{x: 0.95, y: 0.75}}>
      <View style={Styles.transparence}>
        <Text style={Styles.textHeader}>{weather?.name}</Text>
        <Text style={Styles.textSmall}>{new Date().toGMTString()}</Text>
        <Image
          style={[Styles.logo, Styles.textDefault]}
          source={{
            uri: `https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`,
          }}
        />
        <Text style={Styles.textDefault}>
          {weather?.main?.temp}º {weather?.weather[0]?.main}
        </Text>
      </View>

      <View style={Styles.card}>
        <View style={[Styles.body, Styles.transparence]}>
          <Text style={Styles.textDefault}>Sens. term.</Text>
          <Text style={Styles.textDefault}>{weather?.main?.feels_like}</Text>
        </View>
        <View style={[Styles.body, Styles.transparence]}>
          <Text style={Styles.textDefault}>minima</Text>
          <Text style={Styles.textDefault}>{weather?.main?.temp_min}</Text>
        </View>
      </View>

      <View style={Styles.card}>
        <View style={[Styles.body, Styles.transparence]}>
          <Text style={Styles.textDefault}>maxima</Text>
          <Text style={Styles.textDefault}>{weather?.main?.temp_max}</Text>
        </View>
        <View style={[Styles.body, Styles.transparence]}>
          <Text style={Styles.textDefault}>Vento</Text>
          <Text style={Styles.textDefault}>{weather?.wind?.speed}</Text>
        </View>
      </View>

      <View style={Styles.card}>
        <View style={[Styles.body, Styles.transparence]}>
          <Text style={Styles.textDefault}>Pressure</Text>
          <Text style={Styles.textDefault}>{weather?.main?.pressure}</Text>
        </View>
        <View style={[Styles.body, Styles.transparence]}>
          <Text style={Styles.textDefault}>Humidade</Text>
          <Text style={Styles.textDefault}>{weather?.main?.humidity}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Main;
