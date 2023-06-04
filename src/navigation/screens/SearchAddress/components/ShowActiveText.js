import React from "react";
import {ShowBtnLocation} from "./ShowBtnLocation";


export default function ShowActiveText({ locationTitle, location, defaultLocationTitle }) {
  if (location !== "") {
    return <ShowBtnLocation text={`${locationTitle}: ${location}`} />
  } else {
    return <ShowBtnLocation text={defaultLocationTitle} />
  }
}