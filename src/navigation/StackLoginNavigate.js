import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginScreen,
  RegisterWithEmail,
  RegisterWithPhone,
  ForgotPasswordWithPhone,
  ForgotPasswordWithEmail,
} from '../screens';
import ModalPicked from '../components/ModalPicked';
function StackNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="RegisterWithEmail"
        component={RegisterWithEmail}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="RegisterWithPhone"
        component={RegisterWithPhone}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ForgotPasswordWithPhone"
        component={ForgotPasswordWithPhone}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ForgotPasswordWithEmail"
        component={ForgotPasswordWithEmail}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ModalPicked"
        component={ModalPicked}
      />
    </Stack.Navigator>
  );
}
export default StackNavigation;
