import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {icecreamActions} from './icecreamSlice'

export const IcecreamView = () => {

    const icecreamValiue = useSelector(state => {
        return state.icecream.number_of_icecream})
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)

  return (
    <div>
      <h2>Number of ice creams - {icecreamValiue}</h2>
      <button onClick={() => dispatch(icecreamActions.ordered({qty: 1}))}>Order Ice cream</button>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(icecreamActions.restocked({qty: +value}))}>
        Restock Ice creams
      </button>
    </div>
  )
}