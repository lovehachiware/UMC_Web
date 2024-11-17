export function getAPI(url, page) {
  return {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,  // 토큰을 제대로 불러오고 있는지 확인
    },
    params: { language: "ko-KR", page },
    url,
  };
}
