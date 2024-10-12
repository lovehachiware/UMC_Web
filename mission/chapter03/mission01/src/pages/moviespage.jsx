import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@/components/card/card.jsx';
import * as S from "@/styles/movies.style.js";
import Movieslist from './movieslist';  // 영화 목록 기본 카테고리 컴포넌트 가져오기
import { getAPI } from "../../config.js";  // API 호출 설정 불러오기

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const options = getAPI(`${import.meta.env.VITE_BASE_URL}/movie/popular`, 1);  // API URL 및 페이지 설정
                const response = await axios(options);  // axios로 요청 보내기
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching the movies:", error);
            }
        };
        getMovies();
    }, []);
    
    return (
        <>
            <Movieslist />  {/* 영화 카테고리 및 기본 정보 */}
            <S.CardList>
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </S.CardList>
        </>
    );
};

export default MoviesPage;
