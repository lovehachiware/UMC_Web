import React, { useState } from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import * as S from './search.style.js';
import useCustomFetch from '../../hooks/useCustomFetch.js';
import Card from '../card/card'
import SearchMovieList from '../Movie/search-movie-list.jsx';

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const onChangeSearchValue = (event) => {
            setSearchValue(event.target.value)
    }
    const [searchParams, setSearchParams] = useSearchParams ({mq: ''})

    const mq = searchParams.get('mq')

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`)
    }

    const handleSearchMovieWithKeyboard = (e) => {
        if (e.key === 'Enter') {
            handleSearchMovie();
        }
    }
    
    return (
        <>
            <S.SearchContainer>
                <input placeholder='영화 제목 입력용' value={searchValue} onChange={onChangeSearchValue}
                onKeyDown={handleSearchMovieWithKeyboard}
                />
                <button onClick={handleSearchMovie}>검색</button>
            </S.SearchContainer>
            <SearchMovieList/>
        </>
    );
}

export default SearchPage;
