import React, { useState, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState('');
const {userid} = useParams()
  useEffect(() => {
    // Fetch avatar image from localhost:4000
    const fetchAvatar = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/avatar/${userid}`);
        setAvatar(response.data.data[0].image);
      } catch (error) {
        console.error('Error fetching avatar:', error);
      }
    };

    fetchAvatar();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-transparent text-black p-4 flex justify-between items-center">
        {/* Logo and Menu for Desktop */}
        <div className="hidden lg:flex items-center">
          <h1 className="text-xl mr-8">
            <FaReact style={{color:"blue",width:"5vw",height:"6vw"}}/>
          </h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-red-900 text-sm">Inspiration</a></li>
            <li><a href="#" className="hover:text-red-900 text-sm">Find Work</a></li>
            <li><a href="#" className="hover:text-red-900 text-sm">Learn Design</a></li>
            <li><a href="#" className="hover:text-red-900 text-sm">Go Pro</a></li>
            <li><a href="#" className="hover:text-red-900 text-sm">Hire Designer</a></li>
          </ul>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Search and Avatar */}
        <div className="flex items-center">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="border p-2 rounded-l-lg pl-8" 
              style={{ backgroundImage: `url('path_to_search_icon.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', backgroundSize: '16px 16px' }}
            />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <IoSearch />
            </div>
          </div>
          <img src={avatar} alt="Avatar" className="w-10 h-10 ml-4 rounded-full border-2 border-gray-400" />
          <button className="bg-pink-500 text-white p-2 ml-4 rounded hidden md:block">Upload</button>
        </div>

        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white p-4 border rounded shadow-lg">
            <ul className="space-y-4">
              <li><a href="#" className="block text-sm">Inspiration</a></li>
              <li><a href="#" className="block text-sm">Find Work</a></li>
              <li><a href="#" className="block text-sm">Learn Design</a></li>
              <li><a href="#" className="block text-sm">Go Pro</a></li>
              <li><a href="#" className="block text-sm">Hire Designer</a></li>
            </ul>
            <div>
              <button className="bg-pink-500 text-white p-2 ml-4 rounded">Upload</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
