import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home1 from '../Screen/Home1'
import Home2 from '../Screen/Home2'
import Home3 from '../Screen/Home3'
import Home4 from '../Screen/Home4'
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home1} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Home2" component={Home2}options={{ tabBarBadge: 2 }} />
        <Tab.Screen name='Home3' component={Home3} options={{ tabBarBadge:1 }} />
        <Tab.Screen name='Home4' component={Home4} options={{ tabBarBadge:0 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}