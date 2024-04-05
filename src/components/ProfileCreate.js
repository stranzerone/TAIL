import React, { useState } from 'react';
import { BiSolidCameraPlus } from "react-icons/bi";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
  const [avatarURL, setAvatarURL] = useState('');
  const [location, setLocation] = useState('');
  const { userid } = useParams();
  const BACKEND_URL= process.env.REACT_APP_BACKEND
  const CLOUD_URL = process.env.REACT_APP_IMAGE_CLOUD
  const PRESET = process.env.REACT_APP_IMAGE_PRESET
const navigate = useNavigate()
  const uploadAvatar = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', PRESET);
  
      const response = await axios.post(
        CLOUD_URL,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      setAvatarURL(response.data.secure_url);

    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const handleNext = async () => {
    try {
      const response = await axios.put(
        `${BACKEND_URL}/addImage/${userid}`,
        {
          image: avatarURL,
          location: location
        }
      );

   if(response.status===200){
    navigate(`/selectpage/${userid}`)
    
   }

    } catch (error) {
      console.error('Error sending data to localhost:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-full md:max-w-screen-xl bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center justify-center">
        
        {/* Row 1: Logo */}
       

        {/* Yellow Content Section */}
        <div className='w-full md:w-3/5 flex flex-col items-start justify-start rounded-lg p-6'>

          {/* Row 2: Heading */}
          <div className="w-full text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Welcome! Let's create your profile</h1>
            <h2 className='text-gray-500 py-3 md:py-5 text-xs md:text-sm lg:text-base'>Let others get to know you better! You can do it later</h2>
          </div>

          {/* Row 3: Avatar */}
          <div className="w-full">
            <h1 className='font-extrabold text-lg md:text-xl lg:text-2xl pb-2 md:pb-3'>Choose an avatar</h1>
            <div className="flex flex-col md:flex-row gap-6 mb-3">
              {avatarURL ? 
                <img src={avatarURL} alt="Avatar" className="w-32 h-32 rounded-full mb-2 md:mb-0" />
                :
                <div className="relative w-32 h-32 rounded-full border-dotted border-2 border-gray-400 flex items-center justify-center mb-2 md:mb-0">
                  <BiSolidCameraPlus style={{width:"3rem",height:"2rem"}} />
                </div>
              }
              <div className='flex flex-col items-start justify-start'>
                <input 
                  type="file" 
                  onChange={uploadAvatar} 
                  className="hidden" 
                  id="avatarInput" 
                />
                <label htmlFor="avatarInput" className="bg-opacity-50 border border-gray-400 text-black px-4 py-2 my-3 md:my-5 rounded hover:bg-opacity-75 text-xs md:text-sm hover:border-gray-500 transition-colors cursor-pointer">
                  Choose image
                </label>
                <h2 className="text-center md:text-left text-gray-500 text-xs md:text-sm "> {">"} Or choose one of our defaults</h2>
              </div>
            </div>
          </div>

          {/* Row 4: Location Heading and Input */}
          <div className="w-full flex flex-col mb-6">
            <h2 className="text-base md:text-lg lg:text-xl font-semibold ">Add Your Location</h2>
            <input 
              type="text" 
              id="location" 
              placeholder="Enter a location" 
              className="border-b border-gray-400 w-full p-2 mt-2 text-xs md:text-sm lg:text-base" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Row 5: Next Button */}
          <div className="w-full">
  <button 
    onClick={handleNext} 
    disabled={!avatarURL || !location} // Disable button if either avatarURL or location is empty
    className={`bg-pink-300 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors text-xs md:text-sm lg:text-base ${(!avatarURL || !location) ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    Next
  </button>
</div>

        </div>
        
      </div>
    </div>
  );
};

export default Profile;
