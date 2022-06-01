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
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DATA = [
  {
    key: '1',
    value: 1,
  },
  {
    key: '2',
    value: 2,
  },
  {
    key: '3',
    value: 3,
  },
  {
    key: '4',
    value: 4,
  },
  {
    key: '5',
    value: 5,
  },
  {
    key: '6',
    value: 6,
  },
  {
    key: '7',
    value: 7,
  },
  {
    key: '8',
    value: 8,
  },
  {
    key: '9',
    value: 9,
  },
  {
    key: '10',
    value: 10,
  },
];

function ShuffeListData(props) {
  const [searchText, setSearchText] = useState('');
  const {width, height} = Dimensions.get('window');
  const [datafilter, setDatafilter] = useState([]);
  const [datas, setDatas] = useState(DATA);
  const filteredData = () => {
    let DATAFILLER = {...datas};
    let cloneDataFilter = [];
    for (const [key, value] of Object.entries(DATAFILLER)) {
      if (value.key.toLowerCase().includes(searchText.toLocaleLowerCase())) {
        cloneDataFilter.push(value);
      }
    }
    setDatas(cloneDataFilter);
  };

  const shuffledData = () => {
    let shuffled = datas
      .map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value);
    setDatas(shuffled);
  };

  const [inter, setInter] = useState(null);
  creatInterval = () => {
    console.log('interval', inter);
    if (inter) {
      clearInterval(inter);
    }
    varinter = setInterval(() => {
      shuffledData();
    }, 5000);
    setInter(varinter);
    console.log('create', inter, varinter);
  };
  clearReturnInterVal = () => {
    console.log('interval clear', inter);

    if (inter) {
      clearInterval(inter);
      console.log('clearReturnInterVal');
    } else {
      console.log('no clear');
    }
  };
  useEffect(() => {
    filteredData();
    // const interval = setInterval(() => {
    //   shuffledData();
    // }, 5000);
    // return () => clearInterval(interval);
  }, [datas.length]);

  const renderItem = ({item, index}) => (
    <TouchableOpacity style={[styles.backgroundItem, {width: width * 0.45}]}>
      <Text style={{fontSize: 50, color: '#FAFAD2'}}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => clearReturnInterVal()}>
            <Icon name="arrow-left" size={25} />
          </TouchableOpacity>
          <TextInput
            onChangeText={text => setSearchText(text)}
            placeholder="search"
            style={styles.textSearch}
          />
          <TouchableOpacity onPress={() => creatInterval()}>
            <Icon name="search" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewProduct}>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              backgroundColor: 'white',
            }}>
            {datas.length > 0 ? (
              <FlatList
                numColumns={2}
                data={datas}
                keyExtractor={key => key.key.toString()}
                renderItem={renderItem}
              />
            ) : (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'red', fontWeight: 'bold', fontSize: 28}}>
                  Nothing found
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerView: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(128,128,128,0.1)',
  },
  textSearch: {
    borderBottomWidth: 0.5,
    flex: 1,
    marginHorizontal: 10,
  },
  viewProduct: {
    marginTop: 20,
    flex: 1,
  },
  backgroundItem: {
    height: 250,
    backgroundColor: 'rgb(128,128,128)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
});
export default ShuffeListData;
