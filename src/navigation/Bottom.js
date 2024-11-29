import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Create from '../screens/dummyScreens/Create';
import Calendar from '../screens/dummyScreens/Calendar';
import Messages from '../screens/dummyScreens/Messages';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Octicons from 'react-native-vector-icons/Octicons'

const Bottom = () => {

    const { height, width } = Dimensions.get('window')

    const CustomBottomBar = ({ state, navigation }) => {
        const getIcon = (routeName, color, isFocused) => {
            switch (routeName) {
                case 'Home':
                    return <Octicons name="home" size={26} color={color} />;
                case 'Calendar':
                    return <Ionicons name="calendar-outline" size={26} color={color} />;
                case 'Messages':
                    return <Ionicons name="chatbubble-ellipses-outline" size={26} color={color} />;
                default:
                    return null;
            }
        };

        return (
            <View style={styles.bottomBarContainer}>
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index;

                    const onPress = () => {
                        if (!isFocused) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={onPress}
                            style={styles.iconWrapper}
                        >
                            <View style={{ alignItems: 'center' }}>
                                {getIcon(route.name, isFocused ? '#B28CFF' : '#c1c1c1', isFocused)}
                                {isFocused && (
                                    <View style={{ backgroundColor: '#B28CFF', height: 5, width: 5, borderRadius: 60, top: 3 }}></View>
                                )}
                            </View>
                        </TouchableOpacity>
                    );
                })}

                <TouchableOpacity style={{
                    position: 'absolute',
                    right: 8,
                    backgroundColor: '#B28CFF',
                    borderRadius: 100,
                    padding: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 5,
                }} onPress={() => navigation.navigate('Create')}>
                    <View style={{ height: 20, width: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 60 }}>
                        <MaterialIcons name="add" size={20} color="#B28CFF" />
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <CustomBottomBar {...props} />}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Calendar' component={Calendar} />
            <Tab.Screen name='Messages' component={Messages} />
            <Tab.Screen name='Create' component={Create} />
        </Tab.Navigator>
    )
}

export default Bottom
const styles = StyleSheet.create({
    bottomBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '11%',
        backgroundColor: '#fff',
        borderRadius: 20,
        position: 'absolute',
        bottom: 10,
        width: '90%',
        alignSelf: 'center',
        elevation: 10,
        gap: 20
    },
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})