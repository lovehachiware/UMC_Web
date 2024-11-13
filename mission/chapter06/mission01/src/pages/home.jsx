import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/card/card.jsx";
import * as S from "@/styles/movies.style.js";
import { getAPI } from "../../config.js"; // API 호출 설정 불러오기

const Home = () => {
  const [movies, setMovies] = useState([]); // 영화 데이터를 저장
  const [user, setUser] = useState(null); // 사용자 정보를 저장

  useEffect(() => {
    // 사용자 정보 가져오기
    const fetchUserData = async () => {
      try {
        let token = localStorage.getItem('accessToken'); // Access Token 가져오기

        if (!token) {
          throw new Error('로그인이 필요합니다.');
        }

        // 서버에 사용자 정보 요청
        const userResponse = await axios.get('http://localhost:3000/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(userResponse.data); // 사용자 정보 저장

      } catch (error) {
        if (error.response?.status === 401) {
          // 토큰 만료 시 Refresh Token으로 새 Access Token 발급
          try {
            const refreshToken = localStorage.getItem('refreshToken'); // Refresh Token 가져오기

            if (!refreshToken) {
              throw new Error('로그인이 필요합니다.');
            }

            const refreshResponse = await axios.post('http://localhost:3000/auth/refresh', {
              refreshToken,
            });

            const newAccessToken = refreshResponse.data.accessToken;

            // 새로 발급된 Access Token 저장
            localStorage.setItem('accessToken', newAccessToken);

            // 사용자 정보 다시 요청
            const userResponse = await axios.get('http://localhost:3000/auth/me', {
              headers: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            setUser(userResponse.data); // 사용자 정보 저장

          } catch (refreshError) {
            console.error('토큰 갱신 실패:', refreshError);
            alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
            window.location.href = '/login'; // 로그인 페이지로 이동
          }
        } else {
          console.error('유저 정보 불러오기 실패:', error);
          alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
          window.location.href = '/login'; // 로그인 페이지로 이동
        }
      }
    };

    // 영화 데이터 가져오기
    const getMovies = async () => {
      try {
        const options = getAPI(
          `${import.meta.env.VITE_BASE_URL}/movie/popular`,
          1
        );
        const response = await axios(options);
        setMovies(response.data.results); // 영화 데이터 저장
      } catch (error) {
        console.error("Error fetching the movies:", error);
      }
    };

    fetchUserData(); // 사용자 정보 가져오기
    getMovies();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Access Token 삭제
    localStorage.removeItem('refreshToken'); // Refresh Token 삭제
    alert('로그아웃 되었습니다.');
  };

  return (
    <>
      <S.CardList>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </S.CardList>
    </>
  );
};

export default Home;
