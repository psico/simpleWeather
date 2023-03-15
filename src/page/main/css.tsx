import {StyleSheet} from 'react-native';

const borderDefault = 10;
const marginDefault = 3;
const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
  },
  banner: {
    marginLeft: '10%',
  },
  transparenceMainCard: {
    display: 'flex',
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderDefault,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    margin: marginDefault,
    padding: 15,
  },
  transparenceMainCardHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: borderDefault,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    margin: marginDefault,
    padding: 15,
  },
  transparenceMainCardCenter: {
    alignItems: 'center',
    borderRadius: borderDefault,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    margin: 50,
    marginTop: '80%',
    padding: 15,
  },
  transparence: {
    display: 'flex',
    flex: 1,
    borderRadius: borderDefault,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    margin: marginDefault,
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
    fontSize: 18,
    color: '#FFFFFF',
  },
  logo: {
    width: 150,
    height: 150,
  },
  smallLogo: {
    width: 40,
    height: 40,
  },
});

export default styles;
