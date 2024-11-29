import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MainView = () => {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Search')}
      style={{
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: 'white',
        borderRadius: 12,
        paddingStart: 10,
        paddingVertical: 0,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
      }}>
      <Image
        source={require('../assets/Headline/Iconly/Broken/Search.png')}
        resizeMode="contain"
        style={{ height: height * 0.08, width: width * 0.08 }}
      />
      <TextInput
        placeholder="Search health issue..."
        placeholderTextColor={'gray'}
        style={{ fontSize: 15, color: 'black' }}
      />
    </Pressable>
  );
};

export default MainView;

const styles = StyleSheet.create({});
