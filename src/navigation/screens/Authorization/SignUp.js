import React, {useEffect, useState} from "react";
import {Alert, BackHandler, ScrollView, StyleSheet} from "react-native";
import {Formik} from "formik";
import EmailAndPassword from "./PagesSignUp/EmailAndPassword";
import ConfirmPhone from "./PagesSignUp/ConfirmPhone";
import AboutUser from "./PagesSignUp/AboutUser";
import {acceptPhoneSchema, SignUpSchema, aboutUser} from "./Schematics/Schematics";


export default function SignUp({navigation, btnTitle, changeForm}) {
  // const createUser = {
  //   username: "",
  //   mail: "",
  //   phone: "",
  //   lastname: "",
  //   firstname: "",
  //   surname: "",
  //   password: "",
  //   age: "",
  //   avatar: ""
  // }
  const [page, setPage] = useState(1);

  if (page === 1) {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, {resetForm}) => {
          // if (values.email && values.confirmPassword && values.password !== "") {
          //   // createUser({
          //   //   username: "",
          //   //   mail: values.email,
          //   //   phone: "",
          //   //   lastname: "",
          //   //   firstname: "",
          //   //   surname: "",
          //   //   password: values.password,
          //   //   age: "",
          //   //   avatar: ""
          //   // }).then(r => r)
          //   resetForm({values: ""})
          // }

          const {
            username,
            mail,
            phone,
            lastname,
            firstname,
            surname,
            password,
            age,
            // avatar
          } = values;
          if (
            username !== "" &&
            mail !== "" &&
            phone !== "" &&
            lastname !== "" &&
            firstname !== "" &&
            surname !== "" &&
            password !== "" &&
            age !== ""
          ) {
            console.log(values)
          }
        }}
      >
        {(props) => (
          <EmailAndPassword page={page} changeForm={changeForm} setPage={setPage} props={props} SignUpStyles={SignUpStyles} />
        )}
      </Formik>
    )
  } else if (page === 2) {
    return (
      <Formik
        initialValues={{
          phone: ""
        }}
        validationSchema={acceptPhoneSchema}
        onSubmit={(values, {resetForm}) => {
          if (values.phone !== "") {
            console.log(values)
          }
        }}
      >
        {(props) => (
          <ConfirmPhone page={page} changeForm={changeForm} SignUpStyles={SignUpStyles} setPage={setPage} props={props} />
        )}

      </Formik>
    )
  } else if (page === 3) {
    return (
      <Formik
        initialValues={{
          phone: ""
        }}
        validationSchema={aboutUser}
        onSubmit={(values, {resetForm}) => {
          if (values.phone !== "") {
            console.log(values)
          }
        }}
      >
        {(props) => (
          <AboutUser SignUpStyles={SignUpStyles} changeForm={changeForm} setPage={setPage} page={page} btnTitle={btnTitle} props={props} />
        )}
      </Formik>
    )
  }
}


const SignUpStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    borderColor: "#048f9d",
    width: "auto",
    padding: 10,
    marginBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#404040",
    fontWeight: "bold",
    textDecorationLine: "none"
  },
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    flex: 1
  },
  auth: {
    color: "#404040",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  link: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#048f9d"
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: "#048f9d",
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  },
  error: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    color: "#048f9d",
    fontWeight: "bold"
  },
  notActive: {
    padding: 10,
    backgroundColor: "#91bdc6",
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  }
})