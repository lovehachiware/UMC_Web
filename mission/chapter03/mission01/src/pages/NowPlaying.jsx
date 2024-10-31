import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/card/card.jsx";
import * as S from "@/styles/movies.style.js";
import { getAPI } from "../../config.js"; // API 호출 설정 불러오기
import { axiosInstance } from "../apis/axios-instance.js";
import useCustomFetch from "../hooks/useCustomFetch.js";

const NowPlaying = () => {
  const {data,isError,isLoading} = useCustomFetch(`/movie/now_playing?language=ko-kr`);
 
   if (isLoading) {
     return (
       <div>
         <h1 style={{ color: 'white' }}>로딩 중이랍니다...기다리세용</h1>
       </div>
     );
   }
 
   if (isError) {
     return (
       <div>
         <h1 style={{ color: 'red' }}>오류 발생햇어용 삐용삐용!!!</h1>
       </div>
     );
   }
 
   return (
     <>
       <S.CardList>  
       {data && data.results && // data와 data.results가 있는지 확인
           data.results.map((movie) => (
             <Card key={movie.id} movie={movie} />
           ))}
       </S.CardList>
     </>
   );
 };
 
 export default NowPlaying;
 