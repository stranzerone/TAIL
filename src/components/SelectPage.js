import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import A1 from "../assests/A1.png"
import A2 from "../assests/A2.png"
import A3 from "../assests/A3.png"
const SelectPage = () => {
  const { userid } = useParams(); // Accessing the userid from the URL
  const [isChecked, setIsChecked] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  const navigate = useNavigate()
  const BACKEND_URL= process.env.REACT_APP_BACKEND

  const handleCheckboxChange = (option) => {
    setIsChecked({
      ...isChecked,
      [option]: !isChecked[option],
    });
  };

  const isCheckedButton = () => {
    return isChecked.option1 || isChecked.option2 || isChecked.option3;
  };

  const handleSubmit = async () => {
    try {
       
      const selectedOptions = Object.keys(isChecked).filter((option) => isChecked[option]);
      const response = await axios.put(`${BACKEND_URL}/addIntrest/${userid}`, {
        selectedOptions,
      });
if(response.status===200){
  navigate(`/verifyEmail/${userid}`)
}
      // Handle successful response here, e.g., redirect user or show a success message

    } catch (error) {
      console.error('Error:', error);
      // Handle error here, e.g., show an error message to the user
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-wrap ">
      <div className="w-4/5 h-auto flex flex-col items-center justify-center">
        
        {/* Row 1: Logo */}
        <div className="absolute flex top-2 left-3">
          <h1>Dribble</h1>
          <button onClick={()=>navigate("/")} className='bg-gray-300 px-3 mx-2 rounded-md'>{">"}</button>
        </div>

        {/* Yellow Content Section */}
        <div className='w-80vw flex flex-col items-center justify-start rounded-lg px-6 py-1 my-10 md:my-2'>

          {/* Row 3: What brings you to Dribble? */}
          <div className="flex flex-col items-center justify-start mb-6 h-30vh">
            <h2 className="text-3xl pb-3 font-extrabold">What brings you to Dribble?</h2>
            <p className="text-sm text-gray-500">Select the option that best describes you. Don't worry, you can explore other options later.</p>
          </div>

          {/* Row 4: Images */}
          <div className="flex justify-between flex-col md:flex-row w-full gap-4 mb-6 h-30vh">
            <div 
              className={`flex flex-col items-center justify-center w-full sm:w-1/3 rounded-lg min-w-[200px] h-full border-2 ${isChecked.option1 ? 'border-red-500' : 'border-gray-200'}`}
              onClick={() => handleCheckboxChange('option1')}
              style={{height:"44vh"}}

            >
            <div className='h-2/4 w-1/2 '>
              <img src={A1} alt="Loading" className="w-full h-full object-cover mb-2" />
             </div>
             <div className='h-2/4 w-full items-center flex flex-col justify-end'>


              <h2 className="text-center">I'am a designer looking to share my work</h2>
              <input 
                type="checkbox" 
                className="m-3 appearance-none bg-white rounded-full w-6 h-6 border-2 border-gray-200 checked:bg-pink-500" 
                checked={isChecked.option1}
                onChange={() => handleCheckboxChange('option1')}
              />
              </div>
            </div>
            <div 
             className={`flex flex-col items-center justify-center w-full sm:w-1/3 rounded-lg min-w-[200px] h-full border-2 ${isChecked.option2 ? 'border-red-500' : 'border-gray-200'}`}
style={{height:"44vh"}}
              onClick={() => handleCheckboxChange('option2')}
            >
            <div className='h-2/4 w-1/2 '>
              <img src={A2}
              alt="Loading" className="w-full h-full object-cover mb-2" />
              </div>

              <div className='h-2/4 w-full items-center flex flex-col justify-end'>
              <h2 className="  flex text-center py-4">I'am looking to hire a designer</h2>
              <input 
                type="checkbox" 
                className="m-3 appearance-none bg-white rounded-full w-6 h-6 border-2 border-gray-200 checked:bg-pink-500 " 
                checked={isChecked.option2}
                onChange={() => handleCheckboxChange('option2')}
              />

              </div>
            </div>
            <div 
              className={`flex flex-col items-center justify-center w-full sm:w-1/3 rounded-lg min-w-[200px] h-full border-2 ${isChecked.option3 ? 'border-red-500' : 'border-gray-200'}`}
              onClick={() => handleCheckboxChange('option3')}
              style={{height:"44vh"}}

            >
            <div className='h-2/4 w-1/2 '>
              <img src={A3}
               alt="Option 3" className="w-full h-full  object-cover mb-2" />
               </div>


               <div className='h-2/4 w-full items-center flex flex-col justify-end'>
              <h2 className="text-center">I'am looking for design inspiration</h2>
              <input 
                type="checkbox" 
                className="m-3 appearance-none bg-white rounded-full w-6 h-6 border-2 border-gray-200 checked:bg-pink-500" 
                checked={isChecked.option3}
                onChange={() => handleCheckboxChange('option3')}
              />
              </div>
            </div>
          </div>

          {/* Row 5: Finish Button and Or you can return */}
          <div className="flex flex-col items-center justify-center h-30vh">
            {isCheckedButton() ? (
              <h2 className='pb-4'>Anything else? You Can Select Multiple</h2>
            ) : (null)}
            <button 
              onClick={handleSubmit}
              className={`${isCheckedButton() ? 'bg-red-800 ' : 'bg-red-300 '} text-white w-50 md:w-2/3 px-4 py-2 rounded hover:bg-${isCheckedButton() ? 'red' : 'pink'}-900 transition-colors mb-3 ${isCheckedButton() ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
              Finish
            </button>
            <p className="text-sm text-gray-500">Or press return</p>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default SelectPage;
