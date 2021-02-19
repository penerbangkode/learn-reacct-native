import React, { Component, Profiler } from 'react';
import {Image, Text, TextInput, View} from 'react-native';
const App = () =>{
    return (
        <View>
            <HomeHeader />
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Photo />
            <Text>Hello World</Text>
            <BoxSpacer />
            <TextInput style={{borderWidth:1}}/>
            <Profile />
        </View>
    );
};

const HomeHeader = () => {
    return <View style={{width:600,height:40,backgroundColor:'#FFD500'}} ></View>;
};

const Photo = () =>{
    return <Image source={{uri:'https://placeimg.com/600/480/nature'}} style={{width:100,height:100}} />
}

class BoxSpacer extends Component{
    render(){
        return <Text>---------------------------Spacer----------------------------------------</Text>
    }
}

class Profile extends Component{
    render(){
        return(
            <View>
                <Image source={{uri:'https://placeimg.com/600/480/animals'}} style={{width:200, height:200}} />
                <Text style={{marginTop:10, color:'#2f2f',fontSize:20,fontWeight:'bold', textAlign:'center'}}>Animal</Text>
            </View>
        );
    }
}
export default App;
