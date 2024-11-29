import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { fonts } from '../theme';
import MainView from '../components/MainView';
import { CategoriesData, DoctorData } from '../staticData';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
        {/* header */}

        <View
          style={{
            padding: width * 0.04,
            backgroundColor: '#B28CFF',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            gap: height * 0.025,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                resizeMode="contain"
                source={require('../assets/lines.png')}
                style={{ padding: 14 }}
              />
            </TouchableOpacity>
            <View>
              <Image
                resizeMode="contain"
                source={require('../assets/person.png')}
                style={{ width: width * 0.12 }}
              />
            </View>
          </View>
          <View>
            <Text style={{ fontFamily: fonts.semi, color: 'white' }}>
              Welcome Back
            </Text>
            <Text
              style={{
                fontFamily: fonts.semi,
                color: 'white',
                fontSize: width * 0.07,
                flex: 1,
              }}>{`Let's find \nyour top doctor!`}</Text>
          </View>

          <MainView />
        </View>

        <View style={{ padding: width * 0.05, gap: 10 }}>
          <Text
            style={{ fontSize: 14, color: 'black', fontFamily: fonts.medium }}>
            Categories
          </Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CategoriesData}
            renderItem={({ item, index }) => {
              return (
                <View style={{ flexDirection: 'row', height: height * 0.125 }}>
                  <View
                    style={{
                      marginHorizontal: 5,
                      height: height * 0.1,
                      width: width * 0.2,
                      borderRadius: 20,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: 'lightgray',
                    }}>
                    <Image source={item.Icons} resizeMode="contain" />
                    <Text
                      style={{
                        color: 'gray',
                        position: 'absolute',
                        fontSize: 10,
                        top: height * 0.1,
                        textAlign: 'center',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <FlatList
          data={DoctorData}
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
                  onPress={() => navigation.navigate('Details')}>
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
                </Pressable>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({});
