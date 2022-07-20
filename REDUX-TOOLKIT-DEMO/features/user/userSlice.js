const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')
const axios = require("axios")

const INITIAL_STATE = {
    loading: true,
    data: [],
    error: ''
}

const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get("https://jsonplaceholder.typicode.com/users").then(res => res.data.map(user => user.id))
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

module.exports = {
    userReducer: userSlice.reducer,
    userActions: userSlice.actions,
    fetchUsers: fetchUsers
}