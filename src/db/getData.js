import axios from "axios";
import {HOST} from "../../Variables";

export default function getData() {
  axios.get(HOST)
    .then((response) => {
      response.data.categories.map((item, index, key) => {
        console.log(item)
      })
      // JSON.parse(response.data.categories)
    }).catch(error => console.log(error));



}