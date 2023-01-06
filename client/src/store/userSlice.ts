import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {

        },

        logout: (state, action) => {

        }
    }
})

// export actions
export const {
    login,
    logout
} = userSlice.actions

// export reducer
export default userSlice.reducer