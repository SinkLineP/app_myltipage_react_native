import React from "react";
import {ShowBtnLocation} from "./ShowBtnLocation";


export default function ShowActiveText({ locationTitle, location, defaultLocationTitle, typeLocation }) {
  if (location !== "") {
    return <ShowBtnLocation defaultText={defaultLocationTitle} typeLocationProps={typeLocation} text={`${locationTitle}: ${location}`} />
  } else {
    return <ShowBtnLocation defaultText={defaultLocationTitle} typeLocationProps={typeLocation} text={defaultLocationTitle} />
  }
}