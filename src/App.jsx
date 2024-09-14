import { Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import { useDentistStates } from './Components/utils/globalContext'

import { routes } from './Components/utils/routes';

function App() {
  const {state} = useDentistStates()

  return (
      <div className={state.theme ? "dark" : "light" }>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.detail} element={<Detail />} />
            <Route path="*" element={<h1>Error 404 - Pagina no encontrada</h1>} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
