import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MoviesCard from "../../components/MoviesCard/index"

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


  const fetchMoviesByGenre = async (selectedGenres) => {
    const mySelectedGenres = selectedGenres ? selectedGenres : '';
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&languaje=en-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${mySelectedGenres}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  //Cuando se carga la pagina busco todos los generos que existen en mi api y cargo mi combo
  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    fetchMoviesByGenre(selectedGenres ? selectedGenres.id : '');
  }, [selectedGenres]);

  return (
    <div className='trending'>
      <Autocomplete
        id="combo-box-demo"
        options={genres}
        getOptionLabel={(option) => option.name}
        style={{ width: '19%', borderRadius: '14px' ,backgroundColor: 'dimgrey', marginLeft: 'auto'}}
        renderInput={(params) => (
          <TextField {...params} label="Géneros" variant="outlined" />
        )}
        onChange={(event, newValue) => {
          setSelectedGenres(newValue);
        }}
        className="autocompleted-genres"
      />
      <MoviesCard content={content} setPage={setPage} numOfPages={numOfPages}></MoviesCard>
    </div>
  );
};

export default Movies;
