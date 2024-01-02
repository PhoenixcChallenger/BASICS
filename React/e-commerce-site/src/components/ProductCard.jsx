import React from 'react'

const ProductCard = (props) => {
  return (
    <>
      <div className='flex flex-col'>
        <img src={require(`../images/products 300 x 300/${props.smallimage}`)} className="object-cover max-h-[24rem] max-w-[24rem] h-auto w-auto" alt='product'></img>
        <div className='flex items-center flex-col'>
          <p>{props.title}</p>
          <p className='font-medium text-lg'>{props.name}</p>
          <p>✰✰✰✰✰</p>
          <p className='font-medium'>£{props.price}</p>
        </div>
      </div>
    </>
  )
}

export default ProductCard