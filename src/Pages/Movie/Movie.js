import React, {useState  } from 'react';
import { Row, Col, Button } from 'antd'
import 'antd/dist/antd.css';
import { useParams } from 'react-router-dom'
import moment from 'moment'
import useFetch from '../Home/hooks/useFetch'
import Loading from '../Home/Loading'
import VideoModal from '../../components/VideoModal/VideoModal';

import './Movie.css'

const REACT_APP_API_KEY = '9c0cae2349f71e57d0b415386e382c68';
const URL_API = 'https://api.themoviedb.org/3';

const Movie = () => {
  const {id} = useParams()
  const movieInfo = useFetch(`${URL_API}/movie/${id}?api_key=${REACT_APP_API_KEY}&language=es-ES`)

  if(movieInfo.loading  || !movieInfo.result){
    return <Loading />
  }

  return <RenderMovie movieInfo={movieInfo.result}/>
}


const RenderMovie = props => {
  const { movieInfo: {
            backdrop_path, 
            poster_path 
        } 
  } = props

  const backdropPath = `https://image.tmdb.org/t/p/original//${backdrop_path}`

   return (
    <div 
        className="movie" 
        style={{ backgroundImage:`url("${backdropPath}")` }}
    >
      <div className="movie__dark" />
      <Row className="row-movie">
        <Col span={8} offset={3} className="movie__poster">
          <PosterMovie image= {poster_path} />
        </Col>
        <Col span={11} className="movie__info">
          <MovieInfoComponent movieInfo={props.movieInfo} />
        </Col>
      </Row>
    </div>
  )
}

const PosterMovie = props => {
  const { image } = props
  const posterPath = `https://image.tmdb.org/t/p/original/${image}`
  return <div style={{ backgroundImage: `url("${posterPath}")` }} />
}

const MovieInfoComponent = props => {
  const { movieInfo: {
    title, 
    id, 
    release_date, 
    overview, 
    genres 
    } 
  } = props

  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const videoMovie = useFetch(`${URL_API}/movie/${id}/videos?api_key=${REACT_APP_API_KEY}&languaje=es-ES`); 

  const openModal = () => setIsVisibleModal(true)
  const closeModal = () => setIsVisibleModal(false)

  const renderVideo = () => {
    if(videoMovie.result){
      if(videoMovie.result.results.length > 0){
        return (
          <div>
            <Button className="boton-trailer" onClick={openModal}>
              Ver Trailer
            </Button>
            <VideoModal  
              videoKey = {videoMovie.result.results[0].key}
              videoPlatform = {videoMovie.result.results[0].site}
              isOpen = {isVisibleModal}
              close={closeModal}
            /> 
          </div>
        )
      }
    }
  }

  return (
    <div> 
      <div className="movie__info-header">
        <h1 className="titulo-info-header">{title}
          <span className="span-info-header">{moment(release_date, "YYYY-MM-DD").format("YYYY") }</span>
        </h1>
        
        {renderVideo()}
      </div>
      <div className="movie__info-content">
        <h3 className="letras-info">General</h3>
          <p className="parrafo-info">{overview}</p>
        <h3 className="letras-info">Géneros</h3>
        <ul className="parrafo-info">
          {genres.map(gen => (
            <li key={gen.id} >{gen.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Movie;