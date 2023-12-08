import { SET_USER } from "../constant/constant";

// khởi tạo giá trị default cho state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
};
//state được gán bằng initialState
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      state.user = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
