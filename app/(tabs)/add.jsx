import { Text, View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const AddingPost = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Add post page</Text>
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

export default AddingPost