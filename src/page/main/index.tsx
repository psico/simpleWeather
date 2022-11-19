import {Text, View} from 'react-native';
import Styles from './css';

const Main = () => {
  console.log('aki estamos => ', Styles.backgroundColor);

  return (
    <View style={Styles.backgroundColor}>
      <Text>Hello Main Page</Text>
    </View>
  );
};

export default Main;
