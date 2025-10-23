import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const KeyboardTypes = {
    DEFAULT: 'default',
    EMAIL: 'email-address',
};

const Input = ({ title, placeholder, keyboardType = KeyboardTypes.DEFAULT }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
            style={styles.input}
            placeholder={placeholder ?? title}
            placeholderTextColor="#a3a3a3"
            keyboardType={keyboardType}
            secureTextEntry={title === '비밀번호'} />
        </View>
    );
};

Input.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
};

export default Input;

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        width: '100%',
    },
    title: {
        fontSize: 14,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 42,
        fontSize: 14,
        backgroundColor: '#fff',
    },
});