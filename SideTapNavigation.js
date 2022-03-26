import React from 'react';
 
import { createSideTabNavigator } from 'react-navigation-side-tabs'

// import Link from '../../screens/LinksScreen';
import { Ionicons } from '@expo/vector-icons';
import Home from './src/screens/Home';
import Link from './src/screens/Link';
const Tab = createSideTabNavigator();
 
const SideTapNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="LinkScreen"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        iconHorizontal: true,
        iconSize: 32,
        labelSize: 32,
        showLabel: true,
        tabWidth: 130
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home Test',
          tabBarLabel: 'Home',
          titleIcon: () => (
            <Ionicons name="md-home" color={'#000'} size={20} />
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="md-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LinkScreen"
        component={Link}
        options={{
          tabBarLabel: 'Updates sada dasdas',
          titleIcon: () => (
            <Ionicons name="md-home"  color={'#000'} size={20} />
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="md-home" color={color} size={size} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}
 
 
export default SideTapNavigation