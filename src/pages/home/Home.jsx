import '../../ui/styles/globals.css'
import './style.css'
import Testimonials from '../../ui/components/testimonials/Testimonials';
import HeaderSection from '../../ui/components/headersection/HeaderSection';
import LogoClouds from '../../ui/components/logoclouds/LogoClouds';

const Home = () => {
  
    return (
        <div className="container">
            <HeaderSection />
            <Testimonials />
            <LogoClouds />
        </div>
    );
  };
export default Home;