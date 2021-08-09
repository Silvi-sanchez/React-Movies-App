import axios from 'axios';
import { useEffect,useState} from 'react';
import MoviesCard from "../../components/MoviesCard/index"

const Series = () => {

    const [page, setPage] = useState(1)
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
            );
        
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }; 

    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    }, [page]);

    return (
      <div className='trending'>
        <MoviesCard content={content} type='tv' setPage={setPage} numOfPages={numOfPages}></MoviesCard>
      </div>
    )
}

export default Series




