import React from "react";
import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {
  setAddressStatus,
  setSettlementsStore,
  setShowSettlements,
  setShowStreet,
  setStreetStatus,
  setStreetStore
} from "../../../store/Slices/searchAddressSlice";
import ContainerTab from "../../SearchTabs/ContainerTab/ContainerTab";


export const ShowSelectedAddress = ({ typeLocation, setValueLocation, isShowSettlements, valueLocation }) => {
  const settlementStore = useSelector(state => state.searchAddress.settlements);
  const streetStore = useSelector(state => state.searchAddress.street);
  const isShowStreet = useSelector(state => state.searchAddress.isShowStreetForm);
  const dispatch = useDispatch();


  const editAddress = () => {
    if (typeLocation === "settlement") {
      dispatch(setShowSettlements(false));
      dispatch(setAddressStatus("editing"));

      if (streetStore !== "") {
        dispatch(setStreetStatus("deleted"));
        dispatch(setShowStreet(false));
      }
    } else if (typeLocation === "street") {
      dispatch(setShowStreet(false));
      dispatch(setStreetStatus("editing"));
      // dispatch(setStreetStore(""));
      // setValueLocation("");
    }
  }

  const deleteAddress = () => {
    if (typeLocation === "settlement") {
      dispatch(setShowSettlements(false));
      dispatch(setSettlementsStore(""));
      setValueLocation("");
      dispatch(setAddressStatus("deleted"));

      if (streetStore !== "") {
        dispatch(setStreetStore(""));
        dispatch(setStreetStatus("deleted"));
        dispatch(setShowStreet(false));
      }
    } else if (typeLocation === "street") {
      dispatch(setShowStreet(false));
      dispatch(setStreetStore(""));
      setValueLocation("");
      dispatch(setStreetStatus("deleted"));
    }
  }

  if (typeLocation === "settlement") {
    if (isShowSettlements === true) {
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
    if (isShowStreet === true) {
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