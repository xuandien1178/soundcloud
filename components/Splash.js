import React from "react";
import { Image, View, Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";



const BGColor = "#EE6624"

export default function Splash() {
    const edges = useSafeAreaInsets();
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: BGColor,
        }}>
            
        <Animated.View style = {{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",

        }}>
        <Image
            style= {{
            }}
            source={require('../img/logo/soundcloud.png')} />

        </Animated.View>
        </View>
    );
}

