import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import B2B from './pages/B2B';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="b2b" element={<B2B />} />
      </Routes>
    </BrowserRouter>
    // <div className='container'>
    //   <div className=''>
    //     <Header />
    //     <Hero />
    //     <HomeBlock />
    //     <SMBs />
    //     <LetsChat />
    //     <Footer />
    //   </div>
    // </div>
  );
}

export default App;
