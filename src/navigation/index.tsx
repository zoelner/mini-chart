import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useColorScheme } from 'react-native';

import { RootStackParamList } from '../types';

import Products from '../screens/Products';

export default function Navigation() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Products'>
      <Stack.Screen
        name='Products'
        component={Products}
        options={{
          headerTitle: 'Produtos',
        }}
      />
    </Stack.Navigator>
  );
}
