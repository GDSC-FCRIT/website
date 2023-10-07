
import Navbar from '../components/Navbar';
import JoinUs from '../components/JoinUs';
import AboutTheCommunity from '../components/AboutTheCommunity';
import Features from '../components/Features';
import ScrollingCircles from '../components/ScrollingCircles';
function Main() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <JoinUs></JoinUs>
      <Features/>
      <AboutTheCommunity/>
    
    </div>
  );
}

export default Main;
