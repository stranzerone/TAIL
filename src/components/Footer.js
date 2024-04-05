import React from 'react';

const FooterPage = () => {
  return (
    <footer className="bg-white-800">
      <div className="container mx-auto px-6 py-10">

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Column 1 */}
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-md font-semibold mb-3 pe-40">Dribble</h2>
              <ul>
                <li className='mb-5 text-gray-600'>Dribble is worlds leading <br />community for creatives to share, grow,<br /> and get hired </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-md font-semibold mb-3 ">For designers</h2>
              <ul className='text-gray-700 text-xs '>
                <li className='mb-3'>Go pro!</li>
                <li className='mb-3'>Explore design work</li>
                <li className='mb-3'>Design blog</li>
                <li className='mb-3'>Overtime podcast</li>
                <li className='mb-3'>Playoffs</li>
                <li className='mb-3'>Weekly Warm-Up</li>
                <li className='mb-3'>Refer a Friend</li>
                <li className='mb-3'>Code of conduct</li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-md font-semibold mb-3">Hire designers</h2>
              <ul className='text-gray-700 text-xs '>
                <li className='mb-3 ' >Post a job opening</li>
                <li className='mb-3'>post a freelance projects</li>
                <li className='mb-3'>Search for designers</li>
              </ul>
              <h2 className="text-md font-semibold mb-3">Brand</h2>
              <ul className='text-gray-700 text-sm '>
                <li className='mb-3'>Advertise with us</li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-md font-semibold mb-3">Company</h2>
              <ul className='text-gray-700 text-xs '>
                <li className='mb-3'>About</li>
                <li className='mb-3'>careers</li>
                <li className='mb-3'>Support</li>
                <li className='mb-3'>Media Kit</li>
                <li className='mb-3'>Testimonals</li>
                <li className='mb-3'>API</li>
                <li className='mb-3'>Terms ofservice</li>
                <li className='mb-3'>Privacy policy</li>
                <li className='mb-3'>Cookie policy</li>
              </ul>
            </div>
          </div>

          {/* Column 5 */}
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-md font-semibold mb-3">Directories</h2>
              <ul className='text-gray-700 text-xs '>
                <li className='mb-3'>Design jobs</li>
                <li className='mb-3'>Designers for higher</li>
                <li className='mb-3'>Freelance designers for hire</li>
                <li className='mb-3'>Tags</li>
                <li className='mb-3'>Places</li>
              </ul>
              <h2 className="text-md font-semibold mb-3">Design assests</h2>
              <ul className='text-gray-700 text-xs '>
                <li className='mb-3'>Dribble Marketplace</li>
                <li className='mb-3'>Creative Market</li>
                <li className='mb-3'>Font Spring</li>
                <li className='mb-3'>Font Squirrel</li>
              </ul>
            </div>
          </div>

          {/* Column 6 */}
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-md font-semibold mb-3">Design Resources</h2>
              <ul className='text-gray-700 text-xs '>
                <li className='mb-3'>Freelancing</li>
                <li className='mb-3'>Design hiring</li>
                <li className='mb-3'>Design portfolio</li>
                <li className='mb-3'>Design Education</li>
                <li className='mb-3'>Creative process</li>
                <li className='mb-3'>Design industy Trends</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default FooterPage;
