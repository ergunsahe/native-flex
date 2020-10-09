import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'gray',
            margin: 15,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              backgroundColor: 'orange',
              width: 100,
              height: 100,
              borderRadius: 50,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{alignSelf: 'center'}}>Orange Circle</Text>
          </View>
          <View
            style={{
              backgroundColor: 'yellow',
              width: 100,
              height: 50,
              borderRadius: 20,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{alignSelf: 'center'}}> Yellow Box</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'pink',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'black',
            width: 200,
            height: 350,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Black Box</Text>
        </View>
        <View
          style={{
            backgroundColor: 'brown',
            width: 50,
            height: 350,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', transform: [{rotate: '270deg'}]}}>
            Brown Box
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
