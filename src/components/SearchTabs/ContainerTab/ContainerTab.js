import React from "react";
import {StyleSheet, View} from "react-native";


export default function ContainerTab({children, isShowRow}) {


  return (
    <View style={{
      backgroundColor: "#fff",
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: isShowRow ? "row" : "column",
      justifyContent: "space-between",
      marginTop: 5,
      marginBottom: 5,
    }}>
      <View style={{
        width: "90%",
        marginHorizontal: 17
      }}>
        {children}
      </View>
    </View>
  )
}
