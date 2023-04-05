import React from "react";
import * as SMS from 'expo-sms';

const VerificationSMS = async () => {
  const isAvailable = await SMS.isAvailableAsync();
  if (isAvailable) {
    console.log("This device is supported a sending SMS.")
    // ===Я отправляю смс выбранному пользователю===
    // const { result } = await SMS.sendSMSAsync(
    //   "9507716292",
    //   'Hello world!',
    //   {}
    // );
    // console.log(result)

  } else {
    console.log("This device is not supported.")
  }
}

export default VerificationSMS;
