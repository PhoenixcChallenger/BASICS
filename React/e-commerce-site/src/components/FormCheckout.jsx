import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FormCheckout = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  useEffect(() => {
    const getLocation = async () => {
      try {
        if (pincode.length === 6) {
          const res = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
          const data = res.data[0].PostOffice[0];
          setCity(data.District);
          setState(data.State);
          console.log('response from postal code api ->', res);
        }
      } catch (error) {
        console.log('error fetching postal code->', error);
      }
    }
    getLocation();
  }, [pincode])

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  }

  return (
    <>
      <div className='mx-6'>
        <form>
          <div className='flex gap-10 my-4  justify-between'>
            <div className='w-1/2'>
              <div>
                <label htmlFor="fname">First name</label>
              </div>
              <div>
                <input
                  type="text"
                  id='fname'
                  name='fname'
                  required
                  className='p-2 mt-2 w-full' />
              </div>
            </div>
            <div className='w-1/2'>
              <div>
                <label htmlFor="fname">Last name</label>
              </div>
              <div>
                <input
                  type="text"
                  id='lname'
                  name='lname'
                  required
                  className='p-2 mt-2 w-full' />
              </div>
            </div>
          </div>
          <div className='my-4 '>
            <div>
              <label htmlFor="companyName">Company name (optional) </label>
            </div>
            <div>
              <input
                type="text"
                id='companyName'
                name='companyName'
                className='p-2 mt-2 w-full' />
            </div>
          </div>
          <div className='my-4 '>
            <div>
              <div>Country/Region </div>
            </div>
            <div>
              <div className='bg-white p-2 mt-2 w-full'>
                <p>India</p>
              </div>
            </div>
          </div>
          <div className='my-4 '>
            <div>
              <label htmlFor="address">Street address </label>
            </div>
            <div>
              <input
                type="text"
                id='address'
                name='address'
                required
                placeholder='House number and street name'
                className='p-2 mt-2 w-full' />
            </div>
            <div>
              <input
                type="text"
                id='address'
                name='address'
                placeholder='Appartment, suite, unit etc. (optional)'
                className='p-2 mt-2 w-full' />
            </div>
          </div>
          <div className='my-4 '>
            <div>
              <div>Town/City</div>
            </div>
            <div className='p-2 mt-2 w-full bg-white min-h-10'>
              {city}
            </div>
          </div>
          <div className='my-4 '>
            <div>
              <div>State</div>
            </div>
            <div className='p-2 mt-2 w-full bg-white min-h-10'>
              {state}
            </div>
          </div>
          <div className='my-4 '>
            <div>
              <label htmlFor="pincode">PIN Code</label>
            </div>
            <div>
              <input
                type="text"
                id='pincode'
                name='pincode'
                className='p-2 mt-2 w-full'
                value={pincode}
                onChange={handlePincodeChange}
                required />
            </div>
          </div>
          <div className='my-4 '>
            <div>
              <label htmlFor="phone">Phone</label>
            </div>
            <div>
              <input
                type="tel"
                id='phone'
                name='phone'
                className='p-2 mt-2 w-full'
                required />
            </div>
          </div>
          <div className='my-4 '>
            <div>
              <label htmlFor="phone">Email</label>
            </div>
            <div>
              <input
                type="email"
                id='email'
                name='email'
                className='p-2 mt-2 w-full'
                required />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormCheckout