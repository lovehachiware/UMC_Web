import React from 'react';
import * as S from './card.style.jsx';

const Card = ({ movie }) => {
  return (
    <S.CardContainer>
      <S.MoviePoster 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
      />
      <S.MovieTitle>{movie.title}</S.MovieTitle>
      <S.MovieReleaseDate>{movie.release_date}</S.MovieReleaseDate>
    </S.CardContainer>
  );
};

export default Card;
