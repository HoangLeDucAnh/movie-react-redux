import { createSlice } from "@reduxjs/toolkit";
// khởi tạo giá trị default cho state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
};
//state được gán bằng initialState
//không cần phải return state mới như redux cũ
const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default userReducer.reducer;
export let { setUser } = userReducer.actions;
