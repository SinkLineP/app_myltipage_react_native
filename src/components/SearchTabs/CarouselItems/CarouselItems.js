import React, {useCallback, useRef, useState} from "react";
import {FlatList, View, Text, Pressable, Dimensions, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {saveAddress, setActiveTab, setCoordinates} from "../../../store/Slices/searchMapSlice";
import RenderItem from "./RenderItem";


export default function CarouselItems({ data, setRegion, flatListRef, setCurrentEstate }) {
  const dispatch = useDispatch();
  const activeTab = useSelector(state => state.searchMap.activeTab);

  const [widthContainer, setWidthContainer] = useState({
    width: 0,
  })

  const viewAbilityConfig = {
    itemVisiblePercentThreshold: 50
  }

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length !== 0) {
      const item = viewableItems[0].item;
      const index = viewableItems[0].index;

      setCurrentEstate(item);

      dispatch(setActiveTab(index));

      setRegion({
        latitude: item.coords.latitude,
        longitude: item.coords.longitude,
        latitudeDelta: item.coords.latitudeDelta,
        longitudeDelta: item.coords.longitudeDelta
      })

      dispatch(setCoordinates({
        lat: item.coords.latitude,
        lon: item.coords.longitude,
        lat_d: item.coords.latitudeDelta,
        lon_d: item.coords.longitudeDelta
      }))
    }
  }, [""])

  const viewAbilityConfigCallbackPairs = useRef([{ viewAbilityConfig, onViewableItemsChanged }])

  const nextPress = () => {
    if (activeTab < 1) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: activeTab + 1
      });
    } else {
      flatListRef?.current.scrollToIndex({animated: true, index: 0})
    }
    dispatch(saveAddress({address: ""}))
  };

  const backPress = () => {
    if (activeTab > 0) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: activeTab - 1
      });
    } else {
      flatListRef?.current.scrollToIndex({animated: true, index: data.length - 1})
    }
    dispatch(saveAddress({address: ""}))
  };

  const ArrowComponent = ({title, funcPress}) => {
    return (
      <Pressable onPress={funcPress} style={stylesCarouselItems.arrowButtonContainer}>
        <Text style={stylesCarouselItems.arrowButton}>{title}</Text>
      </Pressable>
    )
  }

  return (
    <>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <ArrowComponent title={'<'} funcPress={backPress} />

        <FlatList
          onLayout={(event) => {
            setWidthContainer({width: event.nativeEvent.layout.width})
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          ref={flatListRef}
          viewabilityConfigCallbackPairs={viewAbilityConfigCallbackPairs.current}
          horizontal={true}
          data={data}
          renderItem={({ item, index }) => (<RenderItem index={index} item={item} width={widthContainer.width} />)}
        />

        <ArrowComponent title={'>'} funcPress={nextPress} />
      </View>
    </>

  )
}

const stylesCarouselItems = StyleSheet.create({
  arrowButtonContainer: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowButton: {
    color: "#d2d2d2",
    fontWeight: "bold",
    fontSize: 22,
    bottom: 2.5
  }
})