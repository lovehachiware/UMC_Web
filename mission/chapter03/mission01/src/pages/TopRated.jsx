import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/card/card.jsx";
import * as S from "@/styles/movies.style.js";
import { getAPI } from "../../config.js"; // API 호출 설정 불러오기
const TopRated = () => {
  const [response, setResponse] = useState();
  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: { language: "ko-KR", page: "1" },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
          },
        }
      );
      setResponse(res);
    };
    getApi();
  }, []);
  return (
    <>
      <S.CardList>
        {response &&
          response.data.results.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </S.CardList>
    </>
  );
};

export default TopRated;
