import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <MainSections />
      <Footer />
    </div>
  );
}

export default App;
