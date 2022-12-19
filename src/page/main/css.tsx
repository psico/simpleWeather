import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // padding: 15,
    // alignContent: 'space-between',
    // alignItems: 'center',
    // alignContent: 'center',
    // alignSelf: 'center',
  },
  transparenceMain: {
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    margin: 5,
  },
  transparence: {
    display: 'flex',
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    margin: 5,
  },
  mainCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
