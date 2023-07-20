import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Intake(){
    const [formData, setFormData] = useState({
        lastName: '',
      firstName: '',
      dob: new Date(),
      phone: '',
      email: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      preferredLanguage: '',
      typeOfVisit: '',
      medicare: '',
      ssn: '',
      reasonForVisit: '',
      additionalComments: '',
      facilityName: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: '',
      supervisingMD: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents page reload
      
        try {
            console.log('About to make request with form data:', formData);
            const response = await axios.post('http://142.93.250.55:3000/', formData, { headers: { 'Content-Type': 'application/json' } });
            console.log('Form submitted successfully:', response.data);
            navigate("/FormSubmit");
        } catch (error) {
            console.error('Failed to submit form:', error);
        }
    };

    return (
        <>
        <div className="w-screen h-auto flex justify-center py-4 shadow-xl">
                <h1 className="text-empireblue text-3xl md:text-4xl lg:text-5xl font-bold">
                    Intake Form
                </h1>
            </div>
        <div className="relative w-screen h-2/5 bg-black bg-opacity-50 overflow-hidden">
                <div className="absolute inset-0 w-full h-full flex items-center z-10">
                    <img 
                        src="/assets/intake-photo.jpg" 
                        alt="clipboard"
                        className="object-cover object-center min-w-full min-h-full" />
                </div>
                <div className="absolute inset-0 w-full h-full bg-black opacity-25 z-20"></div>
            </div>
        <div className="relative bg-gray-200 flex flex-col items-center p-2 sm:py-2 md:py-12 lg:py-24 font-Poppins">
            <div className="container w-full md:w-11/12 lg:w-10/12 h-auto bg-white flex flex-col p-2 sm:p-4 md:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col lg:flex-row gap-4 p-5">
                    <div className="lg:w-1/4">
                        <label htmlFor="lastName" className="block">
                            Patient Last Name *
                        </label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            onChange={handleChange} 
                            className=" w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  
                                        focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
                            required/>
                    </div>
                    <div className="lg:w-1/4">
                        <label htmlFor="firstName" className="block">
                            Patient First Name *
                        </label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            onChange={handleChange} 
                            className=" w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  
                                        focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
                            required/>
                    </div>
                    <div className="lg:w-1/2">
                        <label 
                            htmlFor="dob" 
                            className="block">
                                Date of Birth *
                        </label>
                        <input 
                            type="date" 
                            id="dob" 
                            name="dob" 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  
                                      focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
                            required />
                    </div>
                    
                </div>
                <div className="flex flex-col lg:flex-row gap-4 p-5">
                    <div className="lg:w-1/2">
                    <label htmlFor="phone" className="block">
                        Phone *
                    </label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '')}} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  
                                   focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
                        required />
                    </div>
                    <div className="lg:w-1/2">
                        <label 
                            htmlFor="email" 
                            className="block">
                                Email Address *
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  
                                       focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
                            required />
                    </div>
                    <div className="lg:w-2/3">
                        <label htmlFor="address" className="block">
                            Street Address *
                        </label>
                        <input 
                            type="text" 
                            id="address" 
                            name="address" 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  
                            focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
                            required />
                    </div>
                    <div className="lg:w-1/3">
                        <label htmlFor="city" className="block">
                            City *
                        </label>
                        <input 
                            type="text" 
                            id="city" 
                            name="city" 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  
                            focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
                            required />
                    </div>
                    <div className="lg:w-1/3">
                        <label htmlFor="state" className="block">
                            State/Province *
                        </label>
                        <input 
                            type="text" 
                            id="state" 
                            name="state" 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  
                            focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
                            required />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 p-5">
<div className="lg:w-1/4">
    <label htmlFor="postalCode" className="block">ZIP / Postal Code *</label>
    <input type="text" id="postalCode" name="postalCode" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>
<div className="lg:w-1/4">
    <label htmlFor="country" className="block">Country *</label>
    <input type="text" id="country" name="country" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>
