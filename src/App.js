import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css'
import './styles/utilities.css'
import LandingGrid from './components/LandingGrid';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<LandingGrid />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
