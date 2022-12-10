import {Text, View} from 'react-native';
import Styles from './css';
import axios from 'axios';

const Main = () => {
  console.info('Main component');

  const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}',
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
    </View>
  );
};

export default Main;
