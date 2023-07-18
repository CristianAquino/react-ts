import { createSlice } from "@reduxjs/toolkit";

export interface User {
  user: string;
  email: string;
}
const userEmptyState: User = {
  user: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: userEmptyState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return userEmptyState;
    },
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
