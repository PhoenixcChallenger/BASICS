import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isVisibleAction } from '../features/addtocartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.addtocart.IsVisible);
  const cartItems = useSelector((state) => state.addtocart.items);
  // const totalQuantity = useSelector((state) => state.addtocart.totalQuantity);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  return (
    <div id="slideover-container" className={`w-full h-full fixed inset-0 z-50 ${isVisible ? '' : 'invisible'}`}>
      <div onClick={() => dispatch(isVisibleAction(false))} id="slideover-bg" className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-950 ${isVisible ? 'opacity-40' : 'opacity-0'}`}>
      </div>
      <div id="slideover" className={`w-[35rem] bg-white h-full absolute right-0 duration-300 ease-out transition-all overflow-y-auto ${isVisible ? '' : 'translate-x-full'}`}>
        <div className='flex w-full justify-between pt-4 pb-3 px-4 border-b-2'>
          <div>
            <p>Shopping Cart</p>
          </div>
          <div onClick={() => dispatch(isVisibleAction(false))} className="cursor-pointer text-gray-600 flex items-center justify-center w-8 h-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        </div>
        <div>
          {
            cartItems ? (cartItems.map((item) => {
              return (<>
                <div className='flex p-4'>
                  <img src={require(`../images/products/${item.image}`)} alt={`${item.name}`} className='h-32 w-32' />
                  <div className='m-10'>
                    <h1>{item.name}</h1>
                    <p>£{item.price} x {item.quantity}</p>
                  </div>
                </div>
              </>)
            })) : (null)
          }
        </div>
      </div>

    </div>
  )
}

export default Cart