import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {useDispatch} from 'react-redux';
import {setDestination, setOrigin} from '../slices/navSlice';
import useOrientation from '../hooks/useOrientation';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function HomeScreen({navigation}) {
  const orientation = useOrientation();
  const pos = orientation.pos;
  const dispatch = useDispatch();
  console.log(GOOGLE_MAPS_APIKEY);
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: pos === 'landscape' ? wp(15) : wp(20),
            height: pos === 'landscape' ? hp(10) : hp(8),
            resizeMode: 'contain',
          }}
          source={{uri: 'https://links.papareact.com/gzs'}}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          onPress={test => {
            console.log(test);
          }}
          enablePoweredByContainer={false}
          // onPress={(data, details = null) => {
          //   dispatch(
          //     setOrigin({
          //       location: details.geometry.location,
          //       description: data.description,
          //     }),
          //   );
          //   dispatch(setDestination(null));
          // }}
          fetchDetails={true}
        />

        <NavOptions pos={pos} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});
