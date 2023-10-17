import React from 'react'
import {BsChevronUp,BsChevronDown} from 'react-icons/bs'
import { useDispatch } from "react-redux";
import {removeItem,increase,decrease} from '../control/cartSlice'

const CourseItem = ({id,title,price,img,quantity}) => {
    const dispatch = useDispatch()
  return (
    <div className='cartItem'>
        <img src={img} alt="" />
        <div className='cartInfo'>
            <h4>{title}</h4>
            <h4>{price} TL</h4>
            <div>
                <button className='upBtn' onClick={() => dispatch(increase(id))} >
                    <BsChevronUp />
                </button>
                <p className='quantity'>{quantity}</p>
                <button className='downBtn' onClick={() => dispatch(decrease(id))}>
                    <BsChevronDown />
                </button>
            </div>
        <button className='dltBtn' onClick={() => dispatch(removeItem(id))}>Sil</button>
        </div>
    </div>
  )
}

export default CourseItem
