import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StackLoginNavigate from './src/navigation/StackLoginNavigate';

function App() {
  return (
    <NavigationContainer>
      <StackLoginNavigate />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
});
export default App;
