import React from 'react';
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
function UIButtonPress(props) {
  const {title, onPress} = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.container]}>
        <Text style={styles.textTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default UIButtonPress;
