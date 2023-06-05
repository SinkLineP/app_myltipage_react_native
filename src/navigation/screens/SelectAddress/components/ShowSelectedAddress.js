import React from "react";
import ContainerTab from "../../../../components/SearchTabs/ContainerTab/ContainerTab";
import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {
  setSettlements,
  setShowSettlements,
  setShowStreet,
  setStreet
} from "../../../../store/Slices/searchAddressSlice";


export const ShowSelectedAddress = ({ typeLocation, setValueLocation, valueLocation }) => {
  const settlementStore = useSelector(state => state.searchAddress.settlements);
  const streetStore = useSelector(state => state.searchAddress.street);
  const isShowSettlements = useSelector(state => state.searchAddress.isShowSettlementsForm);
  const isShowStreet = useSelector(state => state.searchAddress.isShowStreetForm);
  const dispatch = useDispatch();


  const editAddress = () => {
    if (typeLocation === "settlement") {
      dispatch(setShowSettlements(true));
    } else if (typeLocation === "street") {
      dispatch(setShowStreet(true));
    }
  }

  const deleteAddress = () => {
    if (typeLocation === "settlement") {
      dispatch(setShowSettlements(true));
      dispatch(setSettlements(""));
      setValueLocation("");
    } else if (typeLocation === "street") {
      dispatch(setShowSettlements(true));
      dispatch(setStreet(""));
      setValueLocation("");
    }
  }

  const CardAddress = () => {}


  if (typeLocation === "settlement") {
    if (isShowSettlements !== true) {
      return (
        <ContainerTab>
          <Text style={{ color: "#323232", fontWeight: "bold" }}>Выбранный адрес: </Text>
          <Text style={{ color: "#323232", fontWeight: "bold" }}>{settlementStore}</Text>
          <View style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-around"
          }}>
            <Text onPress={() => editAddress()} style={{
              backgroundColor: "#80c1ff",
              color: "#fff",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
              fontWeight: "bold"
            }}>Изменить</Text>
            <Text onPress={() => deleteAddress()} style={{
              backgroundColor: "#c74242",
              color: "#fff",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
              fontWeight: "bold"
            }}>Удалить</Text>
          </View>
        </ContainerTab>
      )
    }
  } else if (typeLocation === "street") {
    if (isShowStreet !== true) {
      return (
        <ContainerTab>
          <Text style={{ color: "#323232", fontWeight: "bold" }}>Выбранная улица: </Text>
          <Text style={{ color: "#323232", fontWeight: "bold" }}>{streetStore}</Text>
          <View style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-around"
          }}>
            <Text onPress={() => editAddress()} style={{
              backgroundColor: "#80c1ff",
              color: "#fff",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
              fontWeight: "bold"
            }}>Изменить</Text>
            <Text onPress={() => deleteAddress()} style={{
              backgroundColor: "#c74242",
              color: "#fff",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
              fontWeight: "bold"
            }}>Удалить</Text>
          </View>
        </ContainerTab>
      )
    }
  }
}