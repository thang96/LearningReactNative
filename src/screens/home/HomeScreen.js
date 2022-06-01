import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateId} from '../../redux/actions/InfoAction';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state?.info?.email);
  const DataApi = useSelector(state => state?.info?.resData);
  const [email, setEmail] = useState('');
  useEffect(() => {
    dispatch(updateId());
  }, []);
  console.log(selector, 'email---');
  console.log(dispatch);
  console.log('res--data', DataApi, 'res-data');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>HomeScreen</Text>
        <View>
          <TextInput
            value={email}
            multiline
            autoCapitalize="none"
            textAlign="right"
            style={styles.textInput}
            onChangeText={text => setEmail(text)}></TextInput>
        </View>
        <Text>email:{selector}</Text>
        {DataApi?.results?.length > 0 ? (
          <Text>{DataApi?.results[0]?.location?.street?.number}</Text>
        ) : (
          <Text>null</Text>
        )}
        <TouchableOpacity
          onPress={() => {
            dispatch({
              type: 'UPDATE_EMAIL',
              payload: {key: 'email', value: email},
            });
          }}
          style={styles.textButton}>
          <Text>Save email</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 60,
    borderColor: 'red',
    borderWidth: 2,
    width: 150,
  },
  textButton: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    marginTop: 150,
    alignItems: 'center',
  },
});
export default HomeScreen;
