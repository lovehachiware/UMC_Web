import React from 'react';
import { MoviesContainer, CategoryTitle, MovieGrid, MovieCard, MovieImagePlaceholder } from './movieslist.style';
import nowplaying from '../image/nowplaying.jpeg';  // 소문자
import popular from '../image/popular.jpeg';
import toprated from '../image/toprated.jpeg';
import upcoming from '../image/upcoming.jpg';

const Movieslist = () => {
  return (
    <MoviesContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <MovieGrid>
        <MovieCard>
          <MovieImagePlaceholder src={nowplaying} alt="Now Playing" />  {/* 소문자 사용 */}
          현재 상영중인
        </MovieCard>
        <MovieCard>
          <MovieImagePlaceholder src={popular} alt="Popular" />  {/* 소문자 사용 */}
          인기있는
        </MovieCard>
        <MovieCard>
          <MovieImagePlaceholder src={toprated} alt="Top Rated" />  {/* 소문자 사용 */}
          높은 평가를 받은
        </MovieCard>
        <MovieCard>
          <MovieImagePlaceholder src={upcoming} alt="Upcoming" />  {/* 소문자 사용 */}
          개봉 예정중인
        </MovieCard>
      </MovieGrid>
    </MoviesContainer>
  );
};

export default Movieslist;
