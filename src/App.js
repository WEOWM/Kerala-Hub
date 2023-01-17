
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import DetailsPage from './Page/DetailsPage';

import Head from './Components/Header/Head'
 import SingPage from './Page/SingPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    
      <Head/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/details/:id' element={<DetailsPage />} />
        <Route exact path='/singe/:id' element={<SingPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
