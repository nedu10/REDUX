import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

const INITIAL_STATE = {
    loading: true,
    data: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get("https://jsonplaceholder.typicode.com/users").then(res => res.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    extraReducers: (builder) => { //redux tool kit require extrareducers to listen to actions it does not ceate.
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, actions) => {
            state.loading = false,
            state.data = actions.payload,
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, actions) => {
            state.loading = false,
            state.data = [],
            state.error = actions.payload
        })
    }
})

export default userSlice.reducer