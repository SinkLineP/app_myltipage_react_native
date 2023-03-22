import axios from "axios";
import {DOMAIN_SERVER, HTTP} from "../Variables/ServerConfig";

export default function getData() {
  return axios.get(`${HTTP}://${DOMAIN_SERVER}`)
    .then((response) => {
      const array = [];
      response.data.categories.map((item) => {
        array.push(item);
      })
      return array;
    }).catch(error => console.log(error));
}