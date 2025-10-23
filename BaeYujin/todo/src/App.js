import React from "react";
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import SignInScreen from "./screens/SignInScreen.js"

const App = () => {
    return(
        <View style={{flex:1}}>
            <StatusBar style="dark" />
            <SignInScreen />
        </View>
    )
}

export default App;