import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SetTime, ShuffeListData} from '../screens';
const Tab = createBottomTabNavigator();
function TabManyThing() {
  return (
    <Tab.Navigator initialRouteName="ShuffeListData">
      <Tab.Screen
        options={{headerShown: false}}
        name="SetTime"
        component={SetTime}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="ShuffeListData"
        component={ShuffeListData}
      />
    </Tab.Navigator>
  );
}
export default TabManyThing;
