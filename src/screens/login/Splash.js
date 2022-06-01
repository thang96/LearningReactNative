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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {updateAuth} from '../../redux/actions/auth';

const Splash = () => {
  const [isReady, setIsReady] = useState(false);
  const navigation = useNavigation();
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem('useInfo')
      .then(value => {
        console.log('---------------');
        dispatch(updateAuth(Boolean(value)));
        setIsReady(true);
      })
      .catch(() => {
        dispatch(updateAuth(Boolean(false)));
        setIsReady(true);
      });
  }, []);
  useEffect(() => {
    if (!isReady) return;
    console.log('jnj: ', isLogin);
    navigation.navigate(!isLogin ? 'StackLoginNavigate' : 'TabNavigation');
  }, [isLogin, isReady]);
  return null;
};

export default Splash;
