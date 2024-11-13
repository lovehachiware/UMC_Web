import React from "react";
import useCustomFetch from "../hooks/useCustomFetch.js";
import { Link } from "react-router-dom";
import Card from "@/components/card/card.jsx";
import * as S from "@/styles/movies.style.js";
import CardListSkeleton from "../components/card/Skeleton/card-list-skeleton.jsx";

const NowPlaying = () => {
  const { data, isError, isLoading } = useCustomFetch(`/movie/now_playing?language=ko-kr`);

  if (isLoading) {
    return (
        <S.MovieGridContainer>
            <CardListSkeleton number={20}/>
        </S.MovieGridContainer>
    )
}

  if (isError) {
    return (
      <div>
        <h1 style={{ color: 'red' }}>오류 발생햇어용 삐용삐용!!!</h1>
      </div>
    );
  }

  return (
    <S.CardList>
      {data?.results?.length > 0 ? (
        data.results.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card movie={movie} />
          </Link>
        ))
      ) : (
        <p style={{ color: 'red' }}>영화 데이터를 불러오지 못했습니다.</p>
      )}
    </S.CardList>
  );
};

export default NowPlaying;
