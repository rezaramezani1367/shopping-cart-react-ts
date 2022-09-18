import React,{useEffect,} from 'react';
import { useSelector,useDispatch } from "react-redux";
import { getData } from '../redux/action';

const Store = () => {
  const data=useSelector(last=>last);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getData());
  }, [])
  
  console.log(data)
  return (
    <div>Store</div>
  )
}

export default Store