<div className="lg:w-1/4">
    <label htmlFor="preferredLanguage" className="block">Preferred Language *</label>
    <select id="preferredLanguage" name="preferredLanguage" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required >
    <option value="">--Please choose an option--</option>
    <option value="English">English</option>
    <option value="Spanish">Spanish</option>
    <option value="Tagalog">Tagalog</option>
    <option value="Mandarin">Mandarin</option>
    <option value="French">French</option>
    <option value="German">German</option>
    <option value="Italian">Italian</option>
    <option value="Portuguese">Portuguese</option>
    <option value="Russian">Russian</option>
    <option value="Hindi">Hindi</option>
    <option value="Bengali">Bengali</option>
    <option value="Japanese">Japanese</option>
    <option value="Korean">Korean</option>
    <option value="Arabic">Arabic</option>
    <option value="Turkish">Turkish</option>
    <option value="Vietnamese">Vietnamese</option>
    <option value="Dutch">Dutch</option>
    <option value="Greek">Greek</option>
    <option value="Swedish">Swedish</option>
    <option value="Czech">Czech</option>
    <option value="Finnish">Finnish</option>
    <option value="Polish">Polish</option>
    </select></div>
<div className="lg:w-1/4">
    <label htmlFor="gender" className="block">Gender*</label>
    <select 
        name="gender" 
        id="gender" 
        onChange={handleChange} 
        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0
        focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
        required>
            <option value=""></option>
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Transgender">Transgender</option>
            <option value="Non-binary/non-conforming">Non-binary/non-conforming</option>
            <option value="Prefer not to respond">Prefer not to respond</option>
    </select>
</div>
                </div>

            <div>
                <label htmlFor="typeOfVisit" className="block">Referred Supervising MD - Type of Visit *</label>
                <select id="typeOfVisit" name="typeOfVisit" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required >
                    <option value="">--Please choose an option--</option>
                    <option value="Home Visit">Home Visit</option>
                    <option value="Telehealth">Telehealth</option>
                    <option value="Either">Either</option>
                </select>
            </div>

<div className="">
    <label htmlFor="medicare" className="block">Medicare # *</label>
    <input type="text" id="medicare" name="medicare" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>

<div>
    <label htmlFor="ssn" className="block">SSN (If MBI, Member Beneficiary Identifier, is not available)</label>
    <input type="text" id="ssn" name="ssn" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" />
</div>
<div>
    <label htmlFor="reasonForVisit" className="block">Reason for Visit *</label>
    <textarea id="reasonForVisit" name="reasonForVisit" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>

<div>
    <label htmlFor="additionalComments" className="block">Additional Comments</label>
    <textarea id="additionalComments" name="additionalComments" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" />
</div>

<div className="flex flex-col lg:flex-row gap-4 p-5">
<div className="lg:w-1/3">
    <label htmlFor="facilityName" className="block">Name of Preferred Facility *</label>
    <input type="text" id="facilityName" name="facilityName" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>
<div className="lg:w-1/3">
    <label htmlFor="contactPerson" className="block">Contact Person *</label>
    <input type="text" id="contactPerson" name="contactPerson" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>
<div className="lg:w-1/3">
                    <label htmlFor="contactPhone" className="block">
                        Facility Phone *
                    </label>
                    <input 
                        type="tel" 
                        id="contactPhone" 
                        name="contactPhone" 
                        onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '')}} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  
                                   focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
                        required />
                    </div>
                    <div className="lg:w-1/3">
                        <label 
                            htmlFor="contactEmail" 
                            className="block">
                                Facility Email Address *
                        </label>
                        <input 
                            type="email" 
                            id="contactEmail" 
                            name="contactEmail" 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  
                                       focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" 
                            required />
                    </div>
</div>

<div>
    <label htmlFor="supervisingMD" className="block">Referred Supervising MD - Select an MD *</label>
    <select id="supervisingMD" name="supervisingMD" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required >
        <option value="">--Please choose an option--</option>
        <option value="Dr. Valle NPI#1689758526">Dr. Valle NPI#1689758526</option>
    </select>
</div>
            <div>
                <button type="submit" className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Submit</button>
            </div>
        </form>
            </div>
        </div>
        <div className='w-screen h-auto bg-black flex justify-center items-center text-white text-sm font-Poppins px-10 py-4'>
        <span className=' text-center'>Copyright © 2023 Empire Health Systems. All Rights Reserved.</span>
       </div>
</>
    );
};

export default Intake