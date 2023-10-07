
import Navbar from '../components/Navbar';
import JoinUs from '../components/JoinUs';
import Features from '../components/Features';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import ScrollingCircles from '../components/ScrollingCircles';
function Main() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <JoinUs></JoinUs>
      <Features/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default Main;
