import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {HomeScreen, LoginScreen} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StackLoginNavigate from './StackLoginNavigate';
import TabNavigation from './TabNavigation';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {updateAuth} from '../redux/actions/auth';
import Splash from '../screens/login/Splash';
const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          {/* {isLogin ? ( */}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="StackLoginNavigate"
            component={StackLoginNavigate}
          />
          {/* ) : ( */}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="TabNavigation"
            component={TabNavigation}
          />
          {/* )} */}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Splash"
            component={Splash}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default AppNavigation;
