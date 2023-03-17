import React from "react";
import {Modal, StyleSheet, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import ReviewsForm from "../ReviewsForm/ReviewsForm";


const ModalWindow = ({showModal, funcShowModal, setReviews}) => {
  return (
    <Modal visible={showModal} animationType={"slide"} transparent>
      <View style={modalStyles.position}>
        <View style={modalStyles.modalWindow}>
          <MaterialIcons name="close" size={36} color={"red"} style={{ textAlign: "right" }} onPress={() => funcShowModal(false)} />

          <View style={modalStyles.content}>
            <ReviewsForm setReviews={setReviews} />
          </View>
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
    marginTop: "17%",
    paddingBottom: 20,
    width: "90%",
    height: "auto",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 30,
  },
  content: {
    marginTop: 20,
  }
})

export default ModalWindow;