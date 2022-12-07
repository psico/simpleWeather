import {Text, View} from 'react-native';
import Styles from './css';
import axios from 'axios';

const Main = () => {
  const encodedParams = new URLSearchParams();
  console.log('console.log(response.data); console.log(response.data);');

  // encodedParams.append(
  //   'apiKey',
  //   '24d81cf917mshf57f1c543de525ep1d11d2jsn5809bb93c57a',
  // );
  // encodedParams.append('locationKey', 'Brasilia');
  //
  // const options = {
  //   method: 'POST',
  //   url: 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey',
  //   headers: {
  //     'content-type': 'application/x-www-form-urlencoded',
  //     'X-RapidAPI-Key': '24d81cf917mshf57f1c543de525ep1d11d2jsn5809bb93c57a',
  //     'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com',
  //   },
  //   data: encodedParams,
  // };
  //
  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log('right => ', response.data);
  //   })
  //   .catch(function (error) {
  //     console.error('wrong => ', error);
  //   });

  encodedParams.append(
    'apiKey',
    '24d81cf917mshf57f1c543de525ep1d11d2jsn5809bb93c57a',
  );
  encodedParams.append('locationKey', 'Brasilia');

  const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}',
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
