import React, {useState} from "react";
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';



export function ModalWindowProfile({setModalVisible, modalVisible, contentModal, titleModal, defaultPassword, textButton}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={stylesModalWindowProfile.centeredView}>
        <View style={stylesModalWindowProfile.modalView}>
          <Text style={stylesModalWindowProfile.modalTitle}>{titleModal}</Text>
          <Text style={stylesModalWindowProfile.modalText}>{contentModal} - '<Text style={stylesModalWindowProfile.passwordText}>{defaultPassword}</Text>'</Text>
          <Pressable
            style={[stylesModalWindowProfile.button, stylesModalWindowProfile.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={stylesModalWindowProfile.textStyle}>{textButton}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const stylesModalWindowProfile = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitle: {
    textAlign: 'center',
    fontWeight: "bold",
    color: "#c74242"
  },
  passwordText: {
    color: "#db7e1c",
    fontWeight: "bold"
  }
})