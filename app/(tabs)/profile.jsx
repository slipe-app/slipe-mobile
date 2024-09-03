import { Text, View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Profile page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile