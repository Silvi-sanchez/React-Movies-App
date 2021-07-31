import { Carousel, Button } from "antd";
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import Loading from "../Loading";

import "./SliderMovies.css";

const SliderMovies = (props) => {
 
  const { movies } = props;

  if (movies.loading || !movies.result) {
    return <Loading />;
  }

  const { results } = movies.result;

  return (
    <Carousel autoplay className="slider-movies">
      {results.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
    </Carousel>
  );
};

const Movie = (props) => {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;

  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div className="div-info">
          <h2 className="titulo">{title}</h2>
          <p className="parrafo">{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button className="boton" type="danger">Ver mas... </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderMovies;
