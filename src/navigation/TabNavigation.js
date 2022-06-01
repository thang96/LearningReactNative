import React from 'react';
import {View} from 'react-native';
import {HomeScreen, Animation} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Icon name="transgender-alt" size={30} color="#900" />
            </View>
          ),
        }}
        name="Animation"
        component={Animation}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Icon name="home" size={30} color="#900" />
            </View>
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
