import axios from "axios";

const instance = axios.create({
  baseURL: 'https://us-central1-clone-9b302.cloudfunctions.net/api' // where we have the API url
})

export default instance