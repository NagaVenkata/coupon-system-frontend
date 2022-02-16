import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function User() {
    const dispatch = useDispatch(); //create receipe in dispatch hook

    //get state from store + subscribe on that state, useSelector forces a re-render -> const user = always new value, dvs state.user
    const user = useSelector(state => state.user);

  return (
    <div>Hello {user}</div>
  )
};