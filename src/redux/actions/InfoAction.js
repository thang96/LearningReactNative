import {Dispatch} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_ID = 'UPDATE_ID';
export const DATA_API = 'DATA_API';
import axios from 'axios';
export const updateEmail = email => ({
  type: UPDATE_EMAIL,
  payload: email,
});
export const updateId = id => dispatch => {
  axios.get(`https://randomuser.me/api`).then(response => {
    dispatch({
      type: DATA_API,
      payload: response.data,
    });
  });
  // AsyncStorage.setItem('id', JSON.stringify(id)).then(() => {
  //   dispatch({
  //     type: UPDATE_ID,
  //     payload: id,
  //   });
  // });
};
