import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent.js';
import StylingReactNativeComponent from './StylingReactNativeComponent.js';
const App = () => {
  return (
    <View>
        <ScrollView>
            <SampleComponent />
            <StylingReactNativeComponent />
        </ScrollView>
    </View>
  );
};

export default App;
