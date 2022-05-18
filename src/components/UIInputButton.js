import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
function UIInputButton(props) {
  const {title, placeholder, keyboardType, secureTextEntry} = props;
  return (
    <View>
      <Text style={{fontSize: 24, color: '#E7421B', fontWeight: 'bold'}}>
        {title}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry ?? false}
        onChangeText={() => {}}
        returnKeyType="done"
        keyboardType={keyboardType ?? 'default'}
        placeholderTextColor={'grey'}
        placeholder={placeholder}
        style={styles.textInput}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    height: 50,
  },
});
export default UIInputButton;
