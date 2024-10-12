import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 200px;
  background-color: #464545;
  border-radius: 10px;
  overflow: hidden;
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
