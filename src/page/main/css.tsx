import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // alignSelf: 'center',
  },
  transparence: {
    borderRadius: 15,
    border: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {
    fontFamily: 'Verdana',
    fontSize: 30,
    color: '#FFFFFF',
  },
  textSmall: {
    fontFamily: 'Verdana',
    fontSize: 15,
    color: '#FFFFFF',
  },
  textDefault: {
    fontFamily: 'Verdana',
    fontSize: 20,
    color: '#FFFFFF',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default styles;
