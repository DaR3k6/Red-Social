import BarraNavegacion from "./components/barraNavegacion";
import ContenidoPrincipal from "./components/contenidoPrincipal";
import SugerenciaContactos from "./components/sugerenciasContactos";
function App() {
  return (
    <>
      <div class="app-container">
        <nav className="red-social-navbar">
          <BarraNavegacion />
        </nav>
        <div className="contenido-principal">
          <ContenidoPrincipal />
        </div>
        <div className="sugerencia-contactos">
          <SugerenciaContactos />
        </div>
      </div>
    </>
  );
}

export default App;
