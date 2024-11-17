import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useGetMovies } from "../hooks/queries/useGetMovies.js";
import Card from "@/components/card/card.jsx";
import * as S from "@/styles/movies.style.js";

const Popular = () => {
  const [page, setPage] = useState(1); // 페이지 상태 관리

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", "popular", page], // queryKey를 명확히 객체로 전달
    queryFn: () => useGetMovies({ category: "popular", pageParam: page }), // queryFn도 객체 내에서 전달
    keepPreviousData: true, // 이전 데이터 유지
  });

  if (isLoading) {
    return (
      <S.MovieGridContainer>
        <p>Loading...</p>
      </S.MovieGridContainer>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "red" }}>오류 발생!</h1>
      </div>
    );
  }

  return (
    <div>
      <S.CardList>
        {data?.results.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card movie={movie} />
          </Link>
        ))}
      </S.CardList>

      {/* Pagination 버튼 */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <button
  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
  disabled={page === 1}
  style={{
    marginRight: '10px',
    padding: '10px 20px',
    backgroundColor: page === 1 ? '#555' : '#d51a81',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: page === 1 ? 'not-allowed' : 'pointer',
  }}
>
  이전 페이지
  </button>
  <button
    onClick={() => setPage((prev) => prev + 1)}
    disabled={page === data.total_pages}
    style={{
      padding: '10px 20px',
      backgroundColor: page === data.total_pages ? '#555' : '#d51a81',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: page === data.total_pages ? 'not-allowed' : 'pointer',
    }}
  >
    다음 페이지
</button>

      </div>
    </div>
  );
};

export default Popular;
