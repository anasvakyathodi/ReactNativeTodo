import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function App() {

  let [text, setText] = useState('')
  let [data, setData] = useState([
    {
      id: 1,
      name: 'Read a book'
    },
    {
      id: 2,
      name: 'Drink a coffee'
    },
  ]);

  _handleAddToDo = () => {
    if (text == '') {
      return alert('Please input some todos.');
    }

    setData([
      ...data,
      {
        id: new Date().getTime(),
        name: text
      }
    ])

    setText('')
  }

  _handleDeleteToDo = (id) => {
    let index = data.map(x =>  x.id).indexOf(id);
    data.splice(index, 1)
    setData([...data])
  }

  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{ flex: 1, height: 55 }}
          >
            <View style={{flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 2.5, backgroundColor: 'white', height: 53, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 15 }}>
                  <Text numberOfLines={1} style={{ fontSize: 16, color: 'black' }}>
                    {item.name}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => _handleDeleteToDo(item.id)} style={{width: 30, height: 30, marginTop: 10, marginRight: 10, backgroundColor: 'red'}}>
                  <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                    <Icon name="trash" size={30} color="#900" style={{ fontSize: 17, color: 'white' }}/>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, paddingLeft: 15 }}>
                <View style={{ borderBottomColor: `rgb(208, 208, 208)`, borderBottomWidth: 1 }} />
              </View>
            </View>
          </View>
        )}
      />
    <View style={{
        flexDirection: 'row',
        bottom: 0,
        alignSelf: 'flex-end',
        height: 45
      }}>
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Add a to do"
            style={{ height: '100%', paddingHorizontal: 10, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setText(text)}
            value={text}
          />
        </View>
        <TouchableOpacity onPress={() => _handleAddToDo()} style={{width: 70, width: 70, height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(76, 167, 70)'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="plus" size={30} color="#900" style={{ fontSize: 17, color: 'white' }}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
