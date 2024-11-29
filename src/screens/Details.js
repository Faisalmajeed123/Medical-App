import {
  Alert,
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
import Entypo from 'react-native-vector-icons/Entypo';
import { useStripe } from '@stripe/stripe-react-native';
import { fonts } from '../theme';
import {
  scheduleData,
  visitHours,
  visitHours1,
  visitHours2,
} from '../staticData';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Details = () => {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const handleOnAppointment = async () => {
    console.log('1111111');
    try {
      const data = {
        amount: 1000,
      };
      console.log('22222222');

      const response = await axios.post(
        'http://192.168.0.104:3000/payments/intents',
        data,
      );
      console.log('response: ', response);

      console.log('3333333');

      const initResponse = await initPaymentSheet({
        merchantDisplayName: 'Faisal',
        paymentIntentClientSecret: response.data.paymentIntent,
      });
      if (initResponse.error) {
        console.log('errorWhileOpeningPaymentSheet');
        Alert.alert('warning');
      }

      await presentPaymentSheet();
    } catch (error) {
      console.log('Error: ', JSON.stringify(error, null, 2));
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'white',
          padding: 15,
          gap: 20,
        }}>
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
            Appointment
          </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/firstDoctor1.png')}
            resizeMode="contain"
            style={{
              backgroundColor: '#B28CFF',
              borderRadius: 12,
              width: width * 0.2,
              height: height * 0.1,
              opacity: 0.9,
            }}
          />
          <Text
            style={{ fontFamily: fonts.medium, fontSize: 20, color: 'black' }}>
            Dr Maria Waston
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              bottom: 6,
            }}>
            <Image
              source={require('../assets/CardiologyIcon.png')}
              style={{ width: width * 0.05 }}
              resizeMode="contain"
            />
            <Text style={{ color: 'gray', fontFamily: fonts.medium }}>
              Cardio Specialist
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#B28CFF',
            padding: 10,
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'center',
            borderRadius: 20,
            width: '100%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              height: height * 0.115,
              backgroundColor: 'white',
              width: width * 0.27,
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#B28CFF', fontSize: 25, fontWeight: 'bold' }}>
              350+
            </Text>
            <Text
              style={{ color: 'gray', fontSize: 10, fontFamily: fonts.medium }}>
              Patients
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              width: width * 0.27,
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#9DEAC0', fontSize: 25, fontWeight: 'bold' }}>
              15+
            </Text>
            <Text
              style={{ color: 'gray', fontSize: 10, fontFamily: fonts.medium }}>
              Exp. years
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              width: width * 0.27,
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#FF9A9A', fontSize: 25, fontWeight: 'bold' }}>
              284+
            </Text>
            <Text
              style={{ color: 'gray', fontSize: 10, fontFamily: fonts.medium }}>
              Reviews
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Text
            style={{ fontFamily: fonts.medium, color: 'black', fontSize: 18 }}>
            About Doctor
          </Text>
          <Text
            style={{ color: 'gray', fontFamily: fonts.regular, fontSize: 12 }}>
            Dr Maria Waston is tht top most Cardiologist specialist in London,
            She is available for private consultation.
          </Text>
        </View>

        <View style={{ gap: 8 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{ color: 'black', fontFamily: fonts.medium, fontSize: 18 }}>
              Schedules
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>August</Text>
              <Entypo name="chevron-small-right" size={18} colo="gray" />
            </View>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={scheduleData}
            renderItem={({ item, index }) => (
              <View
                style={{
                  borderWidth: 0.4,
                  paddingHorizontal: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 6,
                  borderRadius: 10,
                  borderColor: 'gray',
                  paddingVertical: 5,
                  ...(item.date === '9' && {
                    backgroundColor: '#B28CFF',
                  }),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: fonts.semi,
                    ...(item.date === '9' && {
                      color: '#fff',
                    }),
                  }}>
                  {item.date}
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontFamily: fonts.medium,
                    ...(item.date === '9' && {
                      color: '#fff',
                    }),
                  }}>
                  {item.Day}
                </Text>
              </View>
            )}
          />
        </View>

        <View style={{ gap: 10, marginTop: 8 }}>
          <Text
            style={{ color: 'black', fontFamily: fonts.medium, fontSize: 18 }}>
            Visit Hour
          </Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={visitHours1}
            renderItem={({ item, index }) => (
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderWidth: 0.4,
                  borderRadius: 6,
                  marginHorizontal: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: item.time === '12:00PM' ? '#B28CFF' : null,
                  borderColor: 'gray',
                }}>
                <Text
                  style={{
                    color: item.time === '12:00PM' ? '#fff' : '#000',
                    fontFamily: fonts.regular,
                  }}>
                  {item.time}
                </Text>
              </View>
            )}
          />

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={visitHours2}
            renderItem={({ item, index }) => (
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderWidth: 0.4,
                  borderRadius: 6,
                  marginHorizontal: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'gray',
                }}>
                <Text style={{ color: 'black', fontFamily: fonts.regular }}>
                  {item.time}
                </Text>
              </View>
            )}
          />
        </View>

        <TouchableOpacity
          onPress={handleOnAppointment}
          style={{
            backgroundColor: '#B28CFF',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 14,
          }}>
          <Text style={{ color: 'white', fontFamily: fonts.semi, fontSize: 16 }}>
            Book Appointment
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
