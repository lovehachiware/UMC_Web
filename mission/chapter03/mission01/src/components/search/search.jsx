import * as S from './search.style.js';

const SearchPage = () => {
    return (
        <S.SearchContainer>
            <input placeholder='영화 제목 입력용'/>
            <button>검색</button>
        </S.SearchContainer>
    );
}

export default SearchPage;
