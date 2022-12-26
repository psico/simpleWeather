import React, {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Styles from './css';
import axios from 'axios';
import {REACT_APP_OPEN_WEATHER_API_KEY} from '@env';
import CurrentPosition from '../../utils/CurrentPosition';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import iconSelector from '../../components/iconSelector';

const Main = () => {
  console.info('Main component');
  // @ts-ignore
  const [currentDate, setCurrentDate] = useState(new Date().toGMTString());
  const [weather, setWeather] = useState({
    name: '',
    main: {
      feels_like: '',
      temp: '??',
    },
    weather: [
      {
        id: '',
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
      <SafeAreaView>
        <ScrollView>
          <View style={Styles.transparenceMainCard}>
            <Text style={Styles.textHeader}>{weather?.name}</Text>
            <Text style={Styles.textSmall}>{currentDate}</Text>

            <View style={Styles.logo}>
              {iconSelector({weatherId: weather?.weather[0]?.id})}
            </View>

            <Text style={Styles.textHeader}>
              {weather?.main?.temp}º {weather?.weather[0]?.main}
            </Text>
          </View>

          <View style={Styles.card}>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Feels Like</Text>
              <Text style={Styles.textDefault}>
                {weather?.main?.feels_like}
              </Text>
            </View>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Wind Speed</Text>
              <Text style={Styles.textDefault}>{weather?.wind?.speed}</Text>
            </View>
          </View>

          <View style={Styles.card}>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Minimum</Text>
              <Text style={Styles.textDefault}>{weather?.main?.temp_min}</Text>
            </View>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Maximum</Text>
              <Text style={Styles.textDefault}>{weather?.main?.temp_max}</Text>
            </View>
          </View>

          <View style={Styles.card}>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Pressure</Text>
              <Text style={Styles.textDefault}>{weather?.main?.pressure}</Text>
            </View>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Humidity</Text>
              <Text style={Styles.textDefault}>{weather?.main?.humidity}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Main;
