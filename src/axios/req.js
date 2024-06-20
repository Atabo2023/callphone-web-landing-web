import axios from "axios";
import { AppConfig } from "../config";

const req = axios.create({
  baseURL: AppConfig.baseUrl,
});

export default req;
