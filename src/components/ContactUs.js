import React from 'react'

const ContactUs = () => {
  return (
    <div className="text-center mx-12 mt-24">
      <div className='c1 text-left'>
        <h1 className="font-bold text-4xl mb-2">Contact Us</h1>
        <p className="text-lg text-gray-600">Have any queries? Pin us here or follow our socials.</p>
      </div>

      <div className="flex flex-col items-center mt-8">
        <h1 className="font-bold text-3xl mb-2 text-gray-600">Stay in Touch</h1>
        <div className="grid gap-24 my-16 md:grid-cols-3">
          <a href="https://www.instagram.com/gdscfcrit/">
            <div className="flex justify-center">
              <img src="/footer/insta.png" alt="Instagram" className="w-36 h-36" />
            </div>
          </a>
          <a href="https://linkedin.com/company/gdsc-fcrit/">
            <div className="flex justify-center">
              <img src="/footer/link.png" alt="Linkedin" className="w-36 h-36" />
            </div>
          </a>
          <a href="https://github.com/GDSC-FCRIT">
            <div className="flex justify-center">
              <img src="/footer/github.png" alt="Github" className="w-36 h-36" />
            </div>
          </a>
          <a href="https://twitter.com/gdscfcrit">
            <div className="flex justify-center">
              <img src="/footer/twi.png" alt="Twitter" className="w-36 h-36" />
            </div>
          </a>
          <a href="https://discord.com/invite/vxmxQNtvD9">
            <div className="flex justify-center">
              <img src="/footer/discord.png" alt="Discord" className="w-36 h-36" />
            </div>
          </a>
          <a href="https://gdsc.community.dev/fr-conceicao-rodrigues-institute-of-technology-navi-mumbai/">
            <div className="flex justify-center">
              <img src="/footer/gdsc.png" alt="Logo" className="w-36 h-36" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
