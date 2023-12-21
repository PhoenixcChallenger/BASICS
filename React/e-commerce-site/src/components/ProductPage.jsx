// import React, { useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { products } from '../store-data/Allproduct';
import Footer from './Footer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { quantityAction } from '../features/addtocartSlice';
import { addtocartAction } from '../features/addtocartSlice';

const ProductPage = () => {
    const [value, setValue] = useState(1);

    const dispatch = useDispatch();
    const { id } = useParams();
    const thisProduct = products.find((prod) => prod.key === id);
    const productImg = require(`../images/products/${thisProduct.image}`);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleAddToCart = (e) => {
        e.preventDefault();
        if (thisProduct) {
            dispatch(quantityAction(value));
            dispatch(addtocartAction(thisProduct));
            setValue(1);
        }
    }
    return (
        <>
            <Header />
            <div className='bg-content-background'>
                <div className='flex m-auto max-w-[1240px] p-5'>
                    <div className='mt-8'>
                        <div className='flex'>
                            <div>
                                <img src={productImg} alt={`${thisProduct.name}`} className='h-[35rem] w-[35rem]' />
                            </div>
                            <div className='pl-10 w-1/2'>
                                <h1 className='font-merriweather font-bold text-3xl mb-4'>{thisProduct.name}</h1>
                                <div className='mb-3'>
                                    <h2 className='font-merriweather font-bold text-2xl inline'>£{thisProduct.price}</h2>
                                    <h3 className='inline'> + Free Shipping</h3>
                                </div>

                                <p className='mb-4'>{thisProduct.description}</p>

                                <form onSubmit={handleAddToCart}>
                                    <div className=' inline'>
                                        <label htmlFor={`quantity_${thisProduct.key}`}></label>
                                        <input
                                            type="number"
                                            id={`quantity_${thisProduct.key}`}
                                            name='quantity'
                                            autoComplete='off'
                                            className='w-14 p-2 mr-12'
                                            value={value}
                                            min={1}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        name='add_to_cart'
                                        className='w-64 p-2 rounded-lg bg-[#6a9739] text-white inline hover:bg-[#8bc34a]'>
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductPage