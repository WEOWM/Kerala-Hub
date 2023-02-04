
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import DetailsPage from './Page/DetailsPage';

import Head from './Components/Header/Head'
import Footer from './Components/Footer/Footer';
import Cartng from './Page/CartingPage/Cartng';
import Popup from './Page/Popup/Popup';

function App() {
  return (
    <>
      <Popup />
      <Head />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/details/:id' element={<DetailsPage />} />
        <Route exact path='/cart' element={<Cartng />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
