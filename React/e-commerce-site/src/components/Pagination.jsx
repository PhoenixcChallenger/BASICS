import { useSelector, useDispatch } from 'react-redux';
import { nextPage, prevPage, setCurrentPage } from '../features/paginationSlice';
import { useEffect, useState } from 'react';

const Pagination = (props) => {
    const products = props.products;
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        let newPageCount = 1;
        const x = products.length;
        if (x % 9 === 0) {
            newPageCount = x / 9;
        } else {
            newPageCount = Math.floor(x / 9) + 1;
        }
        setPageCount(newPageCount);
        dispatch(setCurrentPage(1));
    }, [products, dispatch])

    return (
        <>
            <div className='flex items-center my-10'>
                {currentPage === 1 ? (
                    <button className='px-3 py-2 m-2 border-[1px] border-gray-400 text-gray-400' disabled>
                        ←
                    </button>
                ) : (
                    <button
                        onClick={() => dispatch(prevPage())}
                        className='px-3 py-2 m-2 border-[1px] border-nature-green text-nature-green hover:bg-nature-green hover:text-white transition-colors'
                    >
                        ←
                    </button>
                )}
                <div className='text-[#8bc34a]'>
                    Page {currentPage} of {pageCount}
                </div>
                {currentPage === pageCount ? (
                    <button className='px-3 py-2 m-2 border-[1px] border-gray-400 text-gray-400' disabled>
                        →
                    </button>
                ) : (
                    <button
                        onClick={() => dispatch(nextPage())}
                        className='px-3 py-2 m-2 border-[1px] border-nature-green text-nature-green hover:bg-nature-green hover:text-white transition-colors'
                    >
                        →
                    </button>
                )}
            </div>
        </>
    );
};

export default Pagination;
