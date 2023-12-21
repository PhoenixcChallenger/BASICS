import React from 'react'
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPageCount } from '../features/paginationSlice';

const ProductsContainer = (props) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.pagination.currentPage)
    const allProducts = props.products;

    const pageProducts = allProducts.slice((currentPage - 1) * 9, currentPage * 9);
    return (
        <>
            <div className="mt-16 pl-[3.75rem]">
                <div className="mb-10">
                    <div><Link to='/' onClick={dispatch(setPageCount(1))}>Home</Link>/{props.heading}</div>
                </div>
                <div className='mb-10'>
                    <h3 className='text-5xl text-[#8BC34A] font-merriweather font-bold'>{props.heading}</h3>
                </div>
                <div>
                    {props.desc}
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {pageProducts.map((product) => {
                        return (<>
                            <div>
                                <Link to={`/product/${product.key}`}>
                                    <ProductCard {...product} />
                                </Link>
                            </div>
                        </>
                        )
                    })}
                </div>
                <div>
                    <Pagination products={allProducts} />
                </div>
            </div>

        </>
    )
}

export default ProductsContainer