import { Tabs } from 'expo-router';
import TabBar from '../../components/common/navigation/tabBar';
import Header from '../../components/common/header/header';

export default function App() {
  return (
    <>
    <Header/>
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
    </>
  );
}