### 키워드 정리 🍠

- Tanstack-Query 🍠
    - Tanstack-Query 초기 세팅 방법
        
        ### **Tanstack-Query 초기 세팅 방법**
        
        **Tanstack Query**(구 React Query)는 **React 애플리케이션에서 서버 상태 관리**를 단순화하는 라이브러리입니다. 데이터 페칭, 캐싱, 동기화, 업데이트를 효율적으로 관리할 수 있습니다.
        
        **초기 설정**:
        
        1. **설치**:
            
            ```bash
            npm install @tanstack/react-query
            ```
            
        2. **`QueryClient`와 `QueryClientProvider` 설정**:
        애플리케이션의 최상위 컴포넌트에 `QueryClientProvider`를 설정하여 모든 컴포넌트에서 Tanstack Query를 사용할 수 있도록 합니다.
            
            ```jsx
            import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
            
            const queryClient = new QueryClient();
            
            function App() {
              return (
                <QueryClientProvider client={queryClient}>
                  <YourComponent />
                </QueryClientProvider>
              );
            }
            ```
            
    - Query-DevTools?
        
        **Query DevTools**는 Tanstack Query의 **디버깅 도구**로, 애플리케이션의 데이터 페칭 상태, 캐시, 쿼리 상태 등을 시각적으로 확인할 수 있게 도와줍니다.
        
        **설치 및 사용**:
        
        1. 설치:
            
            ```bash
            npm install @tanstack/react-query-devtools
            ```
            
        2. DevTools 추가:
            
            ```jsx
            import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
            
            function App() {
              return (
                <QueryClientProvider client={queryClient}>
                  <YourComponent />
                  <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
              );
            }
            ```
            
        
        **주요 기능**:
        
        - 활성화된 쿼리와 비활성화된 쿼리 확인.
        - 데이터 상태 및 캐싱된 데이터 확인.
        - 오류 상태, 재시도 횟수 확인.
    - useQuery
        
        `useQuery`는 **데이터를 가져오는 기본 훅**으로, **GET 요청**과 같은 읽기 작업에 사용됩니다.
        
        **사용법**:
        
        ```jsx
        import { useQuery } from '@tanstack/react-query';
        
        function YourComponent() {
          const { data, isLoading, error } = useQuery(['todos'], fetchTodos);
        
          if (isLoading) return <div>Loading...</div>;
          if (error) return <div>Error: {error.message}</div>;
        
          return (
            <ul>
              {data.map(todo => (
                <li key={todo.id}>{todo.title}</li>
              ))}
            </ul>
          );
        }
        ```
        
        **설명**:
        
        - **queryKey**: 데이터를 캐싱하고 고유하게 식별하기 위한 키.
        - **fetchTodos**: 서버에서 데이터를 가져오는 비동기 함수.
        
        **장점**:
        
        - 자동 캐싱.
        - 자동 재요청 (refetch).
        - 데이터와 로딩, 오류 상태 관리.
    - useInfiniteQuery
        
        `useInfiniteQuery`는 **무한 스크롤** 또는 **페이지네이션** 같은 기능을 구현할 때 사용됩니다. 한 번에 많은 데이터를 가져오지 않고, **부분적으로 데이터를 페칭**합니다.
        
        **사용법**:
        
        ```jsx
        import { useInfiniteQuery } from '@tanstack/react-query';
        
        function YourComponent() {
          const {
            data,
            fetchNextPage,
            hasNextPage,
            isFetchingNextPage,
          } = useInfiniteQuery(
            ['posts'],
            fetchPosts, // 데이터를 가져오는 함수
            {
              getNextPageParam: (lastPage, pages) => lastPage.nextCursor, // 다음 페이지 커서
            }
          );
        
          return (
            <div>
              {data.pages.map((page, i) => (
                <React.Fragment key={i}>
                  {page.items.map(post => (
                    <div key={post.id}>{post.title}</div>
                  ))}
                </React.Fragment>
              ))}
              <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No more data'}
              </button>
            </div>
          );
        }
        ```
        
        **설명**:
        
        - **getNextPageParam**: 다음 페이지를 가져오기 위한 매개변수 설정.
        - **fetchNextPage**: 다음 페이지 데이터를 가져오는 함수.
    - queryKey
        
        ### **queryKey**
        
        **queryKey**는 **쿼리를 고유하게 식별**하는 키로, 캐싱 및 데이터 업데이트를 관리하는 데 사용됩니다. 배열 형식으로 설정하며, 쿼리에 사용되는 모든 매개변수를 포함할 수 있습니다.
        
        **예시**:
        
        ```jsx
        useQuery(['todos', userId], fetchTodosByUser);
        ```
        
        - *['todos', userId]**는 `userId`에 따라 다른 캐시를 생성합니다.
