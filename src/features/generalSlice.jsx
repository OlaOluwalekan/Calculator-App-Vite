import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'theme1',
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleTheme: (state, { payload }) => {
      state.theme = payload
    },
  },
})

export const { toggleTheme } = generalSlice.actions

export default generalSlice.reducer
