import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import ContainerTab from "../../ContainerTab/ContainerTab";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {saveAddress, setCoordinates} from "../../../../store/Slices/searchMapSlice";
import {FontAwesome} from "@expo/vector-icons";
import GetMyLocation from "./GetMyLocation";
import {API_KEY_GeoAPIFY} from "../../../../Variables/ServerConfig";

export default function SearchInputPlacesMap({getCoordinate}) {
  const dispatch = useDispatch();
  const [valuePlaces, setValuePlaces] = useState("");
  const [arrayPlaces, setArrayPlaces] = useState([]);
  const TYPE = "city";


  const pressedPlaceOnSearch = (value) => {
    setValuePlaces(value.properties.formatted);
    setArrayPlaces([]);
    getCoordinate(value);
  };

  return (
    // <ContainerTab>
    <View style={{
      position: "absolute",
      marginBottom: 30,
      width: "80%",
      marginTop: 16,
      marginLeft: 10
    }}>
      <View>
        <TextInput
          style={stylesSearchInputPlacesMap.textInput}
          onChangeText={(text) => {
            fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=${API_KEY_GeoAPIFY}&type=${TYPE}`, {
              method: 'GET'
            })
              .then(response => response.json())
              .then(result => {
                if (result.features !== undefined && result.features !== []) {
                  if (result.features.length !== 0) {
                    setArrayPlaces(result.features);
                  }
                }

                if (result.features === undefined || result.features.length === 0) {
                  setArrayPlaces([]);
                }
              })
            setValuePlaces(text)
          }}
          value={valuePlaces}
          placeholder={"Поиск.."}
        />
      </View>
      {
        arrayPlaces.length !== 0 ? (
          <View style={stylesSearchInputPlacesMap.autocompleteContainer}>
            <ScrollView persistentScrollbar={true} style={stylesSearchInputPlacesMap.scrollableContentAutocomplete}>
              {arrayPlaces.map((item, index) => {
                return (
                  <View key={item.properties.place_id} style={{
                    paddingHorizontal: 19,
                    paddingVertical: 5,
                    borderBottomWidth: index + 1 === arrayPlaces.length ? 0 : 1,
                    borderColor: "#d2d2d2",
                    color: "#323232"
                  }}>
                    <Text onPress={() => pressedPlaceOnSearch(item)}>{item.properties.formatted}</Text>
                  </View>
                )
              })}
            </ScrollView>
          </View>
        ) : ("")
      }
    </View>
    // </ContainerTab>
  )
};

const stylesSearchInputPlacesMap = StyleSheet.create({
  containerContent: {
    marginHorizontal: 10,
    height: 100
  },
  itemSearch: {
    paddingHorizontal: 19,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "#d2d2d2",
    color: "#323232"
  },
  textInput: {
    paddingHorizontal: 10,
    borderColor: "#d2d2d2",
    borderWidth: 1,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 5,
    color: "black",
    backgroundColor: "white"
  },
  scrollableContentAutocomplete: {
  },
  autocompleteContainer: {
    minHeight: 10,
    backgroundColor: "white",
    marginTop: 6,
    borderRadius: 5,
    maxHeight: 100,
  }
})