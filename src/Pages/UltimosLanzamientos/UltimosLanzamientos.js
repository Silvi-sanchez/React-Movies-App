import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
//import useGenre from "../../hooks/useGenre";
import CustomPagination from "../../components/Pagination/CustomPagination";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = ""; //useGenre(selectedGenres);
  // console.log(selectedGenres);

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&languaje=en-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  /*
  const fetchMoviesByGenre = useCallback(async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&languaje=en-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${selectedGenres}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  }, [page, selectedGenres]);
  */

  const fetchMoviesByGenre = async (selectedGenres) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&languaje=en-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${selectedGenres}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  //Cuando se carga la pagina busco todos los generos que existen en mi api y cargo mi combo
  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres([]);
    };
  }, []);

  useEffect(() => {
    fetchMoviesByGenre(selectedGenres ? selectedGenres.id : '');
  }, [selectedGenres]);


  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className='lanzamientosEstilos'>
      {/* <span className="pageTitle">Discover Movies</span> */}
      <Autocomplete
        id="combo-box-demo"
        options={genres}
        getOptionLabel={(option) => option.name}
        style={{ width: '19%', borderRadius: '30px' ,backgroundColor: 'dimgrey'}}
        renderInput={(params) => (
          <TextField {...params} label="Géneros" variant="outlined" />
        )}
        onChange={(event, newValue) => {
          setSelectedGenres(newValue);
        }}
        className="autocompleted-genres"
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
