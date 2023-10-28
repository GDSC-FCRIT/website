
import Navbar from '../components/Navbar';
import JoinUs from '../components/JoinUs';
import Features from '../components/Features';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import ScrollingCircles from '../components/ScrollingCircles';
import HowWeDo from '../components/HowWeDo';
import CommunityGuide from '../components/CommunityGuide';
import AboutCommunity from '../components/AboutCommunity';
function Main() {
  return (
    <div className="block">
      <Navbar></Navbar>
      <JoinUs></JoinUs>
      {/* <Features/> */}
      <AboutCommunity/>
      <CommunityGuide/>
      <HowWeDo/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default Main;
