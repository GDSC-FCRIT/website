import './../style/joinus.css';
function JoinUsWel(){
    return (
        <div className="pb-28 bg-grey backdrop-blur-10 border-b border-solid border-joinus-blue">
        <div className="bg-grey backdrop-blur-10 w-full text-center p-joinus2 h-joinus2 flex justify-center">
            <div className="w-joinuswel block">
                <h1 className="text-joinuswel font-bold block mt-h1 mb-h1 ms-0 me-0">Welcome, to the Official Website of GDSC FCRIT.</h1>
                <p className="text-joinuswel-p block ms-0 me-0 mt-p mb-p">Meet and learn with other budding developers and build
                    solutions for local businesses and communities with Google technology.</p><br/>
                <a href="https://gdsc.community.dev/fr-conceicao-rodrigues-institute-of-technology-navi-mumbai/" className="join-us-button">
                    <b>Join the club</b>
                </a>
            </div>
        </div>
        </div>
    )
}
export default JoinUsWel;