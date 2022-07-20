import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    number_of_cakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: INITIAL_STATE,
    reducers: {
        ordered: (state, action) => {
            state.number_of_cakes -= action.payload.qty
        },
        restocked: (state, action) => {
            state.number_of_cakes += action.payload.qty
        },
    }
})

export default cakeSlice.reducer
export const cakeActions = cakeSlice.actions
