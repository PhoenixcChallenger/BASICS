import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import Accordion from '../components/Accordion'
import { items } from '../store-data/AccordianData'

const Contact = () => {
  const [accordions, setAccordion] = useState(items);
  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord };
      }
    });
    setAccordion(updatedAccordions);
  };
  let firstHalf = accordions.slice(0, accordions.length / 2);
  let secondHalf = accordions.slice(accordions.length / 2, accordions.length);

  return (
    <>
      <Header background={"#F8F6F3"} contactColor={"#8BC34A"} />
      <div className='flex justify-center bg-content-background h-60'>
        <div className=' text-5xl font-merriweather mt-20 font-bold h-3'>Get In Touch</div>
      </div>
      <div className='flex flex-col justify-center items-center m-6 lg:max-w-[1200px] xl:mx-auto shadow-lg -mt-10 bg-white rounded-md mb-24'>
        <div className='w-32 -mt-6 mb-10'>
          <img src={require("../images/basil-leaf.png")} alt="leaf" />
        </div>
        <div className='flex flex-col md:flex-row mb-10 w-full justify-center'>
          <div className='flex-1 flex flex-col p-10 text-center border-2 m-2 md:ml-6'>
            <FontAwesomeIcon icon={faPhone} rotation={270} size="xl" style={{ color: "#8bc34a", }} />
            <div className='mt-4'>
              <p>+123 456 7890 <br /> +123 456 7890</p>
            </div>
          </div>
          <div className='flex-1 flex flex-col p-10 text-center border-2 m-2'>
            <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: "#8bc34a", }} />
            <div className='mt-4'>
              <p>info@example.com<br />support@example.com</p>
            </div>
          </div>
          <div className='flex-1 flex flex-col p-10 text-center border-2 md:mr-6 m-2'>
            <FontAwesomeIcon icon={faLocationDot} size="xl" style={{ color: "#8bc34a", }} />
            <div className='mt-4'>
              <p>1569 Ave, New York,<br /> NY 10028, USA</p>
            </div>
          </div>
        </div>
      </div >
      <div className='flex flex-col gap-8 justify-center items-center max-w-[1200px] mx-auto'>
        <div>
          <h1 className='font-merriweather mx-10 text-2xl  md:text-4xl font-semibold'>
            Frequently Asked Question!
          </h1>
        </div>
        <div>
          <img src={require("../images/logo-leaf-new.png")} alt="leaf2" className='w-24 md:w-32' />
        </div>
        <div className='w-full'>
          <div className="flex flex-col md:flex-row justify-between p-2 mb-20 gap-10">
            <div className='flex flex-col flex-1'>{
              firstHalf.map((accordion) => (
                <div key={accordion.key} className="w-full p-2">
                  <Accordion
                    title={accordion.title}
                    data={accordion.data}
                    isOpen={accordion.isOpen}
                    toggleAccordion={() => toggleAccordion(accordion.key)}
                  />
                </div>
              ))}</div>
            <div className='flex flex-col flex-1'>{secondHalf.map((accordion) => (
              <div key={accordion.key} className="w-full p-2">
                <Accordion
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                />
              </div>
            ))}</div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact