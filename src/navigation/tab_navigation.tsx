import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/tabScreen/home';
import Profile from '../components/tabScreen/profile';
import CommentsComponent from '../components/comments_components';
export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={HomeScreen} />
        <Tab.Screen name="Homes" component={HomeScreen} />
        <Tab.Screen name="Profile" component={CommentsComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
