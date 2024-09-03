import { Tabs } from 'expo-router';
import TabBar from '../../components/common/navigation/tabBar';
import Header from '../../components/common/header/header';

export default function App() {
  return (
    <Tabs
    tabBar={() => <TabBar/>}
      screenOptions={{
        headerShown: false,
      }}>
    </Tabs>
  );
}