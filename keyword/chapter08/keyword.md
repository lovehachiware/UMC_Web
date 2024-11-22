### 키워드 정리 🍠

- useMutation 🍠
    - useMutation이 무엇인가요?
        
        `useMutation`은 **서버 상태**를 변경하는 작업을 관리하는 훅이다. 보통 `POST`, `PUT`, `PATCH`, `DELETE` 요청과 같은 **변경 작업**에 사용된다.
        
        React Query는 이 훅을 통해 상태를 관리하며, 성공/실패/완료 상태를 쉽게 처리할 수 있게 해준다.
        
        ### 주요 기능
        
        - **데이터 변경 요청 관리**: 서버로 데이터를 보내고 결과를 기다림.
        - **요청 상태 관리**: `isLoading`, `isError`, `isSuccess` 등의 상태값 제공.
        - **콜백 함수 지원**: 작업 전/후, 성공/실패 시 동작을 설정 가능.
        - **캐시 갱신**: 서버 응답에 따라 React Query의 캐시를 업데이트하거나 무효화.
    - onMutate
        
        > 서버 요청이 보내지기 직전에 호출된다.
        > 
        > 
        > 이 단계에서 UI에 변화를 주거나, 낙관적 업데이트(Optimistic Update)를 설정한다.
        > 
        
        ### 예시: 낙관적 업데이트로 리스트 추가
        
        ```jsx
        onMutate: async (newTodo) => {
          // 캐시에서 기존 데이터를 가져오기
          const previousTodos = queryClient.getQueryData('todos');
        
          // 낙관적 업데이트: 새로운 Todo를 임시로 추가
          queryClient.setQueryData('todos', (old) => [...old, newTodo]);
        
          // 이전 데이터를 반환 (onError에서 롤백 시 사용)
          return { previousTodos };
        };
        ```
        
        ### 설명:
        
        - 기존 데이터를 가져와서 변경 작업 전 **백업**.
        - `queryClient.setQueryData`를 통해 낙관적으로 UI를 업데이트.
        - 반환된 값은 `onError`에서 사용하여 상태를 복원할 수 있음.
    - onSuccess
        
        > 서버 요청이 성공적으로 완료된 후 호출된다.
        > 
        > 
        > 이 단계에서 데이터를 갱신하거나, 관련된 쿼리를 무효화(`invalidateQueries`)하여 최신 데이터를 가져온다.
        > 
        
        ### 예시: 성공 시 캐시 갱신
        
        ```jsx
        onSuccess: () => {
          // 'todos' 쿼리를 무효화하여 최신 데이터 가져오기
          queryClient.invalidateQueries('todos');
        };
        ```
        
        ### 설명:
        
        - 요청이 성공하면 서버에서 최신 데이터를 다시 가져오도록 설정.
        - 기존 데이터와 서버 데이터를 동기화.
    - onError
        
        > 서버 요청이 실패했을 때 호출된다.
        > 
        > 
        > 이 단계에서 낙관적 업데이트를 롤백하거나 에러 메시지를 처리할 수 있다.
        > 
        
        ### 예시: 실패 시 상태 복원
        
        ```jsx
        onError: (error, newTodo, context) => {
          // 이전 상태로 롤백
          queryClient.setQueryData('todos', context.previousTodos);
          console.error('요청 실패:', error.message);
        };
        ```
        
        ### 설명:
        
        - `onMutate`에서 반환된 데이터를 이용하여 이전 상태로 복원.
        - 오류 메시지를 출력하거나 사용자에게 알림을 줄 수 있음.
    - onSettled
        
        > 작업이 성공/실패 여부와 상관없이 항상 호출된다.
        > 
        > 
        > 이 단계에서 최종적으로 데이터를 다시 가져오거나, UI 상태를 정리한다.
        > 
        
        ### 예시: 작업 후 데이터 무효화
        
        ```jsx
        onSettled: () => {
          // 작업 완료 후 항상 최신 데이터 가져오기
          queryClient.invalidateQueries('todos');
        };
        ```
        
        ### 설명:
        
        - 작업의 성공 여부와 상관없이 무조건 호출됨.
        - 데이터를 동기화하거나 화면 상태를 정리.
    - invalidateQueries
        
        > 특정 쿼리를 무효화하여 데이터를 다시 가져오도록 설정한다.
        > 
        
        ### 예시: `invalidateQueries`를 이용한 캐시 갱신
        
        ```jsx
        onSuccess: () => {
          queryClient.invalidateQueries('todos');
        };
        ```
        
        ### 설명:
        
        - 서버 요청이 성공하면 특정 쿼리를 무효화하여 최신 데이터를 가져옴.
- 낙관적 업데이트 (Optimistic Update) 🍠
    - 낙관적 업데이트란?
        
        
        - 낙관적 업데이트는 **서버 요청의 성공을 가정**하고, 서버 응답을 기다리지 않고 **UI를 즉시 업데이트**하는 기법이다.
        - 이 방법은 사용자 경험(UX)을 크게 향상시킬 수 있으며, 특히 **느린 네트워크 환경**에서 효과적이다.
        - 만약 서버 요청이 실패하면, **UI를 이전 상태로 복원**하거나 에러 메시지를 표시한다.
        
        ---
        
        ### **낙관적 업데이트를 사용하는 이유**
        
        1. **빠른 UI 응답성 제공**
            
            사용자는 서버 응답 지연 시간 없이 즉각적인 피드백을 받는다.
            
        2. **사용자 경험(UX) 개선**
            
            작업 완료 여부와 상관없이 UI가 빠르게 반응하므로 사용자가 더 매끄럽게 느낀다.
            
        3. **네트워크 상태 의존성 최소화**
            
            서버 요청이 느리더라도 사용자는 원활한 작업 흐름을 유지할 수 있다.
            
    - 낙관적 업데이트를 `useMutation`을 활용하여 구현할 수 있는 방법?
        
        ### **1. 구현 시 필수 단계**
        
        1. **onMutate**:
            - 요청 전, UI를 즉시 업데이트하여 낙관적 상태를 반영한다.
            - 기존 상태를 저장(백업)해둔다. 이 데이터는 요청 실패 시 복원에 사용된다.
        2. **onError**:
            - 요청이 실패하면 UI를 이전 상태로 복원한다.
            - `onMutate`에서 저장한 백업 데이터를 활용한다.
        3. **onSuccess**:
            - 요청 성공 시, 실제 서버의 최신 데이터를 가져와 UI를 갱신한다.
        4. **onSettled**:
            - 성공 여부와 관계없이 항상 실행되며, 데이터 동기화에 사용된다.