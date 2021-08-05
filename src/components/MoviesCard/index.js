import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from "../../components/Pagination/CustomPagination"


const MoviesCard = ({content, setPage, numOfPages, type='movie'}) => {
    return (
        <div className="trending">
                {content && content.map((movie)=> (
                        <SingleContent
                        key={movie.id}
                        id={movie.id} 
                        poster={movie.poster_path} 
                        title={movie.title || movie.name} 
                        date={movie.first_air_date || movie.release_date } 
                        media_type={type}
                        vote_average ={movie.vote_average}
                        />
                ))}
            {numOfPages > 1 && (
              <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    )
}

export default MoviesCard
