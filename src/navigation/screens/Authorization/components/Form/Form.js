import React from "react";
import {Text, TextInput, View} from "react-native";
import ButtonConfirm from "../../../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "../../LinkSwitchLoginAndRegister";


export default function FormAuth({styles, props, changeForm, btnConfirmTitle, titleButton, titleContent, noCorrectData}) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>

        {props.errors.email && props.touched.email ? (<Text style={styles.error}>{props.errors.email}</Text>) : <Text style={styles.error}>{noCorrectData}</Text>}
        <TextInput
          style={styles.input}
          placeholder={"Введите адрес электронной почты.."}
          onChangeText={props.handleChange("email")}
          value={props.values.email}
        />

        {props.errors.password && props.touched.password ? (<Text style={styles.error}>{props.errors.password}</Text>) : <Text></Text>}
        <TextInput
          style={styles.input}
          placeholder={"Введите пароль.."}
          onChangeText={props.handleChange("password")}
          value={props.values.password}
        />
      </View>

      <ButtonConfirm customStyles={styles.btnSubmit} color={"white"} background={"#048f9d"} size={25} title={btnConfirmTitle} funcPress={props.handleSubmit} />
      <LinkSwitchLoginAndRegister SignUpStyles={styles} changeForm={changeForm} titleButton={titleButton} titleContent={titleContent} />
    </View>
  )
}