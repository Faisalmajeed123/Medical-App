import {
  Button,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { fonts } from '../theme';
import Input from '../components/Input';
import CheckBox from 'react-native-check-box';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [isSignup, setSignup] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation();

  const handleOnSignup = () => {
    setSignup(true);
  };

  const handleOnSignin = () => {
    setSignup(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: height * 0.03,
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: height * 0.04,
            gap: 10,
          }}>
          <Text style={{ color: 'black', fontSize: 25, fontFamily: fonts.bold }}>
            iDoctor
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 12,
              fontFamily: fonts.regular,
              textAlign: 'center',
              width: width * 0.6,
            }}>{`Get well, stay well – book your doctor with a tap`}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: width,
          }}>
          <TouchableOpacity
            onPress={handleOnSignup}
            style={{
              borderBottomColor: isSignup ? '#B28CFF' : '#000',
              borderBottomWidth: isSignup ? 4 : 0,
              width: width * 0.4,
              alignItems: 'center',
              marginHorizontal: width * 0.02,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                fontFamily: isSignup ? fonts.bold : fonts.medium,
              }}>
              Signup
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOnSignin}
            style={{
              borderBottomColor: !isSignup ? '#B28CFF' : '#000',
              borderBottomWidth: !isSignup ? 4 : 0,
              width: width * 0.4,
              alignItems: 'center',
              marginHorizontal: width * 0.02,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                fontFamily: !isSignup ? fonts.bold : fonts.medium,
              }}>
              Signin
            </Text>
          </TouchableOpacity>
        </View>

        {isSignup ? (
          <View
            style={{
              marginTop: '10%',
              alignItems: 'center',
              flex: 1,
              gap: height * 0.04,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                gap: width * 0.04,
              }}>
              <TouchableOpacity
                style={{
                  height: height * 0.1,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/google.png')}
                  resizeMode="contain"
                  style={{ height: height * 0.12, width: width * 0.12 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: height * 0.1,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/facebook.png')}
                  resizeMode="contain"
                  style={{ height: height * 0.12, width: width * 0.12 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: height * 0.1,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/social.png')}
                  resizeMode="contain"
                  style={{ height: height * 0.12, width: width * 0.12 }}
                />
              </TouchableOpacity>
            </View>

            <Text style={{ color: 'black', fontSize: 14, alignItems: 'center' }}>
              or continue with
            </Text>

            <View style={{ gap: height * 0.01 }}>
              <Input placeholder="Full Name" label="Full Name" />
              <Input placeholder="Email" label="Email" />
              <Input placeholder="Phone Number" label="Phone Number" />
              <Input placeholder="Password" label="Password" />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: width * 0.06,
                width: '80%',
              }}>
              <CheckBox
                style={{
                  color: 'black',
                  height: height * 0.01,
                  width: width * 0.02,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => setisChecked(!isChecked)}
                isChecked={isChecked}
                leftText={'CheckBox'}
                checkedCheckBoxColor="#B28CFF"
                uncheckedCheckBoxColor="gray"
              />
              <Text
                style={{
                  color: 'black',
                  fontFamily: fonts.regular,
                  fontSize: 13,
                }}
                numberOfLines={2}>
                I agree to the
                <Text style={{ color: '#B28CFF' }}> Terms and Conditions</Text>
                <Text style={{ color: 'black' }}> and</Text>
                <Text style={{ color: '#B28CFF' }}> {`Privacy Policy.`}</Text>
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Drawer')}
              style={{
                backgroundColor: '#B28CFF',
                width: width * 0.85,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: fonts.medium,
                  fontSize: 18,
                }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              marginTop: '10%',
              alignItems: 'center',
              justifyContent: 'space-between',
              flex: 1,
              gap: height * 0.04,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                gap: width * 0.04,
              }}>
              <TouchableOpacity
                onPress={() => SignIn()}
                style={{
                  height: height * 0.1,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/google.png')}
                  resizeMode="contain"
                  style={{ height: height * 0.12, width: width * 0.12 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: height * 0.1,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/facebook.png')}
                  resizeMode="contain"
                  style={{ height: height * 0.12, width: width * 0.12 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: height * 0.1,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/social.png')}
                  resizeMode="contain"
                  style={{ height: height * 0.12, width: width * 0.12 }}
                />
              </TouchableOpacity>
            </View>

            <Text style={{ color: 'black', fontSize: 14, alignItems: 'center' }}>
              or continue with
            </Text>

            <View style={{ gap: height * 0.01 }}>
              <Input placeholder="Email" label="Email" />
              <Input placeholder="Password" label="Password" />
              <Pressable>
                <Text
                  style={{ color: 'black', fontSize: 13, textAlign: 'right' }}>
                  Forgot Password?
                </Text>
              </Pressable>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Drawer')}
              style={{
                backgroundColor: '#B28CFF',
                width: width * 0.85,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: fonts.medium,
                  fontSize: 18,
                }}>
                Signin
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
