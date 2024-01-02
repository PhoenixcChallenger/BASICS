import React from 'react'

const FormCheckout = () => {
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
                            <label htmlFor="city">Town/City</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id='city'
                                name='city'
                                className='p-2 mt-2 w-full'
                                required />
                        </div>
                    </div>
                    <div className='my-4 '>
                        <div>
                            <label htmlFor="state">State</label>
                        </div>
                        <div>
                            <select
                                id="state"
                                name="country"
                                class="form-control"
                                className='p-2 mt-2 w-full'>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CT">Chhattisgarh</option>
                                <option value="GA">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="GA">Goa</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OR">Odisha</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TG">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UT">Uttarakhand</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="WB">West Bengal</option>
                                <option value="AN">Andaman and Nicobar Islands</option>
                                <option value="CH">Chandigarh</option>
                                <option value="DN">Dadra and Nagar Haveli</option>
                                <option value="DD">Daman and Diu</option>
                                <option value="DL">Delhi</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="PY">Puducherry</option>
                            </select>
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