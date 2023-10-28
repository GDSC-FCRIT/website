import React from 'react';

const HowWeDo = () => {
  return (
    <div className='flex justify-center bg-white'>
      <div>
        <div className='bg-white p-8 rounded text-left'>
          <h1 className='inline text-howwedo mt-h1 mb-h1 ms-0 me-0 font-bold'>How We Do it here:)</h1>
          <h2 className='text-gray-500 text-2xl'>it's a cycle</h2>
        </div>
        <img src='/howwedoit.png' alt='How we do' />
      </div>
    </div>
  )
}

export default HowWeDo;
