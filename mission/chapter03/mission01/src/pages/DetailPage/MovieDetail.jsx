import React from "react";
import { useParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data, isError, isLoading } = useCustomFetch(`/movie/${movieId}?language=ko-KR`);
  const { data: credits } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);

  if (isLoading) {
    return <div>
        <h2 style={{ color: '#98ff98' }}>로딩중이여요...기다려주세요*_*</h2>
        </div>;
  }

  if (isError) {
    return <div>
        <h2 style={{ color: '#ff4d4d' }}>헉!!!에러 발생!!!</h2></div>;
  }

  const movie = data;
  const cast = credits?.cast || [];

  return (
    <div className="MovieDetailContainer">
      <div className="MovieDetailHeader">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="MovieBackground"
        />
        <div className="MovieDetailContent">
          <h1>{movie.title}</h1>
          <p>평점: {movie.vote_average}</p>
          <p>개봉 연도: {movie.release_date}</p>
          <p>상영 시간: {movie.runtime}분</p>
          <p>{movie.overview}</p>
        </div>
      </div>

    <h2>감독/출연</h2>
      <div className="MovieCast">
        {cast.slice(0, 10).map((member) => (
          <div key={member.cast_id} className="CastMember">
            <img
              src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
              alt={member.name}
              className="CastPhoto"
            />
            <div className="CastName">{member.name}</div>
            <div className="CastRole">{member.character}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
