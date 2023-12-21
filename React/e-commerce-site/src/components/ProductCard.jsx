import React from 'react'

const ProductCard = (props) => {
  return (
    <>
      <div className='flex flex-col'>
        <img src={require(`../images/products/${props.image}`)} className="object-cover h-[18rem] w-[18rem]" alt='product'></img>
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