import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isVisibleMobileAction } from '../features/addtocartSlice';
import { Link } from 'react-router-dom';

const MobNav = () => {
    const dispatch = useDispatch();
    const isMobVisible = useSelector((state) => state.addtocart.IsMobVisible);

    useEffect(() => {
        if (isMobVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobVisible]);
    return (
        <div id="slideover-container" className={`w-full h-full fixed inset-0 z-50 ${isMobVisible ? '' : 'invisible'}`}>
            <div onClick={() => dispatch(isVisibleMobileAction(false))} id="slideover-bg" className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-950 ${isMobVisible ? 'opacity-40' : 'opacity-0'}`}>
            </div>
            <div id="slideover" className={`w-[23rem] bg-white h-full absolute right-0 duration-300 ease-out transition-all overflow-y-auto ${isMobVisible ? '' : 'translate-x-full'}`}>
                <div className='flex w-full justify-end pt-4 pb-3 px-4'>
                    <div onClick={() => dispatch(isVisibleMobileAction(false))} className="cursor-pointer text-gray-600 flex items-center justify-center  h-8">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col' onClick={() => dispatch(isVisibleMobileAction(false))}>
                    <div className='py-4 pl-6 mt-4'>
                        <a href="/login">
                            <img
                                src={require("../images/user.png")}
                                className="h-5 w-5"
                                alt=""
                            ></img>
                        </a>
                    </div>
                    <div className='py-4 border-t-2 pl-6' onClick={() => dispatch(isVisibleMobileAction(false))}>
                        <Link to="/product-category/shop">Everything</Link>
                    </div>
                    <div className='py-4 border-t-2 pl-6' onClick={() => dispatch(isVisibleMobileAction(false))}>
                        <Link to="/product-category/grocery">Groceries</Link>
                    </div>
                    <div className='py-4 border-t-2 pl-6' onClick={() => dispatch(isVisibleMobileAction(false))}>
                        <Link to="/product-category/juice">Juice</Link>
                    </div>
                    <div className='py-4 border-t-2 pl-6' onClick={() => dispatch(isVisibleMobileAction(false))}>
                        <Link to="/about">About</Link>
                    </div>
                    <div className='py-4 border-y-2 pl-6' onClick={() => dispatch(isVisibleMobileAction(false))}>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MobNav