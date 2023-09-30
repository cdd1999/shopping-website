import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-cc0c3/us-central1/api",
  //the api(cloud function) url
});
export default instance;

//prefer axios over js fetch api because its easier to use
