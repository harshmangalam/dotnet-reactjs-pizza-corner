import axios from "axios";

export async function fetchCategories() {
  return axios.get("Category");
}


export async function fetchCategory(categoryId) {
  return axios.get(`Category/${categoryId}`);
}
