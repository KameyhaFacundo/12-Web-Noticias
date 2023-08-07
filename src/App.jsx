import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Container className="my-5 mainPage">
        <Titulo></Titulo>
        <Formulario></Formulario>
      </Container>
      <footer className="text-center bg-dark text-light py-4">
        <h2 className="fs-4">
          <a
            href="https://github.com/KameyhaFacundo"
            className="text-secondary"
          >
            Facundo Kameyha
          </a>
        </h2>
        <p className="fs-4">&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
