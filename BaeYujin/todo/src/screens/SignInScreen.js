import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input, { KeyboardTypes } from '../components/Input';

export default function SignInScreen() {
    return (
        <View style={styles.container}>
            { /*
            <Image source={require('../../assets/icon.png')}
            style={styles.image}
            resizeMode="contain" /> */ }

            <Input title="아이디" placeholder="your@email.com" keyboardType={KeyboardTypes.EMAIL} />
            <Input title="비밀번호" placeholder="비밀번호" />

            <Text style={styles.loginText}>로그인</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    loginText: {
        marginTop: 10,
        color: '#aac9ff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginButton: {
        marginTop: 10,
        backgroundColor: '#aac9ff',
        borderRadius: 8,
        paddingVertical: 12,
        width: '100%',
        alignItems: 'center',
    },
});