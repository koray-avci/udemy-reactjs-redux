import React from "react";
import { useSelector,useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import {clearCart} from '../control/cartSlice'

const CourseList = () => {
  const { quantity, cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch()

  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
            <h4>Bomboş</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                toplam tutar <span>{total} TL</span>
              </h4>
            </div>
            <button className="cartClearBtn" onClick={() => dispatch(clearCart())}>Temizle</button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
