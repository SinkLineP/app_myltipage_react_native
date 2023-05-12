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

export default function SearchInputPlacesMap() {
  const dispatch = useDispatch();
  const [valuePlaces, setValuePlaces] = useState("");
  const [arrayPlaces, setArrayPlaces] = useState([]);
  const TYPE = "city";


  const pressedPlaceOnSearch = (value) => {
    dispatch(setCoordinates({
      lat: Number(value.properties.lat),
      lon: Number(value.properties.lon),
    }))
    dispatch(saveAddress({
      address: value.properties.formatted
    }))
  };

  return (
      <ContainerTab>
        <View style={{width: "100%"}}>
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
              <ScrollView persistentScrollbar={true} style={stylesSearchInputPlacesMap.scrollableContentAutocomplete}>
                {arrayPlaces.map((item, index) => (
                  <View key={item.properties.place_id} style={stylesSearchInputPlacesMap.itemSearch}>
                    <Text onPress={() => pressedPlaceOnSearch(item)}>{item.properties.formatted}</Text>
                  </View>
                ))}
              </ScrollView>
            ) : ("")
          }
          <GetMyLocation />
        </View>
      </ContainerTab>

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
    paddingLeft: 10,
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
    height: 100,
  },

})