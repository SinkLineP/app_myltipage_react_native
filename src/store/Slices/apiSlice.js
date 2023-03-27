import React, {useState} from "react";
import axios from "axios";
import {DOMAIN_SERVER} from "../../Variables/ServerConfig";


export default function Pokemon() {
  const [data, setData] = useState([]);
  axios.get(DOMAIN_SERVER).then(
    response => console.log(response.data)
  )


}