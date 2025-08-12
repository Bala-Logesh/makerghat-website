import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
