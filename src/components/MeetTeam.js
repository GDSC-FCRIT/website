import React from 'react';

const MeetTeam = () => {
  return (
    <div className="flex justify-between mt-64">
      <div className="flex flex-col items-center ml-12">
        <div className="w-16 h-16 bg-red-500 rounded-full mb-4"></div>
        <div className="w-16 h-16 bg-amber-400 rounded-full mb-4"></div>
        <div className="w-16 h-16 bg-blue-500 rounded-full mb-4"></div>
        <div className="w-16 h-16 bg-green-600 rounded-full"></div>
      </div>

      <div className="flex items-center justify-center"> 
        <div className="relative">
        <img src="/sample-team-member.jpg" alt="Team Member 1" className="w-48 h-48 rounded-full absolute top-10 left-10 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-red-500" />
        <img src="/sample-team-member.jpg" alt="Team Member 2" className="w-48 h-48 rounded-full absolute top-10 right-10 transform translate-x-1/2 -translate-y-1/2 p-5 bg-amber-400" />
        <img src="/sample-team-member.jpg" alt="Team Member 3" className="w-48 h-48 rounded-full absolute bottom-10 left-10 transform -translate-x-1/2 translate-y-1/2 p-5 bg-blue-500" />
        <img src="/sample-team-member.jpg" alt="Team Member 4" className="w-48 h-48 rounded-full absolute bottom-10 right-10 transform translate-x-1/2 translate-y-1/2 p-5 bg-green-600" />
        <div className="w-96 h-96 bg-red-400 rounded-full text-3xl flex items-center justify-center">Meet Our Team!</div>
        </div>
      </div>

      <div className="flex items-center mr-12">
        <button className="bg-white border-solid border-2 border-black px-3 py-2 rounded shadow-lg">More &gt;&gt;</button>
      </div>
    </div>
  );
};

export default MeetTeam;
