import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import colors from '../../constants/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        <View style={styles.block}/>
        <View style={styles.block}/>
        <View style={styles.block}/>
        <View style={styles.block}/>
        <View style={styles.block}/>
        <View style={styles.block}/>
      </ScrollView>
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
  list:{
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    padding: 16,
    width: '100%'
  },
  block:{
    width: '100%',
    height: 160,
    marginTop: 32,
    flex: 1,
    backgroundColor: 'red',
  }
});