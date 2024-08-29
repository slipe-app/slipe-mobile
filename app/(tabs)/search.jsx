import { Text, View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Search page</Text>
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