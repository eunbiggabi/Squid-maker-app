import axios from "axios";

const squidMakerAPI = axios.create({
  baseURL: 'http://localhost:3000'
})

export default squidMakerAPI;