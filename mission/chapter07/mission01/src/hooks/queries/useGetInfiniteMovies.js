import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetMovies } from "./useGetMovies";

function useInfiniteMovies() {
    return useInfiniteQuery ({

        queryFn: ({pageParam}) => useGetMovies ({category,pageParam}),
        queryKey: ['movies', category],
        initialPageParam: 1, //초기값
        getNextPageParam: (lastPage, allPages) => {  //다음 페이지 정보
            const lastMovie = lastPage.results.at(-1);

            return lastMovie ? allPages?.length + 1 : undefined;
        }
    })
}