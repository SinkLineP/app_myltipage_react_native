import axios from "axios";

export const HOST = "https://576e-85-174-204-121.eu.ngrok.io";

const categories = axios.get(HOST)
  .then((response) => {
    return response.data;
  }).catch(error => console.log(error));

