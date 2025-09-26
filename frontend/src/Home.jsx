import Header from './components/Header';
// import Hero from './components/Hero';
import Icons from './components/Icons';
import HeroTwo from './components/HeroTwo';
import SjSoftechLogo from './components/SjSoftechLogo';
import Services from './components/Services';
import AbouUs from './components/AbouUs';
import Contact from './components/Contact';
import MissionVission from './components/MissionVission';
import Blog from './components/Blog';
import Footer from './components/Footer';
// import TopHeadBar from './components/TopHeadBar';
// import TopHeadBar from './components/TopHeadBar';
const Home = () => {
  return (
   <>
   
   
    <Header className="position-absolute start-5 left-0" />
    {/* <TopHeadBar/> */}
    {/* <TopHeadBar/> */}
   <div className="position-relative">
    <HeroTwo/>
    {/* <Hero/> */}
    <SjSoftechLogo/>
    <Services/>
    <AbouUs/>
    <Contact/>
    <MissionVission/>
    <Blog/>
    <Footer/>
    < Icons/>
    </div>
   </>
  )
}

export default Home