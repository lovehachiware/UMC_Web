### 키워드 정리 🍠

- Debounce & Throttling 🍠
    - Debounce는 무엇일까요?
        
        **Debounce**는 특정 이벤트가 **반복적으로 발생할 때, 마지막 이벤트가 발생한 후 일정 시간 동안 추가 이벤트가 발생하지 않으면** 해당 작업을 실행하도록 제한하는 기술입니다.
        
        쉽게 말해, **이벤트의 빈도를 낮추고 마지막 작업만 실행**되도록 합니다.
        
        **예시 상황**:
        
        검색 창에 사용자가 글자를 입력할 때마다 서버에 API 요청을 보내는 상황을 생각해 보세요. 글자 하나 입력할 때마다 요청이 보내진다면 서버에 부담이 됩니다.
        
        Debounce를 사용하면 사용자가 입력을 멈춘 후 일정 시간(예: 300ms)이 지나면 마지막 입력값으로 **한 번만** 서버에 요청을 보낼 수 있습니다.
        
        **Debounce 코드 예제**
        
        ```jsx
        function debounce(func, delay) {
          let timer;
          return function(...args) {
            clearTimeout(timer); // 기존 타이머를 지움
            timer = setTimeout(() => func.apply(this, args), delay); // 새로운 타이머 설정
          };
        }
        
        // 검색 입력 필드에 Debounce 적용
        const handleSearch = debounce((query) => {
          console.log(`검색어: ${query}`);
          // 여기에 API 호출 로직을 추가
        }, 300);
        
        document.querySelector('#searchInput').addEventListener('input', (e) => {
          handleSearch(e.target.value);
        });
        
        ```
        
        **실행 흐름**:
        
        1. 사용자가 `a`, `ab`, `abc`를 입력.
        2. 300ms 동안 추가 입력이 없으면 마지막 입력값 `abc`로 검색 요청 실행.
        3. 이전 타이머는 매번 초기화되므로 마지막 호출만 실행.
        
    - Debounce는 주로 어디에 사용하나요?
        
        Debounce는 **짧은 시간 동안 이벤트가 여러 번 발생할 때, 마지막 이벤트만 실행해야 하는 상황**에서 사용됩니다.
        
        **주요 사용 사례**:
        
        1. **검색창 자동완성**:
            
            사용자가 입력을 멈췄을 때만 서버에 API 요청을 보내 검색어 추천을 가져옵니다.
            
        2. **폼 검증**:
            
            사용자가 입력을 완료하고 일정 시간이 지나면 입력값의 유효성을 검사합니다.
            
        3. **윈도우 리사이즈 이벤트**:
            
            사용자가 창 크기를 조절할 때, 마지막 크기 조정이 끝난 후에만 레이아웃을 재조정합니다.
            
        
        **예시**:
        
        ```jsx
        window.addEventListener('resize', debounce(() => {
          console.log('창 크기 변경 후 레이아웃 재조정');
        }, 500));
        
        ```
        
    - Throttling은 무엇일까요?
        
        **Throttling**은 특정 이벤트가 **반복적으로 발생해도 일정 시간 간격으로만 실행되도록** 제한하는 기술입니다.
        
        Debounce와 달리 이벤트가 **발생하는 동안에도 일정 간격으로 실행**됩니다.
        
        **예시 상황**:
        
        사용자가 페이지를 스크롤할 때, 스크롤 이벤트가 계속 발생하면 브라우저가 과부하될 수 있습니다.
        
        Throttling을 사용하면 일정 시간마다 한 번씩만 이벤트 핸들러가 실행되어 **성능 저하를 방지**할 수 있습니다.
        
        **Throttling 코드 예제**:
        
        ```jsx
        function throttle(func, limit) {
          let lastCall = 0;
          return function(...args) {
            const now = Date.now();
            if (now - lastCall >= limit) { // 마지막 호출 시간과 현재 시간 비교
              lastCall = now;
              func.apply(this, args); // 지정된 간격 내에 함수 실행
            }
          };
        }
        
        // 스크롤 이벤트에 Throttling 적용
        const handleScroll = throttle(() => {
          console.log('스크롤 이벤트 실행');
        }, 200);
        
        window.addEventListener('scroll', handleScroll);
        ```
        
        **실행 흐름**:
        
        1. 사용자가 스크롤을 하면 이벤트가 200ms마다 한 번씩 실행.
        2. 그 사이에 발생한 이벤트는 무시.
    
    - Throttling은 주로 어디에 사용하나요?
        
        Throttling은 **이벤트가 지속적으로 발생하는 상황에서 주기적으로 처리해야 하는 경우**에 사용됩니다.
        
        **주요 사용 사례**:
        
        1. **스크롤 이벤트**:
            
            사용자가 페이지를 스크롤할 때 일정 시간 간격으로 데이터 요청을 하거나 UI를 업데이트합니다.
            
        2. **마우스 드래그 이벤트**:
            
            사용자가 드래그하는 동안 드래그 이벤트가 일정 주기로 실행되도록 제한하여 성능 저하를 방지합니다.
            
        3. **윈도우 리사이즈 이벤트**:
            
            창 크기 변경 중에도 주기적으로 레이아웃을 조정할 때 사용됩니다.
            
        
        **예시**:
        
        ```jsx
        window.addEventListener('scroll', throttle(() => {
          console.log('페이지 하단에 도달하여 데이터 로드');
        }, 300));
        
        ```
        
    - Debounce와 Throttling의 차이점은 무엇일까요?
        
        
        | **구분** | **Debounce** | **Throttling** |
        | --- | --- | --- |
        | **동작 방식** | 마지막 이벤트 이후 일정 시간 동안 대기 후 실행 | 일정 시간 간격으로 이벤트 실행 |
        | **적합한 상황** | 최종 입력이 완료된 후에만 이벤트를 처리해야 하는 경우 | 이벤트가 지속적으로 발생해도 주기적으로 실행할 경우 |
        
        **정리된 차이점**:
        
        - **Debounce**는 **마지막 호출** 이후 일정 시간이 지나야 함수가 실행됩니다.
        - **Throttling**은 이벤트 발생 중에도 **일정 주기마다** 함수가 실행됩니다.
        
    - 어떤 기능을 구현할 때 Debounce를 적용하고, Throttling을 적용하는 것이 좋을까요?
        - **Debounce**가 필요한 경우:
            1. **검색창 자동완성**
                
                사용자가 입력을 멈춘 후에만 API 요청을 보내도록 설정.
                
            2. **폼 입력 유효성 검사**
                
                사용자가 입력을 완료한 후에만 입력값을 검증.
                
        - **Throttling**이 필요한 경우:
            1. **스크롤 기반 데이터 로드**
                
                사용자가 페이지를 스크롤할 때 일정 간격으로 새로운 데이터를 요청.
                
            2. **마우스 이벤트**
                
                드래그 앤 드롭 기능에서 이벤트 발생을 제한하여 성능 최적화.
                
