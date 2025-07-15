
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css'
import Registro from './pages/Registros'
import Reflexiones from './pages/Reflexiones';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (//Aquí enrutamos todas las partes de la app
    <>
      <Router>
        <Routes>
          <Route
            element={//El default layout de momento es los botones para pasar de una pantalla a otra
              <DefaultLayout>
                <Outlet />
              </DefaultLayout>
            }
          >
            <Route path={"/"} element={<Registro />} /><Route path={"/registro"} element={<Registro />} />
            <Route path={"/reflexion"} element={<Reflexiones />} />
          </Route>
        </Routes>
      </Router>
    </>
  );

}

export default App