- Pagination 🍠
    - Pagination은 무엇인가요?
        
        Pagination(페이지네이션)은 **큰 데이터 집합을 여러 페이지로 나누어 표시**하는 기술입니다.
        
        한 번에 모든 데이터를 로드하지 않고, 특정 페이지 단위로 데이터를 나눠 로드합니다.
        
        **예시**:
        
        - 게시판, 뉴스피드, 블로그의 글 목록 등.
    - Pagination을 어떠한 방식으로 구현할 수 있을까요?
        
        **1. 서버 측 페이지네이션**:
        
        서버에서 데이터의 특정 페이지를 요청하여 필요한 데이터만 반환.
        
        **예시**: `GET /api/posts?page=1&limit=10`
        
        ```jsx
        function fetchPosts(page = 1) {
          return fetch(`/api/posts?page=${page}&limit=10`).then(res => res.json());
        }
        
        const { data, isLoading } = useQuery(['posts', page], () => fetchPosts(page))
        ```
        
        **2. 클라이언트 측 페이지네이션**:
        
        모든 데이터를 클라이언트로 한 번에 가져와 페이지별로 나눠 표시.
        
        ```jsx
        const itemsPerPage = 10;
        const [currentPage, setCurrentPage] = useState(1);
        const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        ```
        
    - Pagination의 장점과 단점에 대해 정리해주세요.
        
        **장점**:
        
        - **성능 최적화**: 한 번에 모든 데이터를 로드하지 않으므로 로드 시간이 줄어듭니다.
        - **사용자 경험 향상**: 적은 데이터만 표시하여 화면이 깔끔하고 가독성이 좋습니다.
        
        **단점**:
        
        - **추가 네트워크 요청**: 페이지 전환마다 서버에 요청이 필요합니다.
        - **상태 관리 복잡성 증가**: 현재 페이지, 총 페이지 수 등을 관리해야 합니다.
