
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import DetailsPage from './Page/DetailsPage';

import Head from './Components/Header/Head'

function App() {
  return (
    <>
      <Head/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/details/:id' element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
