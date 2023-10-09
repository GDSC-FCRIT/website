// import '../style/joinUs.css'
import JoinUsWel from './JoinUsWel';
function JoinUs() {
  return (
    <div className='block'>
      <div className="w-full flex justify-center h-joinus pt-32">
        <div className="w-full h-joinus flex rounded-tl-joinus-left rounded-tr-joinus-right justify-center flex-col items-center text-center bg-grey backdrop-blur-10 border border-solid border-joinus-grey shadow-joinus pb-80 pt-56">
            <div className="logo">
            <img src="/joinUsLogo.png" alt="Logo" style={{ width:'100%' }} />
            </div>
        </div>
    </div>
    <JoinUsWel/>
    </div>
   
  );
}

export default JoinUs;
