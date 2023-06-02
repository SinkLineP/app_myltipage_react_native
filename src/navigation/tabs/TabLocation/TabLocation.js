import React, {useEffect, useRef, useState} from "react";
import {Button, Dimensions, FlatList, ScrollView, StyleSheet, TextInput, View, Text, Pressable} from "react-native";
import MapView, {Animated, Marker} from 'react-native-maps';

import {useDispatch} from "react-redux";
import {saveAddress, setActiveTab, setCoordinates} from "../../../store/Slices/searchMapSlice";
import * as opencage from "opencage-api-client";
import {API_KEY_OpenCage} from "../../../Variables/ServerConfig";
import {CustomMarkerMap} from "../../../components/CustomMarkerMap/CustomMarkerMap";
import CarouselItems from "../../../components/SearchTabs/CarouselItems/CarouselItems";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import {InnerScreen} from "react-native-screens";
import ShowAndHide from "../../../components/SearchTabs/ShowAndHide/ShowAndHide";


export const TabLocation = ({ navigation }) => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const limitResulItems = 5;
  const [activeLocation, setActiveLocation] = useState({});
  const flatListRef = useRef(null);
  const [currentEstate, setCurrentEstate] = useState(null);
  const [region, setRegion] = useState({
    latitude: 46.7114346,
    longitude: 38.2738027,
    latitudeDelta: 0.1022,
    longitudeDelta: 0.0621
  });

  const [estates, setEstates] = useState([{
    id: 0,
    images: ["https://i.postimg.cc/ZWYbdm14/01.jpg"],
    address: "улица Карла Маркса 1",
    price: "100.000 р",
    coords: {
      latitude: 46.716390928360745,
      longitude: 38.27924375108283,
      latitudeDelta: 0.0016842505834304689,
      longitudeDelta: 0.0023378804326057434,
    },
    type: "квартира"
  },{
    id: 1,
    images: ["https://i.postimg.cc/WhwpzzY5/02.jpg"],
    address: "Парк поддубного",
    price: "100.000.000 р",
    coords: {
      latitude: 46.7040401076462,
      longitude: 38.26096159038479,
      latitudeDelta: 0.0016842505834304689,
      longitudeDelta: 0.0023378804326057434,
    },
    type: "парк"
  }])

  const reverseGeocode = (latitude, longitude) => {
    const key = API_KEY_OpenCage;
    opencage.geocode({ key, q: `${latitude},${longitude}`}).then(response => {
      dispatch(saveAddress({address: response.results[0].formatted}))
    });
  }

  const currentMarker = (estate) => {
    estates.map((item, index) => {
      if (item.id === estate.id) {
        dispatch(setActiveTab(index));
        flatListRef?.current.scrollToIndex({animated: true, index: index})
      }
    })

    setRegion({
      latitude: estate.coords.latitude,
      longitude: estate.coords.longitude,
      latitudeDelta: estate.coords.latitudeDelta,
      longitudeDelta: estate.coords.longitudeDelta
    })
  }

  const autoSuggestions = (query) => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "900a2e145ea5b6e72207aa3fe72d2df99e3b7a7d";

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({query: query})
    }

    fetch(url, options)
      .then(response => response.json())
      .then(result => setSearchResult(result.suggestions.slice(0, limitResulItems)))
      .catch(error => console.log("error", error));
  }//

  const RenderItemAutoSuggestions = () => {
    return searchResult.map((item, index) => {
      return (
        <Pressable onPress={() => {
          const latitude = item.data.geo_lat;
          const longitude = item.data.geo_lon;

          if (latitude !== null && longitude !== null) {
            setRegion({
              latitude: Number(latitude),
              longitude: Number(longitude),
              latitudeDelta: 0.09,
              longitudeDelta: 0.09,
            })

            setActiveLocation(item);
            setSearchInput(item.value);
          }

          setSearchInput(item.value);
        }} style={{
          paddingVertical: 5,
          borderBottomWidth: 1,
          borderTopWidth: index === 0 ? 1 : 0,
          borderColor: "#d2d2d2",
        }} key={index}>
          <Text style={{
            color: "#323232",
          }}>{item.value}</Text>
        </Pressable>
      )
    })
  }

  const map = useRef(null);
  const [currentZoom, setCurrentZoom] = useState(12.66288948059082);
  const [currentDelta, setCurrentDelta] = useState({
    latitudeDelta: region.longitudeDelta,
    longitudeDelta: region.longitudeDelta
  });

  return (
    <ScrollView style={stylesTabWithIcon.content}>

      <ContainerTab>
        <View style={stylesTabWithIcon.containerSearchInput}>
          <TextInput
            style={stylesTabWithIcon.searchInput}
            value={searchInput}
            onChangeText={(val) => {
              if (val.length === 0) {
                setActiveLocation({})
              }

              autoSuggestions(val)
              setSearchInput(val)
            }}
            placeholder={"Введите адрес.."}
          />
          <Text style={stylesTabWithIcon.clearSearchInput} onPress={() => {
            setSearchInput("")
            setSearchResult([])
            setActiveLocation({})
          }}>{searchInput !== "" ? "x" : ""}</Text>
        </View>
      </ContainerTab>

      <ShowAndHide activeLocation={activeLocation} searchInput={searchInput} searchResult={searchResult}>
        <ContainerTab>
          <View style={stylesTabWithIcon.containerResultSearch}>
            <RenderItemAutoSuggestions />
          </View>
        </ContainerTab>
      </ShowAndHide>

      <Animated
        ref={map}
        toolbarEnabled={false}
        zoomControlEnabled={true}
        region={region}
        rotateEnabled={false}
        showsUserLocation={true}
        style={{
          width: Dimensions.get("window").width - 15,
          height: Dimensions.get("window").height / 2,
          marginLeft: 7.5
        }}
        onRegionChange={(region) => {
          setCurrentDelta({
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta
          })
          // map?.current?.getCamera().then((cam) => {
          //   console.log(cam.zoom);
          // })
        }}
      >
        <>
          {
            estates.map((estate, index) => {
              return (
                <Marker
                  onPress={() => currentMarker(estate)}
                  key={index}
                  pinColor="tomato"
                  coordinate={{latitude: estate.coords.latitude, longitude: estate.coords.longitude}}
                >
                  <CustomMarkerMap delta={currentDelta} />
                </Marker>
              )
            })
          }
        </>
      </Animated>

      <View style={{
        paddingHorizontal: 10,
        marginVertical: 10
      }}>
        <CarouselItems flatListRef={flatListRef} setRegion={setRegion} data={estates} setCurrentEstate={setCurrentEstate} />
      </View>

      <View style={{paddingTop: 30}}>
        <Button
          title={"Открыть объявление"}
          onPress={() => {
            dispatch(setCoordinates({
              lat: region.latitude,
              lon: region.longitude,
              lat_d: region.latitudeDelta,
              lon_d: region.longitudeDelta
            }))

            reverseGeocode(region.latitude, region.longitude);

            navigation.navigate("ShowAdvertisement", {estate: currentEstate})
          }}
          color={"#58955a"} />
      </View>
    </ScrollView>
  )
}


const stylesTabWithIcon = StyleSheet.create({
  tabTitle: {
    width: "80%",
    verticalAlign: "middle",
    fontWeight: "bold",
    fontSize: 18,
    color: "#323232"
  },
  tabIcon: {
    width: "20%",
    textAlign: "center"
  },
  searchInput: {
    height: 50,
    width: "90%",
    fontSize: 16
  },
  content: {
    width: "100%",
  },
  containerResultSearch: {

  },
  clearSearchInput: {
    fontSize: 24,
    fontWeight: "bold",
    color: "tomato",
    paddingHorizontal: 10,
    paddingVertical: 5,
    bottom: 3,
  },
  containerSearchInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
})