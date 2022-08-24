import axios from "axios";

const ENDPOINT = "http://localhost:4000/api"
export async function fetchPizza() {
  return axios.get(`${ENDPOINT}/pizza`);
}
