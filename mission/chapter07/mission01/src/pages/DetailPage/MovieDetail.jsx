import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/axios-instance";
import "./MovieDetail.css";

const useGetMovies = async ({ category, endpoint = '' }) => {
  const url = endpoint
    ? `/movie/${category}/${endpoint}?language=ko-KR`
    : `/movie/${category}?language=ko-KR`;

  const { data } = await axiosInstance.get(url);
  return data;
};

const MovieDetail = () => {
  const { movieId } = useParams();

  // 영화 상세 데이터 패칭
  const { data: movie, isError: movieError, isLoading: movieLoading } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => useGetMovies({ category: movieId }),
  });

  // 캐스팅 정보 패칭
  const { data: credits, isError: creditsError, isLoading: creditsLoading } = useQuery({
    queryKey: ['credits', movieId],
    queryFn: () => useGetMovies({ category: movieId, endpoint: 'credits' }),
  });

  if (movieLoading || creditsLoading) {
    return (
      <div>
        <h2 style={{ color: '#98ff98' }}>로딩 중... 기다려주세요 *_*</h2>
      </div>
    );
  }

  if (movieError || creditsError) {
    return (
      <div>
        <h2 style={{ color: '#ff4d4d' }}>헉! 오류가 발생했습니다!</h2>
      </div>
    );
  }

  const cast = credits?.cast || [];

  return (
    <div className="MovieDetailContainer">
      <div className="MovieDetailHeader">
        <img
          src={movie?.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : '/placeholder.jpg'}
          alt={movie?.title || '영화 이미지 없음'}
          className="MovieBackground"
        />
        <div className="MovieDetailContent">
          <h1>{movie?.title || '제목 정보 없음'}</h1>
          <p>평점: {movie?.vote_average || '정보 없음'}</p>
          <p>개봉 연도: {movie?.release_date || '정보 없음'}</p>
          <p>상영 시간: {movie?.runtime || '정보 없음'}분</p>
          <p>{movie?.overview || '설명 없음'}</p>
        </div>
      </div>

      <h2>감독/출연</h2>
      <div className="MovieCast">
        {cast.slice(0, 10).map((member) => (
          <div key={member.cast_id} className="CastMember">
            <img
              src={member.profile_path
                ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                : '/placeholder-cast.jpg'}
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
