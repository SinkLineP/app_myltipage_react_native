import React from 'react';
import {StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";


export default function AnimatedLoading() {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.loading}
        source={require("./AnimatedLoading.json")}
        autoPlay
        loop={false}
        resizeMode={"cover"}
        // onAnimationFinish={}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    width: "50%",

  }
})