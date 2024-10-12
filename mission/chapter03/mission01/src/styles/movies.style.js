import styled from 'styled-components';

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export const MovieCard = styled.div`
  width: 200px;
  background-color: #2c3e50;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  color: white;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const MovieTitle = styled.h3`
  margin: 10px 0;
  font-size: 18px;
`;

export const MovieOverview = styled.p`
  font-size: 14px;
  padding: 0 10px 10px;
`;
