import React from 'react';
import '../style/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footerDiv">
        <div className='footer-top'>
        <img src="/code.png" alt="Code" />
        <img src="/footer-txt.png" alt="Footer Text" className='footer-txt' />
        </div>
        <h2>Stay in Touch</h2>
        <div className="footer-socials">
          <a target='_blank' href="https://gdsc.community.dev/fr-conceicao-rodrigues-institute-of-technology-navi-mumbai/"><img src="/code.png" alt="Code" /></a>
          <a target='_blank' href="https://www.instagram.com/gdscfcrit/"><img src="/insta.png" alt="Instagram" /></a>
          <a target='_blank' href="https://discord.com/invite/vxmxQNtvD9"><img src="/discord.png" alt="Discord" /></a>
          <a target='_blank' href="https://twitter.com/gdscfcrit"><img src="/twitter.png" alt="Twitter" /></a>
          <a target='_blank' href="https://www.linkedin.com/company/gdsc-fcrit/"><img src="/linkedin.png" alt="LinkedIn" /></a>
          <a target='_blank' href="https://github.com/GDSC-FCRIT"><img src="/github.png" alt="GitHub" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;