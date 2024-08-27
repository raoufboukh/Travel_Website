import Destination from './components/Destination/destination';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import {Routes,Route} from 'react-router';
import AOS from "aos";
import 'aos/dist/aos.css';
import { Details } from './components/details/details';
AOS.init({
  duration:1000
})
function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={
      <>
        <Home/>
        <Destination/>
        <Footer/>
      </>
    }/>
    <Route path='details/:id' element={<Details/>}/>
    </Routes>
    </>
  );
}

export default App;
