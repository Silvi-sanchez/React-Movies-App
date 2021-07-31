import useFetch from './hooks/useFetch';
import { Row, Col } from 'antd';

import SliderMovies from './SliderMovies';
import MovieList from './MovieList';

const REACT_APP_API_KEY = '9c0cae2349f71e57d0b415386e382c68'
const URL_API = 'https://api.themoviedb.org/3'

const Home = () => {
    const url = `${URL_API}/movie/now_playing?api_key=${REACT_APP_API_KEY}&language=en-ES&page=1`
    const urlPopular = `${URL_API}/movie/popular?api_key=${REACT_APP_API_KEY}&language=en-ES&page=1`
    const urlRanked = `${URL_API}/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-ES&page=1`
   
    const newMovies = useFetch(url);
    const popularMovies = useFetch(urlPopular);
    const topRankedMovies = useFetch(urlRanked);


    return (
        <div>
            <SliderMovies movies={newMovies} />
            <Row>
                <Col span={12}>
                    <MovieList title="Películas Populares" movies={popularMovies} />
                </Col>
                <Col span={12}>
                    <MovieList title="Top Mejores Películas" movies={topRankedMovies} />
                </Col>
            </Row> 

        </div>
    )
}

export default Home