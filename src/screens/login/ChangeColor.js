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
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ChangeColor(props) {
  const navigation = useNavigation();
  const [colors, setColors] = useState('');
  const BUTTONCOLOR = [
    {
      name: 'Đỏ',
      value: 'red',
    },
    {
      name: 'Xanh lá cây',
      value: 'green',
    },
    {
      name: 'Đen',
      value: 'black',
    },
    {
      name: 'vàng',
      value: 'yellow',
    },
    {
      name: 'Xanh da trời',
      value: 'blue',
    },
    {
      name: 'Default',
      value: 'white',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setColors(item.value);
        }}
        style={[styles.buttonPress, {backgroundColor: item.value}]}>
        <Text style={{color: 'white'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.eachContainer, {backgroundColor: colors}]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{position: 'absolute', top: 0, left: 0, margin: 10}}>
          <Icon name="arrow-left" size={40} color="pink" />
        </TouchableOpacity>
        <View
          style={{alignSelf: 'center', alignItems: 'center', width: '100%'}}>
          <FlatList
            data={BUTTONCOLOR}
            keyExtractor={key => key.value}
            renderItem={renderItem}
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
  eachContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPress: {
    height: 40,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,

    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
  },
});
export default ChangeColor;
