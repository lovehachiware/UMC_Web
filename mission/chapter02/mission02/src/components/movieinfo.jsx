import React, { useState } from 'react';

function MovieInfo({ title, poster }) {
  // 오버레이의 보임 여부를 관리하는 상태
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = `https://image.tmdb.org/t/p/w200${poster}`;

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)} // 마우스 올렸을 때
      onMouseLeave={() => setIsHovered(false)} // 마우스 떼면.
    >
      <div className="movie-image-wrapper">
        <img src={imageUrl} alt={title} className="movie-image" />
        {/* 마우스가 올려졌을 때만 오버레이를 표시 */}
        {isHovered && <div className="movie-overlay"></div>}
      </div>
    </div>
  );
}

export default MovieInfo;
