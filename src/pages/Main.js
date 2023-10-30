
import JoinUs from '../components/JoinUs';
import Features from '../components/Features';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import ScrollingCircles from '../components/ScrollingCircles';
import HowWeDo from '../components/HowWeDo';
import CommunityGuide from '../components/CommunityGuide';
import AboutCommunity from '../components/AboutCommunity';
import Join from '../components/Join';
import FeaturedEvent from '../components/FeaturedEvent';
function Main() {
  return (
    <div className="block">
      <JoinUs></JoinUs>
      {/* <Features/> */}
      <AboutCommunity/>
      <CommunityGuide/>
      <HowWeDo/>
      <FeaturedEvent />
      <Join/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default Main;
