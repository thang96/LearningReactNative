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
import {icons} from '../../constants';
import UIButtonPress from '../../components/UIButtonPress';
import UIPhoneInput from '../../components/UIPhoneInput';
import UIInputButton from '../../components/UIInputButton';
function ForgotPasswordWithEmail(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.eachViewContainer}>
          <Image style={styles.imageLogin} source={icons.login} />
          <Text style={styles.textTitle}>Join Active eCommerce</Text>
        </View>

        <View>
          <UIInputButton title={'Email'} placeholder={'   Example.email.com'} />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPasswordWithPhone');
          }}
          style={{alignItems: 'flex-end', marginBottom: 25}}>
          <Text style={{color: '#E7421B'}}>Or send code via phone</Text>
        </TouchableOpacity>
        <View style={styles.viewButtonLogin}>
          <UIButtonPress
            title={'Send code'}
            placeholder={'Example.email.com'}
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
  viewButtonLogin: {
    backgroundColor: '#E7421B',
    borderRadius: 5,
  },
});

export default ForgotPasswordWithEmail;
