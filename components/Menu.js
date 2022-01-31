import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import tw from 'tailwind-react-native-classnames';

export default function Menu({item, pos}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={
        pos === 'landscape'
          ? tw`p-2 pl-6 pb-4 pt-4 bg-gray-200 m-2 w-40`
          : tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`
      }
      onPress={() => navigation.navigate(item.screen)}>
      <View>
        <Image
          source={{uri: item.image}}
          style={{
            width: pos === 'landscape' ? wp(12) : wp(22),
            height: pos === 'landscape' ? hp(20) : hp(10),
            resizeMode: 'contain',
            backgroundColor: 'red',
          }}
        />
        <Text style={tw`mt-2 text-lg`}>{item.title}</Text>
        <Icon
          name="arrowright"
          type="antdesign"
          color="white"
          style={tw`p-2 bg-black rounded-full w-10`}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
