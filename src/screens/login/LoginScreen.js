import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import {icons} from '../../constants';

function LoginScreen(props) {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.eachViewContainer}>
          <Image style={styles.imageLogin} source={icons.login} />
          <Text style={styles.textTitle}>Join Active eCommerce</Text>
        </View>
        <View style={styles.viewInputCustom}>
          <UIInputButton
            keyboardType="default"
            title={'Name'}
            placeholder={'   User'}
            changeText={value => {
              setUser(value);
            }}
          />
        </View>
        <View>
          <UIInputButton
            secureTextEntry={true}
            keyboardType="name-number-pad"
            title={'Password'}
            placeholder={'   Password'}
            changeText={value => {
              setPassword(value);
            }}
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
          <UIButtonPress
            onPress={() => {
              // if (user == 'ad' && password == 123) {
              navigation.navigate('TabManyThing');
              // } else {
              //   alert('Account is unexcep');
              // }
            }}
            title={'Login'}
          />
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChangeColor');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '30%',
            borderWidth: 1,
            padding: 5,
            position: 'absolute',
            top: 10,
            right: 10,
            borderRadius: 10,
          }}>
          <Text>
            Choose {`\n`} your {`\n`} color
          </Text>
          <Icon name="arrow-right" size={25} />
        </TouchableOpacity>
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
