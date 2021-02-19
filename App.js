import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
const App = () =>{
    return (
        <View>
            <HomeHeader />
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Photo />
            <Text>Hello World</Text>
            <TextInput style={{borderWidth:1}}/>
        </View>
    );
};

const HomeHeader = () => {
    return <View style={{width:600,height:40,backgroundColor:'#FFD500'}} ></View>;
};

const Photo = () =>{
    return <Image source={{uri:'https://placeimg.com/600/480/nature'}} style={{width:100,height:100}} />
}
export default App;
