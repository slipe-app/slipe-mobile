import { Tabs } from 'expo-router';
import React from 'react';

export default function Navigation() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="pages/index"
        options={{
          title: 'Home',
        }}
      />
       <Tabs.Screen
        name="pages/search"
        options={{
          title: 'Search',
        }}
      />
    </Tabs>
  );
}
