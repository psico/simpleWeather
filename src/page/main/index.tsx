import React, {Text} from 'react-native';
import Styles from './css';
import axios from 'axios';
import {REACT_APP_OPEN_WEATHER_API_KEY} from '@env';
import CurrentPosition from '../../utils/CurrentPosition';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Main = () => {
  console.info('Main component', REACT_APP_OPEN_WEATHER_API_KEY);
  const [weather, setWeather] = useState({});
  const {currentLatitude, currentLongitude} = CurrentPosition();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getWeatherCurrentPosition = () => {
    if (currentLatitude && currentLongitude) {
      const options = {
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`,
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
  }, []);

  return (
    <LinearGradient
        colors={['#00d4ff', '#090979', '#020024']} style={Styles.body}
        start={{x: 0.0, y: 0.15}} end={{x: 0.95, y: 0.75}}>
      <Text>Hello Main Page</Text>
      <Text>Você está Aqui</Text>
      <Text>Latitude: {currentLatitude}</Text>
      <Text>Longitude: {currentLongitude}</Text>
      <Text>País: {weather?.sys?.country}</Text>
      <Text>City: {weather?.name}</Text>
      <Text>clouds: {weather?.clouds?.all}</Text>
      <Text>temperatura atual: {weather?.main?.temp}</Text>
      <Text>sensação termica: {weather?.main?.feels_like}</Text>
      <Text>minima: {weather?.main?.temp_min}</Text>
      <Text>maxima: {weather?.main?.temp_max}</Text>
      <Text>humidade: {weather?.main?.humidity}</Text>
    </LinearGradient>
  );
};

export default Main;
