import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style={'dark'} />
    </>
  );
}
