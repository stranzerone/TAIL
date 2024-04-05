import React, { useState } from 'react';
import FooterPage from './Footer';
import Navbar from './Navbar';
import { LuMailCheck } from "react-icons/lu";

const VerifyEmailPage = () => {
 

  return (
    <div className="min-h-screen flex flex-col">
      
   <Navbar />
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5vw font-bold mb-4">Please verify Your Email...</h2>
<div className='flex items-center justify-center'>
  <LuMailCheck className='py-3'   style={{height:"25vw" ,width:"20vw"}}/>
</div>
       <h3 className='text-gray-500'>Please verify email address.We've sent a confirmation email to:
       <br />
       <br />
       <span className='text-gray-900 font-extrabold mt-10 py-2'>account@refro.design</span>
       <br />
       <br />
       Click the confimation link in that email to begin using Dribble <br /><br />
       Didin't recieve the email?Check your Spam folder,it may have been caught by a filter.if <br />
       you still don't see it,you can <span  className='text-pink-700'>resend the confirmation email</span>
       wrong email address?<span className='text-pink-700'>Change it</span>
       </h3>
         
          {/* More Lorem Ipsum text here... */}
        </div>
      </div>

   <FooterPage />

    </div>
  );
};

export default VerifyEmailPage;
