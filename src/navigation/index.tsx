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
import Cart from '../screens/Cart';

import CartIcon from '../components/CartIcon';

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
        options={({ navigation }) => ({
          headerTitle: 'Produtos',
          headerRight: () => (
            <CartIcon onPress={() => navigation.navigate('Cart')} />
          ),
        })}
      />
      <Stack.Screen
        name='Cart'
        component={Cart}
        options={{
          headerTitle: 'Carrinho',
        }}
      />
    </Stack.Navigator>
  );
}
