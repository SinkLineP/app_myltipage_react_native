import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import Formik from "formik";
import {fantasticAnimalsPoster1} from "../../screens/postersLinks/postersURL";


const ReviewsForm = () => {



  return (
    <View style={stylesReviewsForm.container}>
      <Formik
        initialValues={{
          title: "",
          desc: "",
          rating: 0.0,
          releaseDate: "",
          img: ""
        }}
        onSubmit={(values) => {

        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={stylesReviewsForm.input}
              placeholder={"Введите название.."}
              onChangeText={props.handleChange("title")}
              value={props.value.title}
            />

            <TextInput
              style={stylesReviewsForm.input}
              placeholder={"Введите рейтинг.."}
              onChangeText={props.handleChange("desc")}
              value={props.value.desc}
            />

            <TextInput
              style={stylesReviewsForm.input}
              placeholder={"Введите рейтинг.."}
              onChangeText={props.handleChange("rating")}
              value={props.value.rating}
            />

            <TextInput
              style={stylesReviewsForm.input}
              placeholder={"Введите дату выхода.."}
              onChangeText={props.handleChange("releaseDate")}
              value={props.value.releaseDate}
            />

            <TextInput
              style={stylesReviewsForm.input}
              placeholder={"Введите URL картинки.."}
              onChangeText={props.handleChange("img")}
              value={props.value.img}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

const stylesReviewsForm = StyleSheet.create({
  container: {

  }
})

export default ReviewsForm;