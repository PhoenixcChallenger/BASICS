import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { removefromcartAction, totalQuantityAction, updateItemCart } from '../features/addtocartSlice';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.addtocart.items);
    const handleChange = (e, key) => {
        console.log(parseInt(e.target.value));
        dispatch(updateItemCart({ key: key, quantity: e.target.value }));
    }
    function removeItem(key, quantity) {
        console.log(key);
        dispatch(removefromcartAction(key));
        dispatch(totalQuantityAction(-quantity));
    }
    let sum = 0;
    cartItems.map((item) => {
        return (sum += (item.price * item.quantity));
    })
    return (
        <div>
            <Header />
            <div className='bg-content-background'>
                <div className='flex flex-col max-w-[1200px] mx-auto pt-20'>
                    <div>
                        <h1 className='font-merriweather text-3xl font-semibold mb-4'>Cart</h1>
                    </div>
                    <div>
                        {
                            cartItems.length > 0 && (
                                <table className='w-full border-collapse border border-gray-200 mb-10'>
                                    <thead className='bg-white'>
                                        <tr>
                                            <th className='border-b border-slate-200 py-2'></th>
                                            <th className='border-b border-slate-200 py-2'></th>
                                            <th className='border-b border-slate-200 py-2'>Product</th>
                                            <th className='border-b border-slate-200 py-2'>Price</th>
                                            <th className='border-b border-slate-200 py-2'>Quantity</th>
                                            <th className='border-b border-slate-200 py-2'>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((item) => {
                                                return (<React.Fragment key={item.key}>
                                                    <tr>
                                                        <td className='border-b border-slate-300'>
                                                            <div className='cursor-pointer flex justify-center' onClick={() => removeItem(item.key, item.quantity)}>
                                                                <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{ color: "#d9d9d9" }} />
                                                            </div>
                                                        </td>
                                                        <td className='border-b border-slate-300'>
                                                            <div className='flex justify-center'>
                                                                <img src={require(`../images/products 300 x 300/${item.smallimage}`)} alt="itemImage" className='h-32 w-32 p-4' />
                                                            </div>
                                                        </td>
                                                        <td className='border-b border-slate-300'>
                                                            <div className='flex justify-center text-nature-green'>
                                                                <p>{item.name}</p>
                                                            </div>
                                                        </td>
                                                        <td className='border-b border-slate-300'>
                                                            <div className='flex justify-center'>
                                                                <p>£{item.price}</p>
                                                            </div>
                                                        </td>
                                                        <td className='border-b border-slate-300'>
                                                            <div className='flex justify-center'>
                                                                <form>
                                                                    <input
                                                                        type="number"
                                                                        name="qunatity"
                                                                        value={item.quantity}
                                                                        min={1}
                                                                        className='w-10 text-center'
                                                                        onChange={(e) => handleChange(e, item.key)}
                                                                    />
                                                                </form>
                                                            </div>
                                                        </td>
                                                        <td className='border-b border-slate-300'>
                                                            <div className='flex justify-center'>
                                                                £{item.price * item.quantity}.00
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </React.Fragment>)
                                            })
                                        }
                                    </tbody>
                                </table>
                            )
                        }
                        {
                            cartItems.length === 0 && (
                                <>
                                    <div className='border border-y-nature-green border-x-0'>
                                        <p className='p-4'>Your cart is currently empty</p>
                                    </div>
                                    <div className='mt-4'>
                                        <Link to="/product-category/shop">
                                            <button className="flex mb-20 justify-center bg-[#6a9739] py-3 px-5 rounded-md cursor-pointer hover:bg-[#8bc34a] transition ease-linear delay-100 text-white font-medium">
                                                RETURN TO SHOP
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            )
                        }

                    </div>
                    {
                        cartItems.length > 0 && (<div className='flex flex-row-reverse mb-20'>
                            <div className='w-1/2 border border-slate-300'>
                                <div className='bg-white'>
                                    <h1 className='text-2xl font-merriweather py-3 pl-6 mb-4'>Cart totals</h1>
                                </div>
                                <div className='px-10 pt-6'>
                                    <table className='w-full'>
                                        <tbody className='border-collapse'>
                                            <tr>
                                                <th className='font-normal text-left p-2 w-[40%4 border-b border-slate-300'>Subtotal</th>
                                                <td className='p-4 border-b border-slate-300'>£{sum}.00</td>
                                            </tr>
                                            <tr>
                                                <th className='font-normal text-left p-4 border-b border-slate-300'>Total</th>
                                                <td className='p-4 border-b border-slate-300'>£{sum}.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='p-4 mt-6'>
                                    <Link to="/checkout">
                                        <button className="flex w-full justify-center bg-[#6a9739] py-3 px-5 rounded-md cursor-pointer hover:bg-[#8bc34a] transition ease-linear delay-100 text-white font-medium">
                                            PROCEED TO CKECKOUT
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartPage