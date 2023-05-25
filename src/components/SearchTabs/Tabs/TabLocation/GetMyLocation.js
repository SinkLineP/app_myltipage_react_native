import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import * as Location from 'expo-location';
import {FontAwesome} from "@expo/vector-icons";
import {API_KEY_GeoAPIFY} from "../../../../Variables/ServerConfig";
import {useDispatch} from "react-redux";
import {saveAddress, setCoordinates} from "../../../../store/Slices/searchMapSlice";



export default function GetMyLocation() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);


  const ShowPlace = ({location}) => {
    if (location !== null) {
      fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&type=city&format=json&apiKey=${API_KEY_GeoAPIFY}`)
        .then(response => response.json())
        .then(result => {
          dispatch(setCoordinates({
            lat: result.results[0].lat,
            lon: result.results[0].lon,
          }))
          dispatch(saveAddress({address: result.results[0].formatted}))
        })
        .catch(error => console.log('error', error));
    }
  }

  return (
    <Pressable style={styles.myLocationContainer} onPress={async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }}>
      <FontAwesome name="compass" size={24} color="tomato" />
      <ShowPlace location={location} />
      <Text style={styles.titleButton}>Где я?</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  titleButton: {
    color: "#323232",
    paddingTop: 5,
    paddingLeft: 10,
    fontWeight: "bold"
  },
  myLocationContainer: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginTop: 15,
    flexDirection: "row",
    width: "100%",
  },
});