import {Button, PermissionsAndroid, Platform, Text, View} from 'react-native';
import Styles from './css';
import axios from 'axios';
import {REACT_APP_OPEN_WEATHER_API_KEY} from '@env';
import CurrentPosition from '../../utils/CurrentPosition';

const Main = () => {
  console.info('Main component', REACT_APP_OPEN_WEATHER_API_KEY);

  const {currentLatitude, currentLongitude} = CurrentPosition();

  // const options = {
  //   method: 'GET',
  //   url: `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`,
  // };

  console.log(
    'URL => ',
    `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`,
  );

  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log('right => ', response.data);
    })
    .catch(function (error) {
      console.error('wrong => ', error);
    });

  return (
    <View style={Styles.body}>
      <Text>Hello Main Page</Text>
      <Text>Você está Aqui</Text>
      <Text>Latitude: {currentLatitude}</Text>
      <Text>Longitude: {currentLongitude}</Text>
    </View>
  );
};

export default Main;
