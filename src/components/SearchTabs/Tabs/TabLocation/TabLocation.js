import React, {useRef, useState} from "react";
import {Button, Dimensions, ScrollView, StyleSheet, View} from "react-native";
import {Animated, Marker} from 'react-native-maps';
import {useDispatch, useSelector} from "react-redux";
import {saveAddress, setActiveTab, setCoordinates} from "../../../../store/Slices/searchMapSlice";
import * as opencage from "opencage-api-client";
import {API_KEY_OpenCage} from "../../../../Variables/ServerConfig";
import {CustomMarkerMap} from "../../../CustomMarkerMap/CustomMarkerMap";
import CarouselItems from "../../CarouselItems/CarouselItems";


export const TabLocation = ({ navigation }) => {
  const dispatch = useDispatch();
  const [region, setRegion] = useState({
    latitude: 46.7114346,
    longitude: 38.2738027,
    latitudeDelta: 0.1022,
    longitudeDelta: 0.0621
  });
  const flatListRef = useRef(null);
  const [currentEstate, setCurrentEstate] = useState(null);

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

  return (
    <ScrollView style={stylesTabWithIcon.content}>
      <Animated
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
                  <CustomMarkerMap estate={estate} />
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
    borderWidth: 1,
    borderColor: "#323232",
    marginTop: 10,
    height: 30,
    lineHeight: 10,
    paddingLeft: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%"
  },
  content: {
    width: "100%",
    // marginVertical: 20
  },

})