import React from "react";
import {Text, TextInput, View} from "react-native";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "../LinkSwitchLoginAndRegister";


export default function emailAndPassword({SignUpStyles, props, page, setPage, changeForm}) {


  return (
    <View style={SignUpStyles.container}>
      <View style={SignUpStyles.form}>
        {props.errors.email && props.touched.email ? (<Text style={SignUpStyles.error}>{props.errors.email}</Text>) : <Text></Text>}
        <TextInput
          style={SignUpStyles.input}
          placeholder={"Введите адрес электронной почты.."}
          onChangeText={props.handleChange("email")}
          value={props.values.email}
        />

        {props.errors.password && props.touched.password ? (<Text style={SignUpStyles.error}>{props.errors.password}</Text>) : <Text></Text>}
        <TextInput
          style={SignUpStyles.input}
          placeholder={"Введите пароль.."}
          onChangeText={props.handleChange("password")}
          value={props.values.password}
        />

        {props.errors.confirmPassword && props.touched.confirmPassword ? (<Text style={SignUpStyles.error}>{props.errors.confirmPassword}</Text>) : <Text></Text>}
        <TextInput
          style={SignUpStyles.input}
          placeholder={"Подтвердите пароль.."}
          onChangeText={props.handleChange("confirmPassword")}
          value={props.values.confirmPassword}
        />
      </View>

      <ButtonConfirm customStyles={SignUpStyles} title={"Далее"} funcPress={() => {
        setPage(page + 1)
      }} />

      <LinkSwitchLoginAndRegister SignUpStyles={SignUpStyles} changeForm={() => changeForm("Авторизация", "Войти", "login", props.resetForm)} />
    </View>
  )
}

