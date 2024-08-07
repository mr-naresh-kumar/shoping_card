import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {NavLink } from 'react-router-dom';
import Cartitem from '../components/Cartitem';

const Cart = () => {

  const {cart} = useSelector((state)=>state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr)=>acc+curr.price,0));
  }, [cart])

  return  (
    <div className="mt-28">
      {cart.length > 0 ? (
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => (
              <Cartitem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5 flex flex-col p-2">
            <div className="flex flex-col p-5 my-14 h-[100%] justify-between">
              <div className="flex flex-col gap-5">
                <div className="font-semibold text-xl text-green-800">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700 -mt-5">
                  Summary
                </div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">
                    Total Items: {cart.length}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">
                  Total Amount: {""}
                </span>
                ${Math.round(totalAmount * 100) / 100}
              </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col gap-y-4 justify-center items-center text-lg font-semibold">
          <p>Your cart is empty</p>
          <NavLink
            to="/"
            className="bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Go to Home
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;