import { createApi } from "unsplash-js";
import config from "./config";

const browserApi = createApi({
  apiUrl: 'http://localhost:3000/unsplash-proxy'
})

const unsplash = createApi({
  accessKey: config.unsplash.apiKey
})