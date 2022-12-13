import {Button, PermissionsAndroid, Platform, Text, View} from 'react-native';
import Styles from './css';
import axios from 'axios';
import {REACT_APP_OPEN_WEATHER_API_KEY} from '@env';
import Geolocation from '@react-native-community/geolocation';
import {useState} from 'react';

const Main = () => {
  console.info('Main component', REACT_APP_OPEN_WEATHER_API_KEY);

  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [watchID, setWatchID] = useState(0);

  const callLocation = () => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de Acesso à Localização',
            message: 'Este aplicativo precisa acessar sua localização.',
            buttonNeutral: 'Pergunte-me depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          console.warn('Permissão de Localização negada');
        }
      };

      requestLocationPermission().then(() => ({}));
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
      },
      error => console.warn('deu erro', error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    const watchID = Geolocation.watchPosition(position => {
      const currentLatitude = JSON.stringify(position.coords.latitude);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      setCurrentLatitude(currentLatitude);
      setCurrentLongitude(currentLongitude);
    });
    setWatchID(watchID);
  };

  const clearLocation = () => {
    Geolocation.clearWatch(watchID);
  };

  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`,
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
      <View>
        <Button title="Obter Localização" onPress={callLocation} />
      </View>
      <View>
        <Button title="Cancelar Monitoração" onPress={clearLocation} />
      </View>
    </View>
  );
};

export default Main;
