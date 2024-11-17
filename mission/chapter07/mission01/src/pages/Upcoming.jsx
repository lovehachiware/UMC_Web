import React from "react";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetMovies } from "../hooks/queries/useGetMovies.js";
import Card from "@/components/card/card.jsx";
import * as S from "@/styles/movies.style.js";
import CardListSkeleton from "../components/card/Skeleton/card-list-skeleton.jsx";
import { useInView } from "react-intersection-observer";
import { BeatLoader } from "react-spinners";

const Upcoming = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
  } = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) =>
      useGetMovies({ category: "upcoming", pageParam }),
    queryKey: ["movies", "upcoming"],
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isPending) {
    return (
      <S.MovieGridContainer>
        <CardListSkeleton number={20} />
      </S.MovieGridContainer>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "red" }}>오류 발생햇어용 삐용삐용!!!</h1>
      </div>
    );
  }

  return (
    <S.CardList>
      {data?.pages.map((page) =>
        page.results.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card movie={movie} />
          </Link>
        ))
      )}

      {isFetchingNextPage && <CardListSkeleton number={20} />}

      <div ref={ref} style={{ textAlign: "center", padding: "10px 0" }}>
        {isFetchingNextPage && <BeatLoader color="#d51a81" />}
      </div>
    </S.CardList>
  );
};

export default Upcoming;
