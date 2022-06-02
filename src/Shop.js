import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators } from './actions/index';
import { useSelector } from 'react-redux';
export default function Shop() {
const dispatch = useDispatch();
const {depositMoney , withdrawMoney} = bindActionCreators(actionCreators, dispatch);

const amount = useSelector(state=> state.amount)
  return (
    <div className='container'> 
<h1> Deposit / Withdraw Money </h1>

{/* <button className='btn btn-primary'
onClick={()=> dispatch(actionCreators.depositMoney(100))}> + </button> */}
<button className='btn btn-primary'
onClick={()=> depositMoney(100)}> + </button>

Update Balance  {amount}
<button className='btn btn-primary'
onClick = {()=> withdrawMoney(100)}> - </button>
    </div>
  )
}
