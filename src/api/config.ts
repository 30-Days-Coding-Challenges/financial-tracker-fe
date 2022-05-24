import axios from "axios"
export const baseUrl = "htpp://localhost:8080/v1"

export const defautlHeader = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Header": "*"
  },
})