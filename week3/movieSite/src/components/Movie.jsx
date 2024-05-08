import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MovieDetail from "./MovieDetail";

const Wrapper = styled.div`
  background-color: rgb(70, 70, 130);
  height: 350px;
  width: 180px;
  border-radius: 5px;
  margin: 5px;
  position: relative;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  height: 270px;
  width: 180px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  width: 120px;
  margin: 5px 10px;
  font-size: 13px;
  color: white;
`;

const VoteAverage = styled.span`
  margin: 5px 10px 5px 0px;
  font-size: 13px;
  color: white;
`;

const Movie = ({ id, poster_path, title, overview, vote_average }) => {
  const [showDetail, setShowDetail] = useState(false);
  const navigate = useNavigate();

  const openDetail = () => setShowDetail(true);
  const closeDetail = () => setShowDetail(false);

  const navigateToDetailPage = () => {
    navigate(`/movie/${id}`); // 동적 라우팅으로 해당 영화의 상세 정보 페이지로 이동
  };

  return (
    <Wrapper onMouseOver={openDetail} onMouseOut={closeDetail} onClick={navigateToDetailPage}>
      <Image src={poster_path} alt={title} />
      <MovieInfo>
        <Title>{title}</Title>
        <VoteAverage>{vote_average}</VoteAverage>
      </MovieInfo>
      {showDetail && <MovieDetail title={title} overview={overview} />}
    </Wrapper>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired
};

export default Movie;