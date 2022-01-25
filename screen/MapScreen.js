import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import MapView from 'react-native-maps';
import Map from '../components/Map';

export default function MapScreen({navigation}) {
  return (
    <SafeAreaView>
      <Text>Here is the map stuff....</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
