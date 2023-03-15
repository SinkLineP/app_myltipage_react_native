import React from "react";
import {Modal, StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import ReviewsForm from "../ReviewsForm/ReviewsForm";


const ModalWindow = ({showModal, funcShowModal, children}) => {


  return (

    <Modal visible={showModal} animationType={"slide"} transparent>
      <View style={modalStyles.position}>
        <View style={modalStyles.modalWindow}>
          <MaterialIcons name="close" size={36} color={"red"} style={{ textAlign: "right" }} onPress={() => funcShowModal(false)} />

          <ReviewsForm />
        </View>
      </View>
    </Modal>
  )
}


const modalStyles = StyleSheet.create({
  position: {
    alignItems: "center",
    justifyContent: "center"
  },
  modalWindow: {
    marginTop: 20,
    width: "90%",
    height: "95%",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 30,
  },
})

export default ModalWindow;