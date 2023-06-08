import React from "react";
import {ShowBtnLocation} from "./ShowBtnLocation";


export default function ShowActiveText({ locationTitle, location, defaultLocationTitle, typeLocation }) {
  return (
    <ShowBtnLocation
      defaultText={defaultLocationTitle}
      typeLocationProps={typeLocation}
      text={location !== "" ? `${locationTitle}: ${location}` : defaultLocationTitle}
    />
  )
}