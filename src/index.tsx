import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'expo-status-bar';

import CartProvider from './context/CartProvider';
import Navigation from './navigation';

export default function App() {
  return (
    <CartProvider>
      <Navigation />
      <StatusBar style={'dark'} />
    </CartProvider>
  );
}
