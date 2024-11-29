import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { fonts } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { SearchData } from '../staticData';
fonts;

const Search = () => {
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        style={{ flexGrow: 1, backgroundColor: 'white', padding: 18 }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: width * 0.63,
          }}>
          <Pressable onPress={() => navigation.navigate('Drawer')}>
            <Entypo name="chevron-small-left" size={30} color="black" />
          </Pressable>
          <Text style={{ color: 'black', fontFamily: fonts.semi }}>
            Top Doctor
          </Text>
        </View>

        <View
          style={{
            alignSelf: 'center',
            width: width * 0.9,
            height: height * 0.08,
            backgroundColor: 'white',
            borderRadius: 12,
            paddingStart: 10,
            paddingVertical: 0,
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
            borderWidth: 0.3,
            borderColor: 'gray',
            marginTop: 14,
          }}>
          <Image
            source={require('../assets/Headline/Iconly/Broken/Search.png')}
            resizeMode="contain"
            style={{ height: height * 0.08, width: width * 0.08 }}
          />
          <TextInput
            placeholder="Search Doctor"
            placeholderTextColor={'gray'}
            style={{ fontSize: 15, color: 'black' }}
          />
        </View>

        <FlatList
          data={SearchData}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 0.5,
                  borderColor: 'lightgray',
                  width: width * 0.9,
                  height: height * 0.2,
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginVertical: 10,
                  padding: 20,
                  gap: 15,
                  borderRadius: 15,
                }}>
                <View>
                  <Image
                    source={item.Icon}
                    resizeMode="contain"
                    style={{
                      bottom: 8,
                      borderRadius: 20,
                      backgroundColor: '#B28CFF',
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 6,
                      top: 6,
                    }}>
                    <Image
                      source={require('../assets/Star.png')}
                      resizeMode="contain"
                      style={{ bottom: 5 }}
                    />
                    <Text
                      style={{ textAlign: 'center', bottom: 6, color: 'gray' }}>
                      {item.rating}
                    </Text>
                  </View>
                </View>

                <Pressable
                  style={{ gap: 10 }}
                  onPress={() => navigation.navigate('Search')}>
                  <View>
                    <Pressable onPress={() => navigation.navigate('Details')}>
                      <Text style={{ color: 'black', fontFamily: fonts.semi }}>
                        {item.Name}
                      </Text>
                    </Pressable>
                    <Text
                      style={{
                        color: 'gray',
                        fontFamily: fonts.semi,
                        fontSize: 12,
                      }}>
                      {item.Specialist}
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View
                      style={{
                        backgroundColor: '#F7F8F8',
                        height: height * 0.06,
                        width: width * 0.32,
                        justifyContent: 'center',
                        alignContent: 'center',
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'black',
                          fontFamily: fonts.medium,
                        }}>
                        Appointment
                      </Text>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 7 }}>
                      <View
                        style={{
                          backgroundColor: '#F7F8F8',
                          padding: 10,
                          justifyContent: 'center',
                          alignContent: 'center',
                          borderRadius: 10,
                        }}>
                        <Image
                          source={require('../assets/Hicon/Bold/Message8.png')}
                          resizeMode="contain"
                        />
                      </View>
                      <View
                        style={{
                          backgroundColor: '#F7F8F8',
                          padding: 12,
                          justifyContent: 'center',
                          alignContent: 'center',
                          borderRadius: 10,
                        }}>
                        <Image
                          source={require('../assets/heart.png')}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                  </View>
                </Pressable>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
