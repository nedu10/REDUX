import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {cakeActions} from './cakeSlice'

export const CakeView = () => {
  const cakeValue = useSelector(state => {
    return state.cake.number_of_cakes})
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of cakes - {cakeValue}</h2>
      <button onClick={() => dispatch(cakeActions.ordered({qty: 1}))}>Order Cake</button>
      <button onClick={() => dispatch(cakeActions.restocked({qty: 5}))}>Restock Cakes</button>
    </div>
  )
}