import axios from "axios"
const becomeacollisiondasher = axios.create({
  baseURL: "https://tstcr2020092101-20512.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function becomeacollisiondasher_post_api_v1_signup_create(payload) {
  return becomeacollisiondasher.post(`/api/v1/signup`, payload.data)
}
export const apiService = { becomeacollisiondasher_post_api_v1_signup_create }
