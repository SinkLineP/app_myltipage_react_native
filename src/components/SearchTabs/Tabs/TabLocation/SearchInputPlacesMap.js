import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import ContainerTab from "../../ContainerTab/ContainerTab";
import React, {useState} from "react";
import Translator, {TranslatorProvider, useTranslator} from "react-native-translator";
import {useDispatch} from "react-redux";
import {setCoordinates} from "../../../../store/Slices/searchMapSlice";

export default function SearchInputPlacesMap() {
  const dispatch = useDispatch();
  const [valuePlaces, setValuePlaces] = useState("");
  const [arrayPlaces, setArrayPlaces] = useState([]);
  const {translate} = useTranslator();
  const [result, setResult] = useState('');
  const TYPE = "city";


  const pressedPlaceOnSearch = (value) => {
    dispatch(setCoordinates({
      lat: Number(value.properties.lat),
      lon: Number(value.properties.lon),
    }))
  };

  return (
      <ContainerTab>
        <View style={{width: "100%"}}>
          <View>
            <TextInput
              style={{
                paddingLeft: 10,
                borderColor: "#d2d2d2",
                borderWidth: 1,
                width: "95%",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 5,
                color: "black",
                backgroundColor: "white"
              }}
              onChangeText={(text) => {
                fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=ffe0f9b432ea48b8867daf6dd245c94b&type=${TYPE}`, {
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
          <View>
            {arrayPlaces.map((item, index) => (
              <View key={item.properties.place_id} style={stylesSearchInputPlacesMap.itemSearch}>
                <Text onPress={() => pressedPlaceOnSearch(item)}>{item.properties.formatted}</Text>
              </View>
            ))}
          </View>
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
    paddingLeft: 10,
    backgroundColor: "red",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "#d2d2d2",
    color: "#323232"
  }
})