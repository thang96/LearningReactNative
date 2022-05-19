import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import UIInputButton from '../../components/UIInputButton';
function SetTime(props) {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  console.log(day, hour, minute, second);
  useEffect(() => {
    if (second > 60) {
      setMinute(minute + 1);
      setSecond(second - 60);
    }
  }, [second]);
  useEffect(() => {
    if (minute > 60) {
      setHour(hour + 1);
      setMinute(minute - 60);
    }
  }, [minute]);
  useEffect(() => {
    if (hour > 24) {
      setDay(day + 1);
      setHour(hour - 24);
    }
  }, [hour]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 40,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: 'red',
            fontStyle: 'italic',
          }}>
          Set Time
        </Text>
        <View style={styles.viewInput}>
          <UIInputButton
            changeText={value => {
              setDay(value);
            }}
            title={'Day'}
            value={day}
            placeholder={`${day}`}
          />
        </View>
        <View style={styles.viewInput}>
          <UIInputButton
            changeText={value => {
              setHour(value);
            }}
            title={'Hour'}
            value={hour}
            placeholder={`${hour}`}
          />
        </View>
        <View style={styles.viewInput}>
          <UIInputButton
            changeText={value => {
              setMinute(value);
            }}
            title={'Minute'}
            value={minute}
            placeholder={`${minute}`}
          />
        </View>
        <View style={styles.viewInput}>
          <UIInputButton
            changeText={value => {
              setSecond(value);
            }}
            title={'Second'}
            value={second}
            placeholder={`${second}`}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
export default SetTime;
