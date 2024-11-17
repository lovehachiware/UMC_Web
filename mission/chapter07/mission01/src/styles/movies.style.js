import styled from 'styled-components';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const MovieGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* 그리드 카드 최소 너비 */
  gap: 10px; /* 카드 간의 간격 */
  padding: 10px; /* 전체 그리드의 여백 */
  background-color: #141414;
  min-height: calc(100vh - 100px); /* 페이지 높이 고정 */
  margin: 0 auto; /* 가운데 정렬 */
`;
