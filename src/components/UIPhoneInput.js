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
  Modal,
  FlatList,
} from 'react-native';
import {icons} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
function UIPhoneInput(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const {onPress} = props;
  const COUNTRY = [
    {
      name: 'Viet Nam',
      flag: icons.flagOfVN,
      number: 84,
    },
    {
      name: 'Afghanistan',
      flag: icons.flagOfVN,
      number: +93,
    },
    {
      name: 'Albania',
      flag: icons.flagOfVN,
      number: 355,
    },
    {
      name: 'Algeria',
      flag: icons.flagOfVN,
      number: 213,
    },
    {
      name: 'Japan',
      flag: icons.flagOfVN,
      number: 81,
    },
    {
      name: 'American Samoa',
      flag: icons.flagOfVN,
      number: 1684,
    },
    {
      name: 'Andorra',
      flag: icons.flagOfVN,
      number: 376,
    },
    {
      name: 'Angola',
      flag: icons.flagOfVN,
      number: 244,
    },
  ];
  const [country, setCountry] = useState(COUNTRY);
  return (
    <View>
      <Text style={{fontSize: 24, color: '#E7421B', fontWeight: 'bold'}}>
        Phonenumber
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 5,
          height: 50,
          flexDirection: 'row',
        }}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
          }}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Image
              style={{width: 50, height: 40, marginHorizontal: 5}}
              source={icons.flagOfVN}
            />
            <Modal transparent visible={modalVisible}>
              <View style={styles.container}>
                <View style={styles.eachContainer}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: 'grey',
                        marginVertical: 5,
                      }}>
                      Search by country or turn back
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: 'grey',
                      height: 1,
                      marginVertical: 10,
                    }}
                  />
                  <View style={{height: 350}}>
                    <FlatList
                      keyExtractor={key => key.name}
                      data={country}
                      renderItem={({item, index}) => (
                        <TouchableOpacity
                          onPress={() => {
                            setModalVisible(!modalVisible);
                          }}
                          style={{
                            flexDirection: 'row',
                            marginVertical: 10,
                          }}>
                          <Image
                            style={{width: 50, height: 50, borderRadius: 45}}
                            source={item.flag}
                          />
                          <View
                            style={{flexDirection: 'column', marginLeft: 10}}>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>
                              {item.name}
                            </Text>
                            <Text style={{color: 'grey'}}>+{item.number}</Text>
                          </View>
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: 'grey'}}>+84</Text>
        </View>
        <View
          style={{
            width: 1,
            height: '100%',
            backgroundColor: 'grey',
            marginHorizontal: 5,
          }}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Your phone"
          style={{flex: 2}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  eachContainer: {
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    elevation: 10,
    height: 450,
  },
});
export default UIPhoneInput;
