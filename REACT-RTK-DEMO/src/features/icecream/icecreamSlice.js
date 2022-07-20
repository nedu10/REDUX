import {createSlice} from '@reduxjs/toolkit'
import {cakeActions} from '../cake/cakeSlice'

const INITIAL_STATE = {
    number_of_icecream: 10
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: INITIAL_STATE,
    reducers: {
        ordered: (state, action) => {
            state.number_of_icecream -= action.payload.qty
        },
        restocked: (state, action) => {
            state.number_of_icecream += action.payload.qty
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.number_of_icecream--
    //     }
    // }
    extraReducers: (builder) => { //redux tool kit require extrareducers to listen to actions it does not ceate.
        builder.addCase(cakeActions.ordered, state => {
            state.number_of_icecream -= 2
        })
    }
})

export default icecreamSlice.reducer
export const icecreamActions = icecreamSlice.actions
