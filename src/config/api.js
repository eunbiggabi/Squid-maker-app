import axios from "axios";

const squidMakerAPI = axios.create({
  baseURL: 'https://kyusquid-api.herokuapp.com'
})

export default squidMakerAPI;