- Infinite Scroll 🍠
    - Intersection Observer는 무엇인가요?
        
        **Intersection Observer**는 **DOM 요소가 뷰포트에 얼마나 보이는지**를 관찰하는 API입니다.
        
        Infinite Scroll 구현에서 **특정 요소가 화면에 보일 때** 데이터를 로드하는 데 사용됩니다.
        
        **예시**:
        
        ```jsx
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            // 요소가 보이면 데이터를 가져옴
            fetchMoreData();
          }
        });
        
        observer.observe(targetElement); // targetElement를 관찰
        ```
        
    - Infinite Scroll은 무엇일까요?
        
        **Infinite Scroll**은 사용자가 스크롤할 때마다 **자동으로 새로운 데이터를 로드**하여 추가로 표시하는 기술입니다.
        
        페이지네이션과 달리 사용자는 명시적으로 페이지를 이동하지 않습니다.
        
    - Inifinite Scroll은 어떻게 구현할까요?
        1. **Intersection Observer를 활용한 구현**:
            
            ```jsx
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting && hasNextPage) {
                  fetchNextPage(); // 다음 페이지 데이터 로드
                }
              },
              { threshold: 1.0 } // 요소가 100% 보일 때 트리거
            );
            
            useEffect(() => {
              if (targetElement) observer.observe(targetElement);
              return () => observer.disconnect(); // 정리
            }, [targetElement, hasNextPage]);
            ```
            
        2. **`useInfiniteQuery`와 함께 사용**:
            
            ```jsx
            const { fetchNextPage, hasNextPage } = useInfiniteQuery(
              ['posts'],
              fetchPosts,
              {
                getNextPageParam: (lastPage) => lastPage.nextCursor,
              }
            );
            
            useEffect(() => {
              const observer = new IntersectionObserver(
                (entries) => {
                  if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                  }
                },
                { threshold: 1.0 }
              );
              observer.observe(targetElement);
              return () => observer.disconnect();
            }, [targetElement, hasNextPage]);
            ```
            
    - Infinite Scroll의 장점과 단점에 대해 정리해주세요.
        
        **장점**:
        
        - **사용자 경험 향상**: 별도의 페이지 전환 없이 콘텐츠를 계속해서 탐색 가능.
        - **데이터 페칭 최적화**: 필요한 만큼의 데이터만 요청.
        
        **단점**:
        
        - **끝이 보이지 않는 콘텐츠**: 사용자가 얼마나 콘텐츠를 소비했는지 파악하기 어려움.
        - **브라우저 성능 저하**: 콘텐츠가 계속 추가되면 메모리 사용량이 증가.
        - **URL 관리 어려움**: 특정 위치를 저장하거나 북마크하기 어렵습니다.
    

# 🔥 미션 1.  Project에 useQuery 를 활용하기.

<aside>
💡

강의 영상을 의존하지 마시고, 본인이 직접 먼저 구현해본 후, 아래 영상을 진행해주세요.

아래 영상을 참고하여, **`Tanstack-Query` 의 `useQuery`, `useInfiniteQuery`**를 활용하여, 기존 코드를 변경해봅시다.

🔥 미션 1과 🔥 미션 2를 아래 영상을 보시며, 수행해주시면 됩니다.

- UMC 7th 중앙 Web 파트장 매튜/김용민 -

</aside>

- [x]  지금까지, **`custom-hook`**을 활용하여, 불러온 `get 요청`의 데이터들을 먼저 **`useQuery`** 를 활용한 데이터 호출로 변경해주세요.
    - [x]  now-playing 페이지
    - [x]  popular 페이지
    - [x]  up-coming 페이지
    - [x]  top-rated 페이지
    - [x]  내 정보를 불러오는 API
    - [x]  영화 상세 페이지
    - [x]  영화 상세 페이지 Credit
- [x]  단, **`queryKey`**를 명확하게 설정해주세요.
- [x]  **`useQuery`**의 반환 값을 활용하여, **`loading`**과 **`error`** 처리를 진행해주세요.
    - [x]  로딩 처리는 Skeleton UI를 활용해주세요.

### 🔥 미션 1. 제출 (useQuery)

- 깃허브 주소
- 실행 영상
    
    [화면 기록 2024-11-17 오후 9.42.44.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e2b3334c-a1aa-4927-b42f-e92c83ee5e1d/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-11-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.42.44.mov)
    

# 🔥 미션 2.  Project에 useInfiniteQuery 를 활용하기.

[화면 기록 2024-09-30 오전 1.36.38.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/62b28844-27af-428a-abe2-e3d62287fcb9/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.36.38.mov)

- [x]  지금까지, 미션 1에서 **`useQuery`**를 활용하여, 불러온 `get 요청`의 데이터들을 먼저 **`useInfiniteQuery`** 를 활용한 데이터 호출로 변경해주세요.
    - [x]  now-playing 페이지
    - [x]  popular 페이지
    - [x]  up-coming 페이지
    - [x]  top-rated 페이지
