import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isVisibleAction, removefromcartAction, totalQuantityAction } from '../features/addtocartSlice';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Cart = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.addtocart.IsVisible);
  const cartItems = useSelector((state) => state.addtocart.items);
  // const totalQuantity = useSelector((state) => state.addtocart.totalQuantity);
  let sum = 0;

  cartItems.map((item) => {
    return (sum += (item.price * item.quantity));
  })

  function removeItem(key, quantity) {
    console.log(key);
    dispatch(removefromcartAction(key));
    dispatch(totalQuantityAction(-quantity));
  }
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
      <div id="slideover" className={`flex flex-col w-full md:w-[35rem] bg-white h-full absolute right-0 duration-300 ease-out transition-all overflow-y-auto ${isVisible ? '' : 'translate-x-full'} ${cartItems.length === 0 && "justify-between items-center"}`}>
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
        {
          cartItems.length === 0 && (<div>
            <h1 className=''>No products in the cart.</h1>
          </div>)
        }
        {
          cartItems.length === 0 && (

            <div className=" w-3/4 mt-4 mb-4" onClick={() => dispatch(isVisibleAction(false))}>
              <Link to="/product-category/shop">
                <button className="flex justify-center w-full text-white font-medium bg-[#6a9739] py-3 px-5 rounded-md cursor-pointer hover:bg-[#8bc34a] transition ease-linear delay-100">
                  CONTINUE SHOPPING
                </button>
              </Link>
            </div>
          )
        }
        {
          cartItems.length > 0 && (
            <div className='flex flex-col max-h-screen overflow-y-auto pb-[14rem]'>
              {cartItems.map((item) => {
                return (
                  <React.Fragment key={item.key}>
                    <div className='flex items-center justify-between border-b-2 shadow-sm'>
                      <div className='flex p-4' key={item.key}>
                        <img src={require(`../images/products/${item.image}`)} alt={`${item.name}`} className='h-32 w-32' />
                        <div className='m-10'>
                          <h1>{item.name}</h1>
                          <p>£{item.price} x {item.quantity}</p>
                        </div>
                      </div>
                      <div className='mr-10 cursor-pointer' onClick={() => removeItem(item.key, item.quantity)}>
                        <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{ color: "#d9d9d9" }} />
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          )}
        {
          cartItems.length > 0 && (
            <div className='flex flex-col fixed w-full md:w-[35rem] h-[14rem] bottom-0 bg-content-background'>
              <div className='flex justify-between p-4 border-y-2'>
                <p>Subtotal:</p>
                <p>£{sum}.00</p>
              </div>
              <div className='p-4' onClick={() => dispatch(isVisibleAction(false))}>
                <Link to="/cart">
                  <button className="flex w-full justify-center bg-[#6a9739] py-3 px-5 rounded-md cursor-pointer hover:bg-[#8bc34a] transition ease-linear delay-100 text-white font-medium">
                    VIEW CART
                  </button>
                </Link>
              </div>
              <div className='p-4' onClick={() => dispatch(isVisibleAction(false))}>
                <Link to="/checkout">
                  <button className="flex w-full justify-center bg-[#6a9739] py-3 px-5 rounded-md cursor-pointer hover:bg-[#8bc34a] transition ease-linear delay-100 text-white font-medium">
                    CHECKOUT
                  </button>
                </Link>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default Cart