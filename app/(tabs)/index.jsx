import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import colors from '../../constants/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        <View style={[styles.block, {backgroundColor: '#784af8'}]}/>
        <View style={[styles.block, {backgroundColor: '#f84a7d'}]}/>
        <View style={[styles.block, {backgroundColor: '#4ac9f8'}]}/>
        <View style={[styles.block, {backgroundColor: '#7bf84a'}]}/>
        <View style={[styles.block, {backgroundColor: '#f8c74a'}]}/>
        <View style={[styles.block, {backgroundColor: '#f8ae4a'}]}/>
        <View style={[styles.block, {backgroundColor: '#4a69f8'}]}/>
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
    height: '100%',
    display: 'flex',
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
    height: 630,
    borderRadius: 36,
    marginTop: 32,
    flex: 1,
  }
});

export default Home