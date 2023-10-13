function CommunityGuide(){
    return(
        <div className="flex justify-center min-h-40 p-features bg-features text-white">
            <div className="text-center w-community block">
            <h1 className='block text-faq mt-h1 mb-h1 ms-0 me-0 font-bold'>Our Community Guidelines</h1>
            <p className='block mt-p mb-p ms-0 me-0'>
            Google is dedicated to providing a harassment-free and inclusive event experience for
             everyone r regardless of gender identity and expression, sexual orientation, disabilities,
              neurodiversity, physical appearance, size, ethnicity, nationality, race, age, religion, or 
              other protected category.
            </p><br></br>
            <button className="bg-joinus-blue p-joinus text-white rounded-2xl border-0 border-solid border-black text-joinus-font tracking-normal leading-normal normal-case indent-0 inline-block text-center cursor-default box-border m-button">Read the Guidelines</button>
            </div>
        </div>
    )
}
export default CommunityGuide;