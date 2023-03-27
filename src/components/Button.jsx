import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteall } from '../Redux/action';

const Button = () => {
  const dispatch = useDispatch();
  return (
    <div>
       <button className="btn" onClick={()=> dispatch(deleteall())}>Remove All</button>
    </div>
  )
}

export default Button
