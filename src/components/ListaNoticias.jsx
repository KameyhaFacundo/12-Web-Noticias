import { Container } from "react-bootstrap";
import Noticias from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <Container className="row justify-content-center">
      {noticias.map((noticia, index) => (
        <Noticias noticia={noticia} key={index} className="col-lg-2 col-md-4" />
      ))}
    </Container>
  );
};

export default ListaNoticias;
