import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slideshow from '../components/SlideShow/Slideshow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {

  const [count1, setCount1] = useState(4800);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const curated1 = 5000;
    const curated2 = 800;
    const proCat = 40;

    const timer = setInterval(() => {
      setCount1((count) => Math.min(count + 5, curated1));
      setCount2((count) => Math.min(count + 20, curated2));
      setCount3((count) => Math.min(count + 1, proCat));

      if (count1 >= curated1 && count2 >= curated2 && count3 >= proCat) {
        clearInterval(timer);
      }
    }, 35);

    return () => {
      clearInterval(timer);
    };
  }, [count1, count2, count3]);

  return (
    <>
      <Header background={"#F8F6F3"} aboutColor={"#8BC34A"} />
      <div className='flex justify-center bg-content-background h-60'>
        <div className='text-3xl md:text-5xl font-merriweather mt-20 font-bold h-3'>About Us</div>
      </div>
      <div className="flex justify-center">
        <img src={require('../images/basil-leaf.png')} alt="basil" className='w-32 md:w-40 mt-[-28px] pb-[8px]'></img>
      </div>
      <div className='flex flex-col md:flex-row max-w-[1200px] m-auto py-10 sm:py-15 lg:py-32 items-center'>
        <div className='md:pr-20 flex flex-col justify-center p-4'>
          <h1 className='font-bold text-2xl md:text-4xl font-merriweather mb-6'>We Are Your Favourite Store.</h1>

          <p className='text-[#333333] mb-4'>Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.</p>

          <p className='text-[#333333]'>Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
        </div>
        <img src={require('../images/banner-01.jpg')} alt="banner" className='p-8 md:p-0 w-full md:h-1/2 md:w-1/2' />
      </div>
      <div className='bg-[#001524] text-white'>
        <div className='grid grid-cols-1 md:grid-cols-4 max-w-[1240px] m-auto p-10'>
          <div className='flex md:text-xl font-merriweather md:font-bold text-center md:text-left items-center justify-center mb-4 md:mb-0'><p>Numbers Speak For Themselves!</p></div>
          <div>
            <h1 className='text-3xl lg:text-5xl font-medium mb-3 text-center'>{count1}+</h1>
            <h2 className='text-xl text-center'>Curated Products</h2>
          </div>
          <div>
            <h1 className='text-3xl lg:text-5xl font-medium mb-3 text-center'>{count2}+</h1>
            <h2 className='text-xl text-center'>Curated Products</h2>
          </div>
          <div>
            <h1 className='text-3xl lg:text-5xl font-medium mb-3 text-center'>{count3}+</h1>
            <h2 className='text-xl text-center'>Product categories</h2>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className="before:content-[''] before:bg-[url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png')] before:right-0 before:bottom-0 before:absolute before:h-[40%] before:w-[30vw] before:bg-no-repeat before:bg-contain before:opacity-10"></div>
        <div className='flex flex-col md:flex-row lg:max-w-[1240px] m-auto overflow-hidden justify-center py-40 '>
          <div className='w-full md:w-[45%]'>
            <div className="flex flex-col p-10 justify-end bg-content-background rounded-lg">
              <div><Slideshow /></div>
              <div className="flex justify-center mb-2">
                <span className="text-yellow-400 text-2xl mb-2">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </div>
              <p className="text-gray-700 text-center mb-6 lg:text-lg">
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
              <div className="flex justify-center items-center">
                <img
                  src={
                    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png"
                  }
                  className="h-10 w-10 mr-4"
                  alt="reviewer_image"
                />
                <span className="text-gray-800 text-center">John Doe</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col pl-10 xl:pl-32 justify-center p-5 md:w-1/2'>
            <div className='flex flex-col md:flex-row mb-10 lg:mb-10 justify-center'>
              <div className='flex justify-center md:h-20 md:pr-10 mb-7 md:mb-0'>
                <img src={require("../images/organic-badge-freeimg.png")} alt="organic badge" />
              </div>
              <div>
                <h1 className='text-center md:text-left font-merriweather text-2xl font-semibold'>Certified Products</h1>
                <p className='text-[#333333] text lg:pt-4 text-center md:text-left'>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div><h1 className='text-center md:text-left font-merriweather text-2xl lg:text-4xl font-semibold mb-4'>We Deal With Various Quality Organic Products!</h1></div>
            <div>
              <img src={require('../images/logo-leaf-new.png')} alt="leaf" className='py-4' />
            </div>
            <div>
              <div className='flex items-stretch flex-col'>
                <div className='leading-loose flex lg:text-lg'>
                  <ul className='flex flex-col w-40 lg:w-64'>
                    <li><FontAwesomeIcon icon={faCircleCheck} size="xs" style={{ color: "#8bc34a", paddingRight: "10px" }} />Fresh fruits</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} size="xs" style={{ color: "#8bc34a", paddingRight: "10px" }} />Dry fruits</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} size="xs" style={{ color: "#8bc34a", paddingRight: "10px" }} />Fresh vegetables</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} size="xs" style={{ color: "#8bc34a", paddingRight: "10px" }} />Dried vegetables</li>
                  </ul>
                  <ul className='flex flex-col w-64'>
                    <li><FontAwesomeIcon icon={faCircleCheck} size="xs" style={{ color: "#8bc34a", paddingRight: "10px" }} />Beauty products</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} size="xs" style={{ color: "#8bc34a", paddingRight: "10px" }} />Milk products</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} size="xs" style={{ color: "#8bc34a", paddingRight: "10px" }} />Organic honey</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} size="xs" style={{ color: "#8bc34a", paddingRight: "10px" }} />Organic tea</li>
                  </ul>
                </div>
                <div className='pt-10'>
                  <div className="flex w-52 h-10 bg-[#6a9739] py-3 px-5 rounded-md cursor-pointer hover:bg-[#8bc34a] transition ease-linear delay-100 items-center">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "#ffffff" }}
                    />
                    <button className=" text-white font-medium pl-3">START SHOPPING</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About