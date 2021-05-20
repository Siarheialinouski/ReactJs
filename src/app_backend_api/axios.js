import { API_BASE } from '../config/env'
const axios = require("axios");


const instance = axios.create({
  baseURL: API_BASE,
});

export default instance;
