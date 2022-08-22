import axios from "axios";

export async function fetchCategories() {
  return axios.get("Category");
}
