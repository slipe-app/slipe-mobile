import { Tabs } from 'expo-router';
import TabBar from '../../components/common/navigation/navigation';

export default function App() {
  return (
    <Tabs
    tabBar={() => <TabBar/>}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
       <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'My profile',
        }}
      />
    </Tabs>
  );
}