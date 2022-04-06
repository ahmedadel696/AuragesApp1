import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './src/screens/StackNavigation';
 const App = () => {


  return (
    <StackNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;