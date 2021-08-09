import React from 'react';
import { img_300 } from '../../config/config';
import unavailable from '../../images/notFound.jpg';

import "./SingleContent.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { /*useHistory,*/ Link } from "react-router-dom";

const StyledRating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.25rem;
  padding: 0.3rem;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.808);
`;
const RatingIcon = styled(FontAwesomeIcon).attrs({ icon: faStar })`
  color: gold;
  margin: 0 0.25rem 0 0;
`;

const StyledTitle = styled.h5`
  position: absolute;
  bottom: 0;
  margin-bottom: 2.5%;
  padding: 0rem;
  background-color: rgba(0, 0, 0, 0.6);
  width: 96%;
  color: white;
  text-align: center;
`;

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  /*
  forma javascriptera

  let history = useHistory();

  const handleClick = (e, id) => {
    e.preventDefault();
    history.push(`/movie/${id}`);
  };
  */

  return (
    <Link to={`/${media_type}/${id}`}>
      <div className="media" /*onClick={(event) => handleClick(event, id)}*/>
        <img
          className="poster"
          src={poster && poster !== '' ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        {vote_average !== 0 ? (
          <StyledRating>
            <RatingIcon />
            {vote_average}
          </StyledRating>
        ) : (
          <span></span>
        )}


            {<StyledTitle>
                {title}
                <span className="subTitle">{date}</span>
            </StyledTitle>}
        </div>
        </Link>
    )

};

export default SingleContent;
