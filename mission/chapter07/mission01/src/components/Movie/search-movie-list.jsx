import React from 'react';
import {useSearchParams} from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch.js';
import Card from '../card/card.jsx'
import * as S from '../search/search.style.js';
import CardSkeleton from '../card/Skeleton/card-skeleton.jsx';
import CardListSkeleton from '../card/Skeleton/card-list-skeleton.jsx';


const SearchMovieList = () => {
    const [searchParams, setSearchParams] = useSearchParams ({mq: ''});
    const mq = searchParams.get('mq');
    const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
    console.log('API URL:', url);
    const {data: movies, isLoading, isError} = useCustomFetch(url);

    if (isError) {
        return <h1 style={{color: 'red'}}>에러가 발생띠예 ㅠㅠ</h1>
    }


    if (isLoading) {
        return (
            <S.MovieGridContainer>
                <CardListSkeleton number={20}/>
            </S.MovieGridContainer>
        )
    }

    if (mq && !movies?.results?.length) {
        return (
            <div style={{textAlign:'center', marginTop: '30px'}}>
                <h1 style={{color: 'white'}}>으악!!! 해당 검색어{mq}에</h1>
                <h1 style={{color: 'white'}}>해당하는 데이터가 없어용 ㅠㅠㅠ!!!</h1>
            </div>
        )
    }

    return (
        <S.MovieGridContainer>
            {movies?.results?.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </S.MovieGridContainer>
    );
};

export default SearchMovieList;