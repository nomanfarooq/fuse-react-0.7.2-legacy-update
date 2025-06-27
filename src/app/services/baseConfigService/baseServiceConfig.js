import axios from 'axios';

export const PRODUCTION = "production";
export const DEVELOPMENT = "development";

const SESSION_AUTH_TOKEN = `Bearer ${sessionStorage.getItem(
  "jwt_access_token"
)}`;
const STORAGE_AUTH_TOKEN = `Bearer ${localStorage.getItem("jwt_access_token")}`;

const AUTH_TOKEN = !!SESSION_AUTH_TOKEN
  ? SESSION_AUTH_TOKEN
  : STORAGE_AUTH_TOKEN;

const BASE_CONFIG = {
  baseEnv: import.meta.env.MODE,
  baseUrl: (axios.defaults.baseURL =
    import.meta.env.MODE !== PRODUCTION ? "http://localhost:3000" : "http://localhost:3000"),
  baseContent: (axios.defaults.headers.common["Content-Type"] =
    "application/json"),
  baseClient: (axios.defaults.headers.common["Client-Type"] = "web"),
  baseAuth: (axios.defaults.headers.common["Authorization"] = AUTH_TOKEN),
};

export default BASE_CONFIG;
