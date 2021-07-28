import React from 'react';
import { img_300, unavailable } from '../../config/config';
import "./SingleContent.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    return (
        <div className='media'>
            <img
            className="poster"
            src={poster ? `${img_300}${poster}` : unavailable}
            alt={title}
            />
            <b className="title"> {title} </b>
            <span className="subTitle">
                {media_type === "tv" ? "TV Series" : "Movie"}
                <span className="subTitle">{date}</span>
            </span>

            {vote_average !== 0 ? 
                <StyledRating>
                    <RatingIcon />
                    {vote_average}
                </StyledRating> 
                : 
                <span></span>
            }
        </div>
    )
};

export default SingleContent