- [x]  단, **`queryKey`**를 명확하게 설정해주세요.
- [x]  **`useQuery`**의 반환 값을 활용하여, **`loading`**과 **`error`** 처리를 진행해주세요.
    - [x]  로딩 처리는 `Skeleton UI`를 활용해주세요.
    - [x]  `Loading Spinner` 또한 활용해주세요.

### 🔥 미션 2. 제출 (useInfiniteQuery)

- 깃허브 주소
- 실행 영상
    
    [화면 기록 2024-11-17 오후 10.42.08.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/aeb2d649-5d04-49ac-b8fd-0b6cfd165e83/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-11-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.42.08.mov)
    

### ⚠️ 혼자 반드시 먼저, 해보신 후 아래 영상을 활용해주세요! ⚠️

https://www.youtube.com/watch?v=77TLFKauKTY

https://www.youtube.com/watch?v=77TLFKauKTY

# 🔥 미션 3. Pagination 기능 구현.

<aside>
💡

아래 영상을 참고하여, **`Tanstack-Query` 의 `useQuery`**를 활용하여 **`Pagination`**을 구현해주세요!

**- UMC 7th 중앙 Web 파트장 매튜/김용민 -**

</aside>

[화면 기록 2024-09-30 오전 2.07.09.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e259bf30-211a-4bae-94ce-cf56c973ffa3/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.07.09.mov)

https://tanstack.com/query/v4/docs/framework/react/guides/paginated-queries

위 공식 문서를 참고해서, **`Pagination`**을 구현해주세요.

- [ ]  위의 영상과 동일하게, **`Pagination`**을 구현해주세요.
- [ ]  **`0 page`**는 데이터가 존재하지 않으므로, 사용자가 **`0 page`**를 가지 못하게, Button을 **`disabled`** 처리를 해주세요.
    - [ ]  스타일링 또한, 같이 진행해주세요.
- [ ]  단, **`queryKey`**를 명확하게 설정해주세요.

<aside>
🍠

혹시라도, **`Page 기반 Pagination`**에 관심이 있는 경우, 위의 영상을 참고해주세요!
현재, 저희 TMDB 데이터에는 적용되지 않음을 유의해주세요!

- UMC 7th 중앙 Web 파트장 매튜/김용민 -

</aside>

https://www.youtube.com/watch?v=HlNwcVYZpwk

https://www.youtube.com/watch?v=HlNwcVYZpwk

### 🔥 미션 3. 제출 (Pagination)

- 깃허브 주소
- 실행 영상
    
    [화면 기록 2024-11-18 오전 12.03.15.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/bfb0bfdc-6877-47f9-8f8f-7604efeed204/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-11-18_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.03.15.mov)
    

# ⚡ 트러블 슈팅

---

<aside>
💡 실습하면서 생긴 문제들 또는 어려웠던 내용에 대해서, **이슈 - 문제 - 해결** 순서로 작성해주세요.

</aside>

- ⚡이슈 No.1 (예시, 서식만 복사하시고 지워주세요.)
    
    **`이슈`**
    
    지금 계속 리팩토링 중인데, 카드 간의 간격이 너무 이상하다 ㅠㅠ 미치겠다…
    
    **`문제`**
    
    👉 노래클래스의 데이터리스트의 Size를 넘어서 NullPointException이 발생하여 앱이 종료된 것이었다. 
    
    **`해결`**
    
    👉  노래 다음 버튼을 눌렀을 때 데이터리스트의 Size를 검사해 Size보다 넘어가려고 하면 다음으로 넘어가는 메서드를 실행시키지 않고, 첫 노래로 돌아가게끔 해결
    
    **`참고레퍼런스`**
    
    - 링크

# 📢 학습 후기

---

- 이번 주차 워크북을 해결해보면서 어땠는지 회고해봅시다.
- 핵심 키워드에 대해 완벽하게 이해했는지? 혹시 이해가 안 되는 부분은 뭐였는지?

<aside>
📢

</aside>

# 🤔 참고 자료

---

Copyright © 2024 Kim Yongmin (Matthew) All rights reserved.