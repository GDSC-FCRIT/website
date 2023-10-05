import '../style/joinUs.css'
function JoinUs() {
  return (
    <div className="joinUs">
        <div className="joinUsContent">
            <div className="logo">
            <img src="/logo.png" alt="Logo" style={{ height:'5rem' }} />
            </div>
            <div className="description">
                <h1> Google Developer Student Club</h1>
                <h2>FCRIT, Vashi</h2>
            </div>
            <div>
                <button className='joinUsBtn'>Join Us</button>
            </div>
        </div>

    </div>
  );
}

export default JoinUs;
