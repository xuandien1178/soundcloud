import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from './components/Splash';


export default function App() {
  return (
    <SafeAreaProvider>
        <Splash></Splash>
    </SafeAreaProvider>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});