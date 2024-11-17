import React from "react";
import {
  MoviesContainer,
  CategoryTitle,
  MovieGrid,
  MovieCard,
  MovieImagePlaceholder,
} from "./movieslist.style";
import nowplaying from "../image/nowplaying.jpeg"; // 소문자
import popular from "../image/popular.jpeg";
import toprated from "../image/toprated.jpeg";
import upcoming from "../image/upcoming.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movieslist = () => {
  return (
    <MoviesContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <MovieGrid>
        <MovieCard>
          <Link to={"/movies/now-playing"}>
            <MovieImagePlaceholder src={nowplaying} alt="Now Playing" />
          </Link>
          {/* 소문자 사용 */}
          현재 상영중인
        </MovieCard>
        <MovieCard>
          <Link to={"/movies/popular"}>
            <MovieImagePlaceholder src={popular} alt="Popular" />{" "}
          </Link>
          {/* 소문자 사용 */}
          인기있는
        </MovieCard>
        <MovieCard>
          <Link to={"/movies/top-rated"}>
            <MovieImagePlaceholder src={toprated} alt="Top Rated" />{" "}
          </Link>
          {/* 소문자 사용 */}
          높은 평가를 받은
        </MovieCard>
        <MovieCard>
          <Link to={"/movies/upcoming"}>
            <MovieImagePlaceholder src={upcoming} alt="Upcoming" />{" "}
          </Link>
          {/* 소문자 사용 */}
          개봉 예정중인
        </MovieCard>
      </MovieGrid>
    </MoviesContainer>
  );
};

export default Movieslist;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
