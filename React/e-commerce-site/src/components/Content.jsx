import React from 'react'

function Content() {
  return (
    <div>
      <div className="bg-[url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png')]"></div>
      <div className='bg-content-background'>
        <section className="py-32 max-w-[1200px] m-auto ">
          <div className="flex">
            <div>
              <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" ></img>
            </div>
            <div className="flex pl-20 flex-col">
              <div>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"></img>
              </div>
              <div>
                <h2 className="text-xl my-5">Best Quality Products</h2>
              </div>
              <div>
                <h1 className="text-6xl my-5">Join The Organic Movement!</h1>
              </div>
              <div className="mb-10">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
              <div>
                <button className="bg-lime-800 py-2 px-5 rounded-md text-white transition ease-in-out delay-75 hover:bg-lime-800/80">SHOP NOW</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Content;