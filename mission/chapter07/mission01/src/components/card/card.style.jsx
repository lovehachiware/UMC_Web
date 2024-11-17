import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c3e50;
  border-radius: 8px; /* 둥근 모서리 */
  text-align: center;
  color: white;
  width: 150px; /* 카드 너비 */
  padding: 5px;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 200px; /* 포스터 높이 */
  object-fit: cover;
  border-radius: 4px; /* 이미지 둥근 모서리 */
`;

export const MovieTitle = styled.h3`
  margin: 5px 0; /* 상하 여백 */
  font-size: 14px; /* 제목 폰트 크기 */
  overflow: hidden; /* 텍스트 넘침 방지 */
  text-overflow: ellipsis; /* 말줄임표 (...) */
  white-space: nowrap; /* 한 줄로 표시 */
`;

export const MovieReleaseDate = styled.p`
  font-size: 12px; /* 날짜 폰트 크기 */
  color: #ccc;
  margin-top: 3px;
`;
