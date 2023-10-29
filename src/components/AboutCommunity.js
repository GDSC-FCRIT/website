import React from 'react'

const AboutCommunity = () => {
  return (
        <div>
        <div className='bg-white p-8 rounded'>
          <h1 className='inline text-howwedo mt-h1 mb-h1 ms-0 me-0 font-bold'>About our Community</h1>
          <h2 className='text-gray-500 text-2xl'>What we do here at GDSC?</h2>
        </div>

        <div className="flex flex-col items-center md:flex-row md:items-start ml-8 mr-16">
        <div className="text-center md:text-left mb-4 md:mb-0 md:mr-8">
            <h2 className='text-black text-3xl font-semibold pt-6 pl-6 pr-6'>What is GDSC?</h2>
            <p className='p-6 text-gray-700 font-medium '>Google collaborates with university students who are passionate about growing developer communities. GDSC is an Organisation for university students who want to bring about a change through technology. We are focused upon building technical and non-technical skills, which would help students to build a better community.</p>
            <button className="bg-green-600 rounded-lg shadow-xl text-white py-2 px-4 mt-4 ml-6">Know More!</button>
        </div>
        <img src='/design.png' alt='design' className="c3 md:mb-0" />
        </div>



        <div className="flex flex-col mx-12 my-4 md:flex-row">
        <div className="md:order-1 md:mr-4 flex flex-col items-center">
        <img src='/navbarLogo.png' alt='GDSC-fcrit' className='w-full md:w-auto shadow-lg rounded mb-4 md:mb-0' />
        <img src='/college_img.png' alt='College Image' className='w-full md:w-auto shadow-lg rounded' />
        </div>


            <div className="md:order-2 md:ml-4">
                <h1 className="text-3xl font-semibold mb-4 pt-6 pl-6 pr-6">About <span className='inline-block'><img src='/logo.png' className='h-6' alt='LOGO'/></span> GDSC FCRIT</h1>
                <p className="mb-4 text-gray-700 font-medium pt-2 pl-6 pr-6">The GDSC FCRIT (Google Developer Student Clubs) is a vibrant and inclusive community for students passionate about technology and development. Sponsored by Google, GDSC provides a platform for students to collaborate, learn, explore and create together.</p>
                <p className="mb-4 text-gray-700 font-medium pt-2 pl-6 pr-6">Through a combination of <span className='text-blue-600'>workshops</span>, <span className='text-green-600'>hackathons</span>, <span className='text-red-600'>speaker sessions</span>, and <span className='text-yellow-500'>hands-on projects</span>, GDSC members have the opportunity to enhance their technical skills, explore innovative ideas, and connect with like-minded peers.</p>
                
                <div className="flex flex-col md:flex-row ml-6 justify-between items-center">
                <button className="bg-yellow-500 rounded-lg shadow-xl text-white font-medium py-2 px-6 mb-2 md:mb-0 max-w-max flex-shrink-0">Know More!</button>
                <button className="bg-red-500 rounded-lg shadow-xl text-white font-medium py-2 px-6 max-w-max flex-shrink-0 ">Meet The Team</button>
                </div>
            </div>
        </div>
        </div>
  )
}

export default AboutCommunity