- 쿠키 🍠
    - 쿠키란 무엇이고, 어떤 특징을 가지고 있을까요?
        - 쿠키(Cookie)는 웹 브라우저에 저장되는 작은 데이터 조각으로, 클라이언트와 서버 간의 **상태 정보를 저장**하거나, **사용자 맞춤형 경험**을 제공하기 위해 사용됩니다. 쿠키는 HTTP 요청과 함께 클라이언트와 서버 간에 자동으로 전송됩니다.
        
        **쿠키의 특징**
        
        1. **클라이언트-서버 간 데이터 저장 및 전송**
            
            사용자가 로그인했을 때, 해당 상태를 유지하기 위해 쿠키를 사용하여 사용자 정보를 저장하고 요청마다 서버로 전송합니다.
            
        2. **작은 용량**:
            
            일반적으로 하나의 쿠키는 4KB 정도의 데이터를 저장할 수 있습니다.
            
        3. **만료 시간 설정 가능**:
            
            세션 쿠키는 브라우저가 닫히면 삭제되고, 지속 쿠키는 만료 날짜를 설정하여 그 시점까지 유지됩니다.
            
        4. **HTTP 요청 시 자동 전송**:
            
            클라이언트가 서버에 요청을 보낼 때, 저장된 쿠키는 자동으로 전송됩니다.
            
        5. **보안 설정 가능**:
            
            민감한 데이터의 보안을 위해 **HttpOnly**(JavaScript로 접근 불가)와 **Secure**(HTTPS 연결에서만 전송) 속성을 설정할 수 있습니다.
            
        
        **쿠키 사용 예제**:
        
        ```jsx
        // 쿠키 설정
        document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
        
        // 쿠키 읽기
        console.log(document.cookie); // "username=JohnDoe"
        
        // 쿠키 삭제
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        
        ```
        
    - 쿠키를 어떻게 사용할 수 있을까요?
        
        쿠키(Cookie)는 브라우저에 **작은 데이터 조각**을 저장하여 클라이언트와 서버 간의 상태를 관리하거나 사용자 정보를 유지합니다. 쿠키는 HTTP 요청과 함께 자동으로 전송되므로, 클라이언트-서버 간 상태를 공유하는 데 효과적입니다.
        
        ### **쿠키의 주요 사용 사례**:
        
        1. **세션 관리**:
            
            로그인 세션을 유지하기 위해 사용자 인증 정보를 쿠키에 저장합니다.
            
            예를 들어, 사용자가 로그인하면 서버는 `Set-Cookie` 헤더를 통해 인증 쿠키를 클라이언트로 보냅니다.
            
        2. **사용자 맞춤형 환경 제공**:
            
            방문자의 설정(예: 테마, 언어)을 쿠키에 저장하여 다음 방문 시 동일한 환경을 제공합니다.
            
        3. **트래킹**:
            
            사용자의 웹사이트 방문 기록을 추적하여 개인화된 광고를 제공할 수 있습니다.
            
        
        ---
        
        ### **쿠키 사용 방법**
        
        ### **1. 쿠키 설정**
        
        **JavaScript**를 사용하여 클라이언트에서 쿠키를 설정할 수 있습니다.
        
        ```jsx
        // 기본 쿠키 설정
        document.cookie = "username=JohnDoe";
        
        // 만료 시간과 경로 설정
        document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
        ```
        
        ### **2. 쿠키 읽기**
        
        모든 쿠키는 `document.cookie`를 통해 읽을 수 있습니다.
        
        ```jsx
        console.log(document.cookie); // "username=JohnDoe"
        ```
        
        쿠키 문자열을 파싱하여 필요한 값을 가져올 수 있습니다:
        
        ```jsx
        function getCookie(name) {
          const cookies = document.cookie.split('; ');
          const cookie = cookies.find(row => row.startsWith(`${name}=`));
          return cookie ? cookie.split('=')[1] : null;
        }
        
        console.log(getCookie('username')); // "JohnDoe"
        ```
        
        ### **3. 쿠키 삭제**
        
        만료 시간을 과거로 설정하여 쿠키를 삭제할 수 있습니다.
        
        ```jsx
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        ```
        
- 토큰 🍠
    - 토큰이 왜 필요할까요?
        - 토큰(Token)은 사용자 인증 상태를 유지하고, 서버가 클라이언트를 식별하는 데 사용됩니다. **무상태 인증(stateless authentication)**을 가능하게 하며, 서버는 클라이언트의 인증 상태를 유지하기 위해 세션을 저장할 필요가 없습니다.
        
        **토큰의 필요성**:
        
        1. **확장성**: 서버가 인증 상태를 저장하지 않으므로, 여러 서버에 요청이 분산되는 환경에서도 인증이 가능합니다.
        2. **보안성**: 토큰은 암호화되어 있어 데이터 변조를 방지할 수 있습니다.
        3. **유연성**: 토큰을 활용하여 다양한 인증 방식을 구현할 수 있습니다.
    - CORS 에러가 무엇이고, 이 에러를 어떻게 해결할 수 있을까요?
        
        **CORS(Cross-Origin Resource Sharing)** 에러는 **브라우저가 다른 도메인에서 리소스를 요청할 때 발생**합니다.
        
        브라우저는 보안을 위해 동일 출처 정책(Same-Origin Policy)을 따르며, 출처가 다른 리소스 요청을 기본적으로 제한합니다.
        
        **CORS 에러 예시 상황**:
        
        클라이언트가 `http://example.com`에서 실행 중인데, `http://api.example.com`에 API 요청을 보낸 경우.
        
        **해결 방법**:
        
        1. **서버에서 CORS 허용 헤더 추가**서버가 `Access-Control-Allow-Origin` 헤더를 설정하여 특정 도메인 또는 모든 도메인의 요청을 허용할 수 있습니다.
        
        ```jsx
        // Express.js에서 CORS 허용
        const express = require('express');
        const cors = require('cors');
        const app = express();
        
        app.use(cors()); // 모든 도메인 허용
        ```
        
        1. **프록시 서버 설정**클라이언트와 동일한 출처에서 요청을 보내도록 프록시를 설정합니다.
        
    - JWT 토큰 기반 인증 방법이란 무엇일까요?
        - JWT(JSON Web Token)는 사용자 인증 및 정보 교환을 위한 **JSON 기반의 토큰**입니다.
        
        JWT는 **Header**, **Payload**, **Signature**로 구성되어 있으며, **무상태 인증**을 지원합니다.
        
    - JWT 기반 로그인 동작 과정에 대해 알아보세요.
        1. **클라이언트가 로그인 요청**: 사용자 ID와 비밀번호를 서버에 보냅니다.
        2. **서버에서 JWT 생성**: 로그인 성공 시 서버는 사용자의 정보를 기반으로 JWT를 생성하여 클라이언트에게 반환합니다.
        3. **클라이언트가 JWT 저장**: JWT는 브라우저의 **로컬 스토리지** 또는 **쿠키**에 저장됩니다.
        4. **요청 시 인증**: 클라이언트는 요청을 보낼 때 JWT를 **Authorization 헤더**에 포함시켜 서버에 보냅니다.
        5. **서버가 JWT 검증**: 서버는 JWT의 서명을 검증하여 사용자 인증을 수행합니다.
        
        ```jsx
        fetch('https://api.example.com/protected', {
          headers: {
            'Authorization': 'Bearer <token>'
          }
        });
        ```
        
    - AccessToken / RefreshToken의 차이에 대해 설명해주세요.
        - **AccessToken**:
            - 인증 요청에 사용되는 **짧은 수명의 토큰**.
            - 주로 **Bearer Token**으로 Authorization 헤더에 포함됩니다.
        - **RefreshToken**:
            - **장기 저장** 및 **AccessToken 갱신**을 위한 토큰.
            - 서버에서만 안전하게 관리됩니다.
- 웹 스토리지 🍠
    - 웹 스토리지의 메소드와 프로퍼티는 어떤게 있을까요?
        
        ### **웹 스토리지의 메소드와 프로퍼티는 어떤 게 있을까요?**
        
        **웹 스토리지**는 브라우저에서 데이터를 저장하기 위한 API로, 두 가지 저장소가 있습니다:
        
        1. **localStorage**: 데이터가 **영구적으로 저장**됩니다.
        2. **sessionStorage**: 데이터가 **브라우저 세션 동안**만 유지됩니다.
        
        **주요 메소드**:
        
        - `setItem(key, value)`: 데이터 저장.
        - `getItem(key)`: 데이터 읽기.
        - `removeItem(key)`: 특정 데이터 삭제.
        - `clear()`: 모든 데이터 삭제
        
        **예시**:
        
        ```jsx
        // 데이터 저장
        localStorage.setItem('username', 'JohnDoe');
        
        // 데이터 읽기
        console.log(localStorage.getItem('username')); // "JohnDoe"
        
        // 데이터 삭제
        localStorage.removeItem('username');
        
        // 모든 데이터 삭제
        localStorage.clear();
        ```
        
    - 세션 스토리지에 대해 정리해 주세요!
        
        세션 스토리지(sessionStorage)는 브라우저 **세션 동안**만 데이터를 유지합니다.
        
        - 탭을 닫으면 데이터가 삭제됩니다.
        - 페이지 새로고침 시 데이터는 유지됩니다.
        
        ```jsx
        sessionStorage.setItem('key', 'value');
        console.log(sessionStorage.getItem('key')); // "value"
        sessionStorage.removeItem('key');
        sessionStorage.clear();
        ```
        
    - 로컬 스토리지에 대해 정리해 주세요!
        
        로컬 스토리지(localStorage)는 브라우저에 데이터를 **영구적으로 저장**할 수 있는 Web Storage API의 한 종류입니다.
        
        로컬 스토리지에 저장된 데이터는 **브라우저를 닫거나 컴퓨터를 재부팅해도 유지**되며, 데이터의 만료 시간이 따로 설정되지 않습니다.
        
        ### **로컬 스토리지의 주요 특징**:
        
        1. **영구적 데이터 저장**:
            
            브라우저에 데이터를 영구적으로 저장하므로 세션이 끝나거나 브라우저를 종료해도 데이터가 사라지지 않습니다.
            
        2. **키-값(key-value) 형식의 데이터 저장**:
            
            모든 데이터는 문자열 형식으로 저장되며, 객체나 배열을 저장하려면 **JSON.stringify**를 통해 문자열로 변환해야 합니다.
            
        3. **도메인 간 접근 제한**:
            
            같은 도메인 내에서만 접근 가능하며, 다른 도메인이나 서브 도메인에서는 접근할 수 없습니다.
            
        4. **용량 제한**:
            
            로컬 스토리지는 브라우저마다 제한이 있지만, 보통 약 5MB 정도의 데이터를 저장할 수 있습니다.
            
        
        **로컬 스토리지의 메소드**
        
        1. **setItem(key, value)**:
            
            데이터를 저장합니다.
            
            - **예시**:
                
                ```jsx
                localStorage.setItem('username', 'JohnDoe');
                localStorage.setItem('preferences', JSON.stringify({ theme: 'dark', fontSize: '14px' }));
                ```
                
        2. **getItem(key)**:
            
            저장된 데이터를 가져옵니다.
            
            - **예시**:
                
                ```jsx
                const username = localStorage.getItem('username'); // "JohnDoe"
                const preferences = JSON.parse(localStorage.getItem('preferences')); // { theme: 'dark', fontSize: '14px' }
                ```
                
        3. **removeItem(key)**:
            
            특정 데이터를 삭제합니다.
            
            - **예시**:
                
                ```jsx
                localStorage.removeItem('username');
                ```
                
        4. **clear()**:
            
            저장된 모든 데이터를 삭제합니다.
            
            - **예시**:
                
                ```jsx
                localStorage.clear();
                ```
                
        
        ### **로컬 스토리지의 활용 예시**
        
        **사용자 로그인 상태 유지**:
        
        로그인 후에 발급된 JWT 토큰을 로컬 스토리지에 저장하여, 새로고침이나 브라우저를 닫았다 열어도 로그인 상태를 유지할 수 있습니다.
        
    - 로컬 스토리지에서 JWT 토큰을 저장하고, 사용하고, 삭제하는 메소드에 대해 찾아보세요!
        
        **1. JWT 토큰 저장**:
        
        ```jsx
        const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // 서버에서 발급된 JWT
        localStorage.setItem('jwt', jwtToken); // JWT를 localStorage에 저장
        ```
        
        **2. 저장된 JWT 토큰 사용**:
        
        저장된 JWT를 API 요청 시 Authorization 헤더에 추가하여 사용합니다.
        
        ```jsx
        const token = localStorage.getItem('jwt');
        fetch('https://api.example.com/protected', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}` // 토큰을 헤더에 추가
          }
        }).then(response => response.json())
          .then(data => console.log(data))
          .catch(err => console.error(err));
        ```
        
        **3. JWT 토큰 삭제**:
        
        ```jsx
        localStorage.removeItem('jwt'); // 특정 키 삭제
        localStorage.clear(); // 모든 데이터 삭제
        ```
        
    
    - 스토리지가 변경되었을 때 처리하는 방법을 조사해 주세요.
        
        `storage` 이벤트를 사용하면 **스토리지 변경**을 감지할 수 있습니다.
        
        이는 **다른 탭에서의 변경 사항도 감지**할 수 있습니다.
        
        ```jsx
        window.addEventListener('storage', (event) => {
          console.log('스토리지가 변경되었습니다:', event);
        });
        ```
        
    - Bearer Token이 무엇인지 찾아보고, 이를 통해 백엔드 서버와 어떠한 방식으로 통신하는지 조사해 보세요!
        
        **Bearer Token**은 인증된 사용자를 식별하기 위한 **인증 토큰**으로, HTTP 요청의 **Authorization 헤더**에 포함됩니다.
        
        ```jsx
        fetch('https://api.example.com/data', {
          headers: {
            'Authorization': 'Bearer <token>'
          }
        });
        ```
        
- Context-API 🍠
    - 전역 상태 관리는 왜 해야할까요?
        
        ### **전역 상태 관리는 왜 해야할까요?**
        
        리액트에서는 **props**로 데이터를 전달하지만, 트리가 깊어지면 데이터 전달이 복잡해집니다.
        
        이를 해결하기 위해 **전역 상태 관리**가 필요합니다.
        
    - Context API란 무엇일까요?
        
        **Context API**는 리액트의 전역 상태 관리 도구로, 상태를 트리의 모든 컴포넌트에 쉽게 전달할 수 있습니다.
        
        **사용 예시**:
        
        ```jsx
        import React, { createContext, useContext } from 'react';
        
        const UserContext = createContext();
        
        function App() {
          return (
            <UserContext.Provider value={{ username: 'JohnDoe' }}>
              <Profile />
            </UserContext.Provider>
          );
        }
        
        function Profile() {
          const { username } = useContext(UserContext);
          return <div>안녕하세요, {username}님!</div>;
        }
        ```
        

<aside>
🍠

잘 이해가 되시지 않는다면, 아래 영상을 참고해도 좋습니다!

</aside>

https://www.youtube.com/watch?v=WQHuqL2S74o&t=877s

https://www.youtube.com/watch?v=WQHuqL2S74o&t=877s

# ✅ 실습

- [ ]  기존 2주차 `React`로 제작한 **`ToDoList`**를, **`Context-API`**를 활용하여 **`리팩토링을 진행`**해주세요!
- 깃허브 주소
- 실행 영상
    
    [화면 기록 2024-11-13 오전 12.18.14.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/39a142ce-a94a-4689-8401-249e05f90840/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-11-13_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.18.14.mov)
    

# 🔥 미션 1. 회원가입 / 로그인 API 연결

<aside>
💡

아래, BE 서버를 활용하여, 아래와 같은 화면을 구현해주세요.
https://github.com/dydals3440/UMC-7th-YONGCHA-BE

</aside>

https://github.com/dydals3440/UMC-7th-YONGCHA-BE

### 1. 회원가입

![스크린샷 2024-09-30 오전 12.17.05.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/78d333fa-aa22-492f-828f-335b3927525d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.05.png)

- [x]  **`회원가입 API`**를 잘 연결하였는가?
- [x]  회원가입 후, `login 페이지`로 이동하였는가?

### 2. 로그인

![스크린샷 2024-09-30 오전 12.18.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/12e13eac-1a6d-4ea4-8688-970d2283b60f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.18.19.png)

- [x]  **`로그인 API`**를 잘 연결하였는가?
- [x]  로그인 후, `메인 페이지`로 이동하였는가?
- [x]  **`AccessToken`**과, **`RefreshToken`**을 **`로컬스토리지에서 저장`**하였는가?

### 3. 로그인 후 메인 페이지 이동 시

![스크린샷 2024-09-30 오전 12.14.44.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/b095f639-230d-4bb4-9fc4-69cee14ada08/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.14.44.png)

- [x]  **`Navbar`**의 로그인, 회원가입 버튼 대신, **`로그아웃 버튼`**을 보여주었는가?
- [x]  **`유저 정보 불러오기 API`**를 호출하여, 로그인 한 유저 이메일 **`@ 기준 앞 부분(닉네임)`**을 Navbar에 잘 보여주었는가?

### 4. 로그아웃 시

![스크린샷 2024-09-30 오전 12.21.38.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/219d8a2b-3eac-4149-a144-c36676387d4f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.21.38.png)

- [x]  로그아웃 후, Navbar에 유저 정보가, 사라지며, **`로그인, 회원가입 버튼이 다시 생겼는가?`**
- [x]  **`AccessToken`**과, **`RefreshToken`**을 **`로컬스토리지에서 제거`**하였는가?

### 5. 추가로 해보면 좋아요!

- [ ]  `refreshToken을 활용`**하여,** `토큰 재발급`**을 진행해보세요.**
    - [ ]  **`Axios Interceptor`**를 활용하여, **`refreshToken`**을 활용하여, **`accessToken`**을 **`재발급`** 받는 로직을 구글 검색을 통해, 직접 해결해보세요!
    - [ ]  **`refreshToken`**을 활용하여, 토큰 재발급을 진행하면, 어떤 부분에서 이점이 있는지 작성해주세요!
    - 어떤 장점이 있을까요?

### 🔥 미션 1. 제출

- 깃허브 주소
- 실행 영상
    
    [화면 기록 2024-11-12 오후 11.59.54.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/7240ca4a-c56e-4343-828b-a022276b7591/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-11-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.59.54.mov)
    

# 🔥 미션 2. QueryParameter 활용 검색 기능 구현

<aside>
💡

아래와 같은, 여러 조건에 대하여 활용해서 검색 기능을 구현해주세요.
단, **`Query-Parmeter`**를 효율적으로 활용해서, 구현해주세요!

</aside>

- [x]  **`Styled-Components`**를 활용해주세요
- [x]  기존에 만들었던, **`movie-card 컴포넌트`**를 재사용해주세요.

1. 영화 제목 검색어를 입력하지 않는 경우 (`/search` 경로에 처음 온 경우)
    
    ![스크린샷 2024-09-25 오후 8.39.03.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/b4deb1da-f975-4254-8e2c-629fead9ec2b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.39.03.png)
    

1. 영화 제목 검색어를 입력한 경우
    
    ![스크린샷 2024-09-25 오후 8.40.23.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/53f552ef-5ecf-451f-95c3-6c0ce839ab3e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.40.23.png)
    

1. 영화 검색어를 입력했으나, 해당 검색어의 영화 데이터가 존재하지 않는 경우.
    
    ![스크린샷 2024-09-25 오후 8.48.41.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5f4401e5-85aa-4ea3-999f-35982279b4a6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.48.41.png)
    

1. 로딩 중인 경우, 아래와 같은 **`Skeleton UI`**를 만들어주세요!

[화면 기록 2024-09-25 오후 9.49.33.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/acd1e244-c55b-48ea-b5dc-d3df7f22c7e8/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.49.33.mov)

1. **`Debounce`**에 대한 키워드를 학습하셨나요?
    - [x]  **`Debounce`** 가 무엇인지 작성해주세요~!
        - Debounce는 무엇인가요?
            
            **Debounce**는 **짧은 시간 동안 연속적으로 발생하는 이벤트**를 **최적화**하기 위해 사용하는 기술입니다. 이벤트가 **지속적으로 발생하는 동안 실행을 지연**시키다가, **일정 시간이 지난 후 마지막 이벤트만 처리**하도록 합니다.
            
            ### **Debounce의 필요성**
            
            **Debounce**는 주로 다음과 같은 상황에서 사용됩니다:
            
            1. **검색창 입력**:
                - 사용자가 검색어를 입력할 때마다 서버에 요청을 보내는 대신, **입력이 끝난 후 일정 시간 동안 멈췄을 때**만 서버에 요청을 보냅니다.
            2. **윈도우 리사이즈 이벤트**:
                - 사용자가 창 크기를 변경할 때 이벤트가 매우 자주 발생하므로, 이를 **최적화**하기 위해 마지막 크기 조정 후 일정 시간 후에만 처리합니다.
            3. **스크롤 이벤트**:
                - 스크롤 할 때마다 계속 호출되는 이벤트를 방지하고, 일정 시간 동안 스크롤이 멈추면 한 번만 실행되도록 제어합니다.
    
    - [ ]  Debounce를 검색 기능에 적용해주세요!
        - 실행 영상 첨부
        
- [ ]  혹시라도, 구현에 어려움을 느끼신 경우, 아래 영상을 참고해서, 미션을 수행해주세요.

https://www.youtube.com/watch?v=L3eGGsAyd_A

### 🔥 미션 2. 제출

- 깃허브 주소
- 실행 영상
    
    [화면 기록 2024-11-14 오전 12.07.20.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/12aa20e0-71b1-446c-8fd8-fbc6f1bce527/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-11-14_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.07.20.mov)
    

