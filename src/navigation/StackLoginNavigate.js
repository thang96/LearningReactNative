import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginScreen,
  RegisterWithEmail,
  RegisterWithPhone,
  ForgotPasswordWithPhone,
  ForgotPasswordWithEmail,
  ChangeColor,
} from '../screens';
import ModalPicked from '../components/ModalPicked';
import TabManyThing from '../navigation/TabManyThing';
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
      {/* <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ModalPicked"
        component={ModalPicked}
      /> */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ChangeColor"
        component={ChangeColor}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TabManyThing"
        component={TabManyThing}
      />
    </Stack.Navigator>
  );
}
export default StackNavigation;
