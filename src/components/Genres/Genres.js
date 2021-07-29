/* eslint-disable no-use-before-define */
import axios from "axios";
import { useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import './Genres.css';

const GenresFilms = [
  { title: 'Action' },
  { title: 'Adventure'},
  { title: 'Animation' },
  { title: 'Comedy'},
  { title: 'Crime'},
  { title: 'Documentary'},
  { title: 'Drama' },
  { title: 'Family'},
  { title: 'Fantasy'},
  { title: 'History'},
  { title: 'Music'},
  { title: 'Mystery'},
  { title: 'Romance' },
  { title: 'Science Fiction'},
  { title: 'TV Movie'},
  { title: 'Thriller' },
  { title: 'War'},
  { title: 'Western'}
]

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,

}) => {

const handleAdd=(genre) => {
  setSelectedGenres([...selectedGenres, genre]);
  setGenres(genres.filter((g) => g.id !== genre.id));
  setPage(1);
}

const handleRemove=(genre) => {
  setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
  setGenres([...genres, genre]);
  setPage(1);
}

const fetchGenres = async () => {
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );

  setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({});
      }
  }, []);
    

  
  return (
    <div>
    {selectedGenres && 
     selectedGenres.map((genre) => (
      <Autocomplete
        id="combo-box-demo"
        options={GenresFilms}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Géneros" variant="outlined" />}
        key ={genre.id}
        clickable
        color='primary'
        onDelete={() => handleRemove(genre)}
        // className ='autocompleted-genres'
      />
    ))}


    {selectedGenres && 
     selectedGenres.map((genre) => (
      <Autocomplete
        id="combo-box-demo"
        options={GenresFilms}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Géneros" variant="outlined" />}
        key ={genre.id}
        clickable
        color='primary'
        onChange={()=> handleAdd(genre)}
        // className ='autocompleted-genres'
      />
      ))}


    </div>
  );
}
  
export default Genres