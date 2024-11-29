import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Input = ({ placeholder = 'Email', label = 'Email' }) => {
    const [isShow, setShow] = useState(false);
    const { height, width } = Dimensions.get('window');

    const handleOnPasswordIcon = () => {
        setShow(!isShow);
    };

    return (
        <>
            <Text style={{ color: 'black' }}>{`${label}*`}</Text>
            <View
                style={{
                    height: height * 0.075,
                    width: width * 0.85,
                    backgroundColor: '#f2f0ef',
                    paddingStart: 12,
                    borderRadius: 15,
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={'gray'}
                    style={{ color: 'black', flex: 1 }}
                    secureTextEntry={placeholder === 'Password' && !isShow}
                />
                {placeholder === 'Password' && (
                    <TouchableOpacity onPress={handleOnPasswordIcon} style={{ height: height * 0.3, width: width * 0.15, alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo
                            name={isShow ? 'eye-with-line' : 'eye'}
                            size={24}
                            color={'gray'}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </>
    );
};

export default Input;

const styles = StyleSheet.create({});
