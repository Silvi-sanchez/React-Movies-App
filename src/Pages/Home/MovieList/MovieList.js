import React from 'react';
import { List, Avatar, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { RightOutlined } from '@ant-design/icons';

import './MovieList.css';

const MovieList = props => {

    const {title, movies} = props;

    if(movies.loading || !movies.result){
        return <Loading />
    }

    return (
        <List 
            className="movie-list"
            size="default"
            header={<h2>{title}</h2>}
            bordered
            dataSource={movies.result.results}
            renderItem={movie => <RenderMovie movie={movie} />}
        />
    );
}

const RenderMovie = props => {
    const {
         movie :{
            poster_path,
            id,
            title
        } 
    } = props;

    const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`

    return(
      <List.Item className="list-movie__movie">
        <List.Item.Meta 
          avatar={ <Avatar src={posterPath} />}
          title={ <Link to={`/movie/${id}`}>{title}</Link> }
        />
        <Link to={`/movie/${id}`}>
        <Button 
            className="boton-info"
            type="secundary" 
            shape="circle" 
            icon={<RightOutlined />} 
        /> 
        </Link> 
      </List.Item>
    )
}

export default MovieList;
