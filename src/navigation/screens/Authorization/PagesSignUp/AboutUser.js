import React from "react";
import {ScrollView, Text, TextInput, View} from "react-native";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "../LinkSwitchLoginAndRegister";
import BackToForm from "../BackToForm";


export default function AboutUser({SignUpStyles, setPage, page, changeForm, props}) {

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={SignUpStyles.container}>
        <BackToForm backStyles={SignUpStyles} title={"Вернутся к заполнению телефона"} funcBack={() => setPage(page - 1)} />

        {props.errors.username && props.touched.username ? (<Text style={SignUpStyles.error}>{props.errors.username}</Text>) : <Text></Text>}
        <TextInput
          style={SignUpStyles.input}
          placeholder={"Введите имя пользователя.."}
          onChangeText={props.handleChange("username")}
          value={props.values.username}
        />

        {props.errors.lastname && props.touched.lastname ? (<Text style={SignUpStyles.error}>{props.errors.lastname}</Text>) : <Text></Text>}
        <TextInput
          style={SignUpStyles.input}
          placeholder={"Введите вашу фамилию.."}
          onChangeText={props.handleChange("lastname")}
          value={props.values.lastname}
        />

        {props.errors.firstname && props.touched.firstname ? (<Text style={SignUpStyles.error}>{props.errors.firstname}</Text>) : <Text></Text>}
        <TextInput
          style={SignUpStyles.input}
          placeholder={"Введите ваше имя.."}
          onChangeText={props.handleChange("firstname")}
          value={props.values.firstname}
        />

        {props.errors.surname && props.touched.surname ? (<Text style={SignUpStyles.error}>{props.errors.surname}</Text>) : <Text></Text>}
        <TextInput
          style={SignUpStyles.input}
          placeholder={"Введите ваше отчество.."}
          onChangeText={props.handleChange("surname")}
          value={props.values.surname}
        />

        {props.errors.age && props.touched.age ? (<Text style={SignUpStyles.error}>{props.errors.age}</Text>) : <Text></Text>}
        <TextInput
          style={SignUpStyles.input}
          placeholder={"Введите ваш возраст.."}
          onChangeText={props.handleChange("age")}
          value={props.values.age}
        />

        <ButtonConfirm customStyles={SignUpStyles} title={"Зарегистрироваться"} funcPress={props.handleSubmit} />

        <LinkSwitchLoginAndRegister SignUpStyles={SignUpStyles} changeForm={() => changeForm("Авторизация", "Войти", "login", props.resetForm)} />
      </View>
    </ScrollView>
  )
}