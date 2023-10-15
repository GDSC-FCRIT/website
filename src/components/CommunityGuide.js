import React, { useState } from 'react';

function CommunityGuide(){

 const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }; 
 
    return(
        <div className="flex justify-center min-h-40 p-features bg-features text-white">
            <div className="text-center w-community block">
            <h1 className='block text-faq mt-h1 mb-h1 ms-0 me-0 font-bold'>Our Community Guidelines</h1>
            <p className='block mt-p mb-p ms-0 me-0'>
            Google is dedicated to providing a harassment-free and inclusive event experience for
             everyone r regardless of gender identity and expression, sexual orientation, disabilities,
              neurodiversity, physical appearance, size, ethnicity, nationality, race, age, religion, or 
              other protected category.
            </p><br/>
           
           <button
          className="bg-joinus-blue p-joinus text-white rounded-2xl border-0 border-solid border-black text-joinus-font tracking-normal leading-normal normal-case indent-0 inline-block text-center cursor-pointer box-border m-button"
          onClick={togglePopup}
        >Read the Guidelines</button> 
         </div>

         {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-128">
            <h2 className="text-3xl text-joinus-blue font-bold flex justify-between items-center mb-4 ">Community Guidelines
            <button
              className=" relative top-0 right-2 p-joinus text-black rounded-2xl  mb-2 cursor-pointer "
              onClick={togglePopup}
            >&times;</button></h2>
            <p className="text-gray-800 text-xl">
             <strong>1. Respect Others</strong>:<br/> Treat all community members with respect and courtesy. Do not engage in personal attacks, harassment, or bullying.
              <br/>
              <strong>2. Be Responsible</strong>:<br/>  What you say and do matters. You’re responsible for your words and actions and you’ll be held accountable for them.
              <br/>
              <strong>3. Stay on Topic</strong>:<br/> Keep discussions relevant to the community's focus or theme. Off-topic posts can clutter discussions.
              <br/>
              <strong>4. No Spam</strong>:<br/> Do not post unsolicited or promotional content. Spam is generally not tolerated.
            <br/>
            <strong>5. Use Appropriate Language</strong>:<br/> Avoid offensive, vulgar, or inappropriate language. Be mindful of your tone and language.
            <br/>
            <strong>6. Privacy of Others</strong>:<br/>Do not share personal information of community members, even if it's publicly available. Respect their privacy.
            </p>
           

        </div>
        </div>
    )}
    </div>
    );  
}
export default CommunityGuide;