import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const becomeacollisiondasher_post_api_v1_signup_create = createAsyncThunk(
  "becomeacollisiondasher_response_post_Signups/becomeacollisiondasher_post_api_v1_signup_create",
  async payload => {
    const response = await apiService.becomeacollisiondasher_post_api_v1_signup_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const becomeacollisiondasher_response_post_SignupsSlice = createSlice({
  name: "becomeacollisiondasher_response_post_Signups",
  initialState,
  reducers: {},
  extraReducers: {
    [becomeacollisiondasher_post_api_v1_signup_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [becomeacollisiondasher_post_api_v1_signup_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [becomeacollisiondasher_post_api_v1_signup_create.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  becomeacollisiondasher_post_api_v1_signup_create,
  slice: becomeacollisiondasher_response_post_SignupsSlice
}
