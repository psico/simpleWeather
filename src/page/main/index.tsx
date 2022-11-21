import {Text, View} from 'react-native';
import Styles from './css';
import axios from 'axios';

const Main = () => {
  const encodedParams = new URLSearchParams();
  encodedParams.append('apiKey', '<REQUIRED>');
  encodedParams.append('locationKey', '<REQUIRED>');

  const options = {
    method: 'POST',
    url: 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '0171484c54mshe7b720ea0ed42e1p1f5c22jsndceb0b513c61',
      'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com',
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <View style={Styles.body}>
      <Text>Hello Main Page</Text>
    </View>
  );
};

export default Main;
