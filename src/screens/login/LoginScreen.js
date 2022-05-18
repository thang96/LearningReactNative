import {useNavigation} from '@react-navigation/native';
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
import UIButtonPress from '../../components/UIButtonPress';
import UIInputButton from '../../components/UIInputButton';
import {icons} from '../../constants';

function LoginScreen(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.eachViewContainer}>
          <Image style={styles.imageLogin} source={icons.login} />
          <Text style={styles.textTitle}>Join Active eCommerce</Text>
        </View>
        <View style={styles.viewInputCustom}>
          <UIInputButton title={'Name'} placeholder={'   User'} />
        </View>
        <View>
          <UIInputButton
            secureTextEntry={true}
            keyboardType="name-number-pad"
            title={'Password'}
            placeholder={'   Password'}
          />
        </View>
        <View style={{marginVertical: 25}} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPasswordWithPhone');
          }}>
          <Text style={{marginVertical: 5, color: '#E7421B'}}>
            Forgot you password ?
          </Text>
        </TouchableOpacity>
        <View style={styles.viewButtonLogin}>
          <UIButtonPress title={'Login'} />
        </View>
        <View style={styles.viewRegister}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: '#E7421B'}}>Don't have account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RegisterWithEmail');
              }}>
              <Text style={styles.textRegister}>Register now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  eachViewContainer: {
    alignItems: 'center',
  },
  imageLogin: {
    width: 80,
    height: 80,
    marginVertical: 20,
  },
  textTitle: {
    fontSize: 24,
    color: '#E7421B',
    fontWeight: 'bold',
  },
  viewInputCustom: {
    marginVertical: 10,
  },
  viewRegister: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  textRegister: {
    color: '#E7421B',
    fontWeight: 'bold',
  },
  viewButtonLogin: {
    backgroundColor: '#E7421B',
    borderRadius: 5,
  },
});
export default LoginScreen;
