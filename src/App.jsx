import Header from './components/Header';
import Home from './components/sections/Home';
import HowToUse from './components/sections/HowToUse';
import Options from './components/sections/Options';
import Guide from './components/sections/Guide';
import Errors from './components/sections/Errors';
import FAQ from './components/sections/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Home />
      <HowToUse />
      <Options />
      <Guide />
      <Errors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;