import axios from 'axios';
import { useEffect,useState} from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Populares.css';
import styled from "styled-components";
import CustomPagination from "../../components/Pagination/CustomPagination"

//Styled components section cards
const CardContainer = styled.div`
  position: relative;
  flex: 0 0 calc(20% - 40px);
  margin: 36px 20px;
  display: flex;

  /* margin: 1.55vw 1vw; */

  border-radius: 10px 10px 0 0;
  transition: transform ease 300ms;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  color: white;


  :active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 3000px) {
    flex: 0 0 calc(18.2857% - 36px);
    margin: 24px 18px;
  }

  @media screen and (max-width: 1921px) {
    flex: 0 0 calc(18.6667% - 28px);
    margin: 22px 14px;
  }

  @media screen and (max-width: 1440px) {
    flex: 0 0 calc(20% - 20px);
    margin: 15px 10px;
  }

  @media screen and (max-width: 1025px) {
    flex: 0 0 calc(25% - 16px);
    margin: 10px 8px;
  }

  @media screen and (max-width: 779px) {
    flex: 0 0 calc(33.33% - 16px);
    margin: 10px 8px;
  }

  @media screen and (max-width: 361px) {
    /* flex: 1 0 33%; */
    flex: 0 0 calc(50% - 10px);
    margin: 10px 5px;
  }
`;


const Populares = () => {

    const [page, setPage] = useState(1)
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        console.log('process.env.REACT_APP_API_KEY')
        console.log(process.env.REACT_APP_API_KEY)
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
        
        setContent(data.results);
    }; 

    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    }, [page]);

    
 

    return (
        <CardContainer className='tarjetasEstilos'>
            {/* <span className="pageTitle"></span> */}
                {content && content.map((movie)=> (
                    <div>
                        <SingleContent
                        key={movie.id}
                        id={movie.id} 
                        poster={movie.poster_path} 
                        title={movie.title || movie.name} 
                        date={movie.first_air_date || movie.release_date } 
                        media_type={movie.media_type}
                        vote_average ={movie.vote_average}
                        />
                        
                        {/*<StyledTitle>{movie.title}</StyledTitle>*/}
                    </div>
                ))}
            <CustomPagination setPage={setPage}/>
        </CardContainer>
    )
}

export default Populares
