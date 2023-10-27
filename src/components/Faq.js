import '../style/faq.css'
import React, { useState } from 'react';

 function Faq() {
    const [openIndex, setOpenIndex] = useState(-1);
  
    const toggleAccordion = (index) => {
      if (openIndex === index) {
        setOpenIndex(-1);
      } else {
        setOpenIndex(index);
      }
    };
 
    return (

      <div className="FaqMainContainer">
        <div className="FaqMainDiv">
        <h2 className='faqHeading'>FAQ's</h2>
          {data.map((item, i) => (
            <div className="item" key={i}>
              <div className="ques" onClick={() => toggleAccordion(i)}>
              
                <h2>{item.question}</h2>
                <span className={`icon ${openIndex === i ? 'minus' : 'plus'}`}></span>
              </div>
              <div className={`ans ${openIndex === i ? 'open' : ''}`}>
                <h3>{item.answer}</h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    );
  }


const data=[
    {
        question: 'What is a Google Developer Student Club (GDSC)?',
        answer: ' GDSC is a community of student developers who are passionate about Google technologies. It organize events, workshops and seminars to foster learning.'
    },
    {
         question: 'Who should join Google Developer Student Clubs?',
         answer: ' College and university students are encouraged to join Google Developer Student Clubs.'
    },
    {
      question: 'Do I need prior coding experience to join GDSC? ',
      answer: 'No, prior coding experience is not needed. GDSC is open to all, including beginners. '  
    },
    {
        question: 'What kind of events does GDSC organize?',
        answer: 'GDSC host a variety of events, including coding workshops, hackathons, seminars, and networking events.'
    }
]

export default Faq;