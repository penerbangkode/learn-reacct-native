import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import laptop from './laptop.jpg';
const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={style.text}> Hello</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#FFD500',
          borderWidth: 2,
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          marginTop: 10,
          marginLeft: 10,
          borderRadius: 8,
        }}>
        <Image
          source={laptop}
          style={{
            resizeMode: 'cover',
            width: null,
            height: 100,
            borderRadius: 8,
          }}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 12,
          }}>
          Rp. 25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
});

export default StylingReactNativeComponent;
