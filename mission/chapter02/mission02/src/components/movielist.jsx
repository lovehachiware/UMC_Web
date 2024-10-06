import React from 'react';
import MovieInfo from './movieinfo';
import { MOVIES } from '../mocks/movies';

function MovieList() {
  // 클릭 이벤트 정의
  const onMovieClick = (movie) => {
    alert(`영화 제목: ${movie.title}\n평점: ${movie.vote_average}`);
  };

  return (
    <div className="movie-list">
      {MOVIES.results.map((movie) => (
        <MovieInfo
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          poster={movie.poster_path}
          rating={movie.vote_average}
          releaseDate={movie.release_date}
          onClick={() => onMovieClick(movie)} // onClick에 'onMovieClick' 함수 연결
        />
      ))}
    </div>
  );
}

export default MovieList;
