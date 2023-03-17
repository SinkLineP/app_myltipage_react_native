import React from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";
import {Formik} from "formik";


const ReviewsForm = ({setReviews}) => {
  return (
    <View>
      <Formik
        style={stylesReviewsForm.container}
        initialValues={{
          title: "",
          body: "",
          rating: "",
          releaseDate: "",
          img: ""
        }}
        onSubmit={({title, body, rating, releaseDate, img}) => {
          setReviews({
            title: title,
            body: body,
            rating: eval(rating),
            releaseDate: releaseDate,
            img: img
          })
        }}
      >
        {(props) => (
          <View>
            <View style={stylesReviewsForm.inputs}>
              <TextInput
                style={stylesReviewsForm.input}
                placeholder={"Введите название.."}
                onChangeText={props.handleChange("title")}
                value={props.values.title}
              />

              <TextInput
                multiline
                style={stylesReviewsForm.input}
                placeholder={"Введите описание.."}
                onChangeText={props.handleChange("body")}
                value={props.values.body}
              />

              <TextInput
                style={stylesReviewsForm.input}
                placeholder={"Введите рейтинг (0.0 - 10.0).."}
                onChangeText={props.handleChange("rating")}
                keyboardType={"numeric"}
                value={props.values.rating}
              />

              <TextInput
                style={stylesReviewsForm.input}
                placeholder={"Введите дату выхода.."}
                onChangeText={props.handleChange("releaseDate")}
                keyboardType={"numeric"}
                value={props.values.releaseDate}
              />

              <TextInput
                style={stylesReviewsForm.input}
                placeholder={"Введите URL картинки.."}
                onChangeText={props.handleChange("img")}
                value={props.values.img}
              />
            </View>

            <Button title="Отправить" color="coral" onPress={() => props.handleSubmit()}/>
          </View>
        )}
      </Formik>
    </View>
  )
}

const stylesReviewsForm = StyleSheet.create({
 input: {
    borderWidth: 1,
    minHeight: 20,
    padding: 4,
    marginBottom: 5,
    borderColor: "#bcbcbc",
    borderRadius: 5
  },
  btn: {
    marginTop: 15
  },
  inputs: {
    paddingBottom: 20
  }
})

export default ReviewsForm;