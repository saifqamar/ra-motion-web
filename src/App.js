import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeBlock from './components/HomeBlock';
import SMBs from './components/SMBs';
import LetsChat from './components/LetsChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <div className=''>
        <Header />
        <Hero />
        <HomeBlock />
        <SMBs />
        <LetsChat />
        <Footer />
      </div>
    </div>
  );
}

export default App;
