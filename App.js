import React, { Component } from 'react';
import {Image, Text, TextInput, View, StyleSheet} from 'react-native';
import laptop from './laptop.jpg';
const App = () =>{
    return <StylingReactNativeComponent />
};

const StylingReactNativeComponent = () => {
    return (
        <View>
            {/* <Text style={style.text}> Hello</Text>
            <View style={{width:100,height:100,backgroundColor:'#FFD500',borderWidth:2,marginTop:20,marginLeft:20}}></View> */}
            <View style={{padding:12,backgroundColor:'#F2F2F2',width:212,marginTop:10, marginLeft:10, borderRadius:8}}>
                <Image source={laptop} style={{resizeMode:'cover',width:null,height:100, borderRadius:8}}/>
                <Text style={{fontSize:14, fontWeight:'bold', marginTop:16}}>New Macbook Pro 2019</Text>
                <Text style={{fontSize:12,fontWeight:'bold',color:'#F2994A',marginTop:12}}>Rp. 25.000.000</Text>
                <Text style={{fontSize:12,fontWeight:'300',marginTop:12}}>Jakarta Barat</Text>
                <View style={{marginTop:20,backgroundColor:'#6FCF97',paddingVertical:6,borderRadius:25}}>
                    <Text style={{fontSize:14,fontWeight:'600',color:'white', textAlign:'center'}}t>Beli</Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        marginLeft:20
    }
});

const SampleComponent = () => {
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
    
    )
}
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
