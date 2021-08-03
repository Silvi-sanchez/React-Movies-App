import axios from 'axios';
import { useEffect,useState} from 'react';
import MoviesCard from "../../components/MoviesCard/index"

const Populares = () => {

    const [page, setPage] = useState(1)
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchTrending = async () => {
        console.log('process.env.REACT_APP_API_KEY')
        console.log(process.env.REACT_APP_API_KEY)
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
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
        <MoviesCard content={content} setPage={setPage} numOfPages={numOfPages}></MoviesCard>
      </div>
    )
}

export default Populares
