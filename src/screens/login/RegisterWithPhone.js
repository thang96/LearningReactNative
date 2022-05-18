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
import UIPhoneInput from '../../components/UIPhoneInput';

function RegisterWithPhone(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.eachViewContainer}>
          <Image style={styles.imageLogin} source={icons.login} />
          <Text style={styles.textTitle}>Join Active eCommerce</Text>
        </View>
        <View style={styles.viewInputCustom}>
          <UIInputButton
            onPress={() => {}}
            title={'Name'}
            placeholder={'   User'}
          />
        </View>

        <View>
          <UIPhoneInput />
        </View>

        <TouchableOpacity style={styles.pressRegisterWithPhone}>
          <Text style={styles.colorText}>Or register with email</Text>
        </TouchableOpacity>

        <View style={styles.viewInputCustom}>
          <UIInputButton
            secureTextEntry={true}
            title={'Password'}
            placeholder={'   Password'}
          />
        </View>

        <View>
          <UIInputButton
            secureTextEntry={true}
            title={'Retype Password'}
            placeholder={'   Retype Password'}
          />
        </View>

        <View style={styles.viewButtonRegister}>
          <UIButtonPress title={'Register'} />
        </View>
        <Text style={styles.textReadyAccount}>Ready have account?</Text>
        <View style={styles.viewButtonLogin}>
          <UIButtonPress
            title={'Login'}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
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
  viewButtonRegister: {
    marginTop: 50,
    backgroundColor: '#E7421B',
    borderRadius: 5,
  },
  viewButtonLogin: {
    backgroundColor: '#FFCC33',
    borderRadius: 5,
  },
  textReadyAccount: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 2,
  },
  colorText: {
    color: '#E7421B',
  },
  pressRegisterWithPhone: {
    width: '100%',
    alignItems: 'flex-end',
  },
});
export default RegisterWithPhone;
