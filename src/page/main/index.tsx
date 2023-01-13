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

  const [unit, setUnit] = useState('');
  const [currentDate, setCurrentDate] = useState(null);
  const [weather, setWeather] = useState({
    cod: '',
    city: {
      id: null,
      name: '',
      coord: {
        lat: null,
        lon: null,
      },
      country: '',
      population: null,
      timezone: null,
      sunrise: null,
      sunset: null,
    },
    list: [
      {
        dt: null,
        main: {
          temp: null,
          feels_like: null,
          temp_min: null,
          temp_max: null,
          pressure: null,
          humidity: null,
          temp_kf: 1.71,
        },
        weather: [
          {
            id: null,
            main: '',
            description: '',
            icon: '10d',
          },
        ],
        wind: {
          speed: 2.64,
        },
        dt_txt: '',
      },
    ],
  });
  const {currentLatitude, currentLongitude} = CurrentPosition();

  const getWeatherCurrentPosition = async () => {
    try {
      if (currentLatitude && currentLongitude) {
        const options = {
          method: 'GET',
          url: `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLatitude}&lon=${currentLongitude}&units=${unit}&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`,
        };

        const response = await axios.request(options);
        setWeather(response.data);
        console.log(
          'response.data ==> ',
          `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLatitude}&lon=${currentLongitude}&units=${unit}&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`,
        );
      }
    } catch (error) {
      console.error('wrong => ', error);
    }
  };

  useEffect(() => {
    setUnit('metric');
    // @ts-ignore
    setCurrentDate(new Date().toGMTString());
  }, []);

  useEffect(() => {
    getWeatherCurrentPosition().then();
    setInterval(getWeatherCurrentPosition, 60000);

    console.log('Posicion => ', currentLatitude, currentLongitude);
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
            <Text style={Styles.textHeader}>{weather.city.name}</Text>
            <Text style={Styles.textSmall}>{currentDate}</Text>

            <View style={Styles.logo}>
              {iconSelector({weatherId: weather.list[0].weather[0].id})}
            </View>

            <Text style={Styles.textHeader}>
              {weather.list[0].main.temp}º {weather.list[0].weather[0].main}
            </Text>
          </View>

          <View style={Styles.transparenceMainCard}>
            {weather.list.slice(1, 5).map(weatherDay => (
              <View style={[Styles.transparence]}>
                <Text style={Styles.textDefault}>{weatherDay.main.temp}</Text>
              </View>
            ))}
          </View>

          <View style={Styles.card}>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Feels Like</Text>
              <Text style={Styles.textDefault}>
                {weather.list[0].main.feels_like}
              </Text>
            </View>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Wind Speed</Text>
              <Text style={Styles.textDefault}>
                {weather.list[0].wind.speed}
              </Text>
            </View>
          </View>

          <View style={Styles.card}>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Minimum</Text>
              <Text style={Styles.textDefault}>
                {weather.list[0].main.temp_min}
              </Text>
            </View>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Maximum</Text>
              <Text style={Styles.textDefault}>
                {weather.list[0].main.temp_max}
              </Text>
            </View>
          </View>

          <View style={Styles.card}>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Pressure</Text>
              <Text style={Styles.textDefault}>
                {weather.list[0].main.pressure}
              </Text>
            </View>
            <View style={[Styles.transparence]}>
              <Text style={Styles.textDefault}>Humidity</Text>
              <Text style={Styles.textDefault}>
                {weather.list[0].main.humidity}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Main;
