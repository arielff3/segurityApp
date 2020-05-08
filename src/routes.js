import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

import Main from './pages/Main';
import AddContact from './pages/AddContact';
import ListContact from './pages/ListContact';

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0c0c37" />
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#fff',
          inactiveTintColor: 'rgba(255,255,255, 0.6)',
          style: {backgroundColor: '#0c0c37'},
        }}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({color}) => (
              <Icon name="home-variant" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ListContact"
          component={ListContact}
          options={{
            tabBarLabel: 'Contatos',
            tabBarIcon: ({color}) => (
              <Icon name="account" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AddContact"
          component={AddContact}
          options={{
            tabBarLabel: 'Configurações',
            tabBarIcon: ({color}) => (
              <Icon name="cogs" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
