import '../style/footer.css';
function Footer(){
    return(
        <div className="bg-footer min-h-30 p-8 pl-14 ">
            <div className='footerContainerLogo'>
                <div className="footerLogo">
                    <img src="/footer/logo.png" className='p-1 logoImg' alt="Logo" style={{ height:'4rem' }} />
                    <img src="/footer/logoContent.png" className='p-1 contentImg' alt="Logo" style={{ width:'25rem' }} />
                </div>
                <div className='logos'>
                    <h2 className='pl-2'>Stay in touch</h2>
                    <div className='logosDiv'>
                        <a href=''><img src='/footer/insta.png' alt='insta'className='p-1'/></a>
                        <a href=''><img src='/footer/link.png' alt='insta' className='p-1'/></a>
                        <a href=''><img src='/footer/twi.png' alt='insta'className='p-1'/></a>
                        <a href=''><img src='/footer/discord.png' alt='insta' className='p-1'/></a>
                        <a href=''><img src='/footer/github.png' alt='insta'className='p-1 github' /></a>
                        <a href=''><img src='/footer/gdsc.png' alt='insta' className='p-1'/></a>
                    </div>
                </div>
            </div>
            <div className='footerContainer'>
            <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJq8XY4MrG5zsR2KIsZh1I9Ls&key=AIzaSyDt8h-rzbLkYfyBCGUMqhUGPMLllcRlORo" width="320" height="180" style={{border:'1px solid black'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

            </div>


        </div>
    )
}
export default Footer;