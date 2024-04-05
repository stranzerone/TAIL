import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftImage from "../assests/LOGIN.png"

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    terms: false, // Add a new state for the terms checkbox
  });
const [usernameTaken,setUsernameTaken] =useState(false)
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/addUser`, formData);
      if (response.status === 200) {
        navigate("/profile/" + formData.username);
      } 
        
      if(response.status===202){
        setUsernameTaken(true)
      }
      console.log(response.data);
      // Handle successful response here, e.g., redirect user or show a success message
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error here, e.g., show an error message to the user
    }
  };

  // Check if all fields are filled and the terms checkbox is checked
  const isFormValid = () => {
    return formData.name !== '' &&
           formData.email !== '' &&
           formData.username !== '' &&
           formData.password !== '' &&
           formData.terms;
  };

  return (
    <div className="min-h-full flex bg-red-300 flex-col items-center justify-center bg-gray-100 w-full">
      <div className="w-full  max-w-full md:max-w-screen bg-white rounded-lg shadow-lg overflow-hidden" style={{height:"100vh"}}>
      
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {/* Left Image */}
          <div className="hidden md:block bg-yellow-600 relative h-screen w-full" style={{ width: '40vw' }}>
            <img
              src={LeftImage}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Login Form */}
          <div className="p-6 md:p-8 flex flex-col justify-center  w-full relative">
            <h1 className="text-xl md:text-2xl  my-5 font-semibold mb-3">Sign Up to Dribble</h1>
       {usernameTaken?   <p className="text-red-500 mb-3 text-xs md:text-sm">* Username is already taken</p>:<p></p>  }

            {/* Already a Member - Top Right Corner */}
            <p className="absolute top-0 md:right-3 text-sm text-gray-600 mt-3">
              Already a member? <a href="#" className="text-blue-500 font-semibold">Sign in</a>
            </p>

            {/* Form */}
            <form className="space-y-3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                {/* Name */}
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="text-sm font-extrabold mb-1">Name</label>
                  <input 
                    onChange={handleChange}
                    type="text" 
                    name="name" 
                    id="name" 
                    className="border bg-gray-100 p-1 rounded-md focus:outline-none focus:border-blue-500 w-4/5 h-9 text-sm" 
                  />
                </div>

                {/* Username */}
                <div className="flex flex-col w-full">
                  <label htmlFor="username" className="text-sm font-extrabold mb-1">Username</label>
                  <input 
                    onChange={handleChange}
                    type="text" 
                    name="username" 
                    id="username" 
                    className="border bg-gray-100 p-1 rounded-md focus:outline-none focus:border-blue-500 w-4/5 h-9 text-sm" 
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="text-sm font-extrabold mb-1">Email</label>
                <input 
                  onChange={handleChange}
                  type="email" 
                  name="email" 
                  id="email" 
                  className="border bg-gray-100 p-1 rounded-md focus:outline-none focus:border-blue-500 w-4/5 h-9 text-sm" 
                />
              </div>

              {/* Password */}
              <div className="flex flex-col w-full">
                <label htmlFor="password" className="text-sm font-extrabold mb-1">Password</label>
                <input 
                  onChange={handleChange}
                  type="password" 
                  name="password" 
                  id="password" 
                  className="border bg-gray-100 p-1 rounded-md focus:outline-none focus:border-blue-500 w-4/5 h-9 text-sm" 
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-1 w-full">
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="terms" 
                  className="form-checkbox text-blue-500 w-6 h-6" 
                  onChange={handleChange}
                />
                <label htmlFor="terms" className="text-xs text-gray-600">
                  Creating an account means you are ok with our 
                  <span style={{ color: "blue" }}> Terms of Service, Privacy, Policy and our default notification setting.</span>
                </label>
              </div>

              {/* Sign Up Button */}
              <button 
                type="submit" 
                onClick={handleSubmit} 
                className={`bg-pink-500 text-white p-1 rounded-md hover:bg-red-600 transition-colors w-1/2 h-10 mt-3 text-sm ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`} // Add conditional classes for disabled state
                disabled={!isFormValid()} // Add disabled attribute
              >
                Create account
              </button>
            </form>

            {/* Google Protection and Policy */}
            <p className="text-center text-gray-600 mt-3 text-xs">
              This site is protected by reCAPTCHA and the Google 
              <span style={{ color: "blue" }}> Privacy Policy and Terms of Service </span>apply
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
