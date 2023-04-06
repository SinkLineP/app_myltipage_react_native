import React from "react";
import {Text, TextInput, View} from "react-native";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "../LinkSwitchLoginAndRegister";
import BackToForm from "../BackToForm";


export default function ConfirmPhone({SignUpStyles, setPage, page, props, changeForm}) {


  return (
    <View style={SignUpStyles.container}>
      <BackToForm backStyles={SignUpStyles} title={"Вернутся к заполнению входных данных"} funcBack={() => setPage(page - 1)} />

      {props.errors.phone && props.touched.phone ? (<Text style={SignUpStyles.error}>{props.errors.phone}</Text>) : <Text></Text>}
      <TextInput
        style={SignUpStyles.input}
        placeholder={"Введите номер телефона.."}
        onChangeText={props.handleChange("phone")}
        value={props.values.phone}
      />

      <ButtonConfirm customStyles={SignUpStyles} title={"Далее"} funcPress={() => {
        setPage(page + 1)
      }} />

      <LinkSwitchLoginAndRegister SignUpStyles={SignUpStyles} changeForm={() => changeForm("Авторизация", "Войти", "login", props.resetForm)} />
    </View>
  )
}