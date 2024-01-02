import React, { useState } from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer'
import FormCheckout from '../components/FormCheckout';
const Checkout = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const cartItems = useSelector((state) => state.addtocart.items);
    let sum = 0;
    cartItems.map((item) => {
        return (sum += (item.price * item.quantity));
    })
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div>
            <Header />
            <div className='bg-content-background'>
                <div className=' max-w-[1200px] lg:mx-auto pt-20 pb-32'>
                    <div>
                        <h1 className='text-3xl font-merriweather font-semibold mb-10 ml-6'>Checkout</h1>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between w-full'>
                        <div className='flex flex-col lg:w-[60%] lg:pr-20'>
                            <div className='mx-6'>
                                <h2 className='text-xl font-merriweather pb-4 border-b-2 font-bold'>Billing details</h2>
                            </div>
                            <div>
                                <FormCheckout />
                            </div>
                            <div className='mx-6'>
                                <div className='text-xl font-merriweather pb-4 border-b-2 font-bold'>
                                    Additional Information
                                </div>
                                <div>
                                    <form htmlFor="additional">
                                        <div className='my-4 '>
                                            <div>
                                                <label htmlFor="additional">Order notes (optional)</label>
                                            </div>
                                            <div>
                                                <textarea
                                                    id='additional'
                                                    name='additional'
                                                    className='p-2 mt-2 w-full' />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[40%] border-2 p-10 m-6 '>
                            <h2 className='text-xl font-merriweather font-bold mb-10'>Your Order</h2>
                            <div>
                                <div className='flex justify-between font-bold py-4 border-b-2'>
                                    <p>Product</p>
                                    <p>Subtotal</p>
                                </div>
                                {
                                    cartItems.map((item) => {
                                        return (
                                            <React.Fragment key={item.key}>
                                                <div className='flex justify-between py-4 border-b-2'>
                                                    <p>{item.name} x {item.quantity}</p>
                                                    <p>£{item.price * item.quantity}.00</p>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                <div className='flex justify-between py-4 border-b-2'>
                                    <p>Subtotal</p>
                                    <p>£{sum}.00</p>
                                </div>
                                <div className='flex justify-between py-4 border-b-2'>
                                    <p>Total</p>
                                    <p>£{sum}.00</p>
                                </div>
                                <div>
                                    <div className="flex flex-col space-y-4 mt-4">
                                        <div>
                                            <input
                                                type="radio"
                                                id="check"
                                                name="paymentMethod"
                                                value="check"
                                                onChange={handleRadioChange}
                                                className="mr-2"
                                            />
                                            <label htmlFor="check">Check payments</label>
                                            {selectedOption === 'check' && (
                                                <div>
                                                    <div className='ml-8 -mb-[10px]'>
                                                        <FontAwesomeIcon icon={faCaretUp} size="2xl" style={{ color: "#e5e7eb", }} />
                                                    </div>
                                                    <div className='bg-gray-200 p-4'>
                                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                id="cash"
                                                name="paymentMethod"
                                                value="cash"
                                                onChange={handleRadioChange}
                                                className="mr-2"
                                            />
                                            <label htmlFor="cash">Cash on delivery</label>
                                            {selectedOption === 'cash' && (
                                                <div>
                                                    <div className='ml-8 -mb-[10px]'>
                                                        <FontAwesomeIcon icon={faCaretUp} size="2xl" style={{ color: "#e5e7eb", }} />
                                                    </div>
                                                    <div className='bg-gray-200 p-4'>
                                                        <p>Pay with cash upon delivery.</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='p-4 mt-6'>
                                    <Link to="/checkout">
                                        <button className="flex w-full justify-center bg-[#6a9739] py-3 px-5 rounded-md cursor-pointer hover:bg-[#8bc34a] transition ease-linear delay-100 text-white font-medium">
                                            PLACE ORDER
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout