
import Navbar from '../components/Navbar';
import JoinUs from '../components/JoinUs';
import AboutTheCommunity from '../components/AboutTheCommunity';
import ScrollingCircles from '../components/ScrollingCircles';
function Main() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <JoinUs></JoinUs>
      <AboutTheCommunity/>
      <ScrollingCircles/>
    </div>
  );
}

export default Main;
