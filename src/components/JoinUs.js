// import '../style/joinUs.css'
import JoinUsWel from './JoinUsWel';
function JoinUs() {
  return (
      <div className="w-full flex justify-center h-joinus pt-24 min-h-screen border-b-2">
        <div className="">
            <div className="logo flex justify-center">
            <img src="/mainLOGO.png" alt="Logo" style={{ width: '100%', transform: 'scale(0.9)' }} />
            </div>
            <div className='flex justify-center'>
              <h1>
                <span className='p-5 text-4xl text-[#34A853]'>
                Collaborate
                </span> 
                <span className='p-5 text-4xl text-[#4285F4]'>
                Learn
                </span>
                <span className='p-5 text-4xl text-[#FBBC05]'>
                Explore
                </span>
                <span className='p-5 text-4xl text-[#EA4335]'>
                Create
                </span>
              </h1>
            </div>
            <div className='p-5 text-xl text-[#676E74] flex justify-center'>
              <p className='align-middle text-center'>Meet and learn with other developers and build solutions for<br/>
               communities with Google technology.</p>
            </div>
        </div>
    </div>
   
  
  );
}

export default JoinUs;
