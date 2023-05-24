import React, {useCallback, useRef, useState} from "react";
import {FlatList, View, Text, Pressable, Dimensions, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {setCoordinates} from "../../../store/Slices/searchMapSlice";


export default function CarouselItems({ data, region, setRegion }) {
  const [activeTab, setActiveTab] = useState(0);
  const flatListRef = useRef(null);
  const dispatch = useDispatch();
  const coordinateStore = useSelector(state => state.searchMap.currentCoordinate);

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

      setActiveTab(index);

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
          renderItem={({ item, index }) => {
            return (
              <View
                key={item.id}
                style={{
                  width: widthContainer.width,
                }}
              >
                <View
                  style={{
                    paddingHorizontal: "auto",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 10,
                    borderColor: "#d2d2d2",
                    borderWidth: 1,
                    alignItems: "center",
                    width: widthContainer.width - 10
                  }}
                  key={index}>
                  <Text>{item.address}</Text>
                </View>
              </View>
            )
          }}
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