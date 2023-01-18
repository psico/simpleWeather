import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
  },
  transparenceMainCard: {
    display: 'flex',
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    margin: 5,
    padding: 15,
  },
  transparenceMainCardHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    margin: 5,
    padding: 15,
  },
  transparence: {
    display: 'flex',
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    margin: 5,
    padding: 15,
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
