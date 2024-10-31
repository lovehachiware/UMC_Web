### 키워드 정리 🍠

- `useEffect`  🍠
    
    리액트(react) 공식 문서에 의하면, useEffect 는 외부 시스템과 컴포넌트를 동기화 할 수 있게 해주는 리액트 훅(hook) 이라고 정의 되어 있다. 여기서 말하는 외부 시스템이란, 리액트에 의해 제어 되지 않는 것들을 말합니다. 리액트에 의해 제어 되지 않는 예시는 다음과 같다.
    
    - API 통신
    - ref 를 이용한 dom 제어
    - window 전역 객체에 이벤트 리스너 할당 또는 해제
    
    이 밖에도 여러가지가 있겠지만, 대체로 이런 상황일 때 useEffect 를 사용하게 된다. 
    
    useEffect 는 2개의 인자를 받는데 첫번째 인자로는 로직이 작성되어 있는 함수를 받고, 두번째 인자로는 여러 상태 값들을 배열로 받아 배열에 주어진 상태 값들의 변화가 감지된 경우 첫번째 인자의 함수가 호출된다. 
    
    그리고 이러한 useEffect 는 렌더링이 완료 된 이후에 호출된다.
    
    ```jsx
    useEffect(() => {
    // 실행할 작업
    return () => {
    // 클린업 작업 (컴포넌트 언마운트 시 실행)
    };
    }, [의존성 배열]);
    ```
    
    `의존성 배열`에 값이 들어가면 해당 값이 변경될 때만 `useEffect`가 실행된다.
    
     빈 배열 `[]`을 넣으면 컴포넌트가 처음 마운트 될 때만 실행되고 이후에는 실행되지 않는다.
    
- `try, catch, finally` 구문  🍠
    
    개발을 하다보면 예상하지 못한 버그들이 많이 발생하곤 하는데, 특히 JS는 유동적인 언어라 버그지만 에러가 발생하지 않거나 어디에서 구체적으로 발생한 것인지 알기 어려울 때가 많다. 이럴 때 예외 처리 구문을 활용하면 에러 내용, 에러 발생 위치를 알 수 있어 버그를 잡기 쉽다.	
    
    프로그래밍에서 예외를 처리하는 방법에는 여러 가지 있다. 대표적으로 사용하는 방법이 바로 If조건문과 try, catch, finally이다. 전자는 일반적인 예외 처리 방법이라면, 후자는 고급 예외 처리에 속한다고 한다.
    
    이제 후자인 `try, catch, finally` 에 대해 알아보자.
    
    Try는 프로그램이 일반적으로 실행될 코드 블록을 정의하는 역할을 한다. 
    
    그리고 catch는 try 블록 안에서 예외가 발생할 때 해당 예외를 '잡아내는' 역할을 한다. 
    
    마지막으로 finally는 try 블록과 관계 없이 항상 실행이 보장되어야 하는 코드를 실행하는 역할을 한다.
    
    여기서 Try는 필수, catch나 finally는 생략 가능하지만, 둘 중 하나와 반드시 같이 사용되어야 한다.
    
    예시로 Try, catch, finally를 작성하는 기본 형식은 다음과 같다.
    
    ```jsx
    try {
    	//일반적으로 실행되는 코드
      	// 예외가 발생할 수도 있고, 아닐 수도 있다.
    } catch(error) {
    	// try 블록에서 예외가 발생할 경우 실행
      	// 지역 변수 error (e 여도 되고)를 사용해서 예외를 처리한다.
        // 필요에 따라 또 다른 예외를 발생시키거나, 예외를 무시하기도 한다.
    } finally {
    	// try 블록이 종료되면 실행되는 부분
        // try 블록과 관계없이 무조건 실행된다.
    }
    ```
    
    ```jsx
    function sum(a, b) {
      try {
      		if (a !== number || b !== number) {
    			throw new Error('a와 b는 모두 숫자여야 합니다.')
    		}
    
    		return a + b
    
      } catch(error){
      		console.log('함수 sum', error);
      } finally{
      		console.log('함수 동작 완료')
      }
    
    }
    
    console.log(sum(5, 3)) // 8, '함수 동작 완료'
    console.log(sum('5', 3))
    // 함수 sum에서 에러 발생: Error: 'a와 b는 모두 숫자여야 합니다.'
    // '함수 동작 완료'
    ```
    
- `axios`  🍠
    
    이 Axios는 chapter3에서도 제일 이해가 안되었던 부분이기에, 이해하는데 도움이 되었던 글을 스크랩해왔다. ( 출처 : [https://velog.io/@shin6403/React-axios란-feat.-Fetch-API](https://velog.io/@shin6403/React-axios%EB%9E%80-feat.-Fetch-API) )
    
    Axios는 브라우저, Node.js를 위한 **Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.**
    
    (백엔드와 프론트엔드와 통신을 쉽게하기 위해 AJAX도 더불어 사용하기도 한다.)
    
    ## # Axios 특징
    
    - 운영 환경에 따라 브라우저의 XMLHttpRequest 객체 또는 Node.js의 HTTP API 사용
    - Promise(ES6) API 사용
    - 요청과 응답 데이터의 변형
    - HTTP 요청 취소 및 요청과 응답을 JSON 형태로 자동 변경
    
    ## # HTTP Methods
    
    **클라이언트가 웹서버에게 사용자 요청의 목적/종류를 알리는 수단**
    
    이 Method중 Axios 통신하면서 가장 많이 사용되는 메소드를 정리해보았다.
    
    ### 1. GET
    
    > GET : 입력한 url에 존재하는 자원에 요청을 한다.
    > 
    
    ### 문법
    
    ```jsx
    axios.get(url,[,config])
    ```
    
    **`Q) Get이 데이터를 받아오는 것이라고 했는데, 저는 로그인을 구현할때 GET을 사용했는데요?`**
    
    GET으로 로그인을 구현했을때 웹 사이트 주소창의 형태를 잘 보면 이러한 형태가 나온다.
    
    ```jsx
    www.server.com/login?id=Hnk&pw=1234  // 실제로 없는 사이트이다, 이해를 돕기 위해서 추가했다. 오해하지 말자.
    ```
    
    웹 사이트 뒤에 쿼리스트링이 붙여진 것을 확인할 수 있다.
    
    **✅ GET은 서버에서 어떤 데이터를 가져와서 보여준다거나 하는 용도이다.**
    
    주소에 있는 쿼리스트링을 활용해서 정보를 전달하는 것이지 **GET메서드는 값이나 상태등을 바꿀 수 없다.**
    
    **예제 코드**
    
    ```jsx
    //가상으로 보여주는 코드와 response 형태이다. 참고만 하길 바란다.
    import axios from 'axios';
    
    axios.get('https://localgost:3000/sewon/user')
      .then((Response)=>{console.log(Response.data)})
      .catch((Error)=>{console.log(Error)})
    ```
    
    ```
    [
      { id: 1, pw: '1234', name: 'sewon' },
      { id: 2, pw: '1234', name: 'hongil' },
      { id: 3, pw: '1234', name: 'daeyeon' }
    ]
    
    ```
    
    응답은 `json` 형태로 넘어온다.
    
    ### 2. POST
    
    > POST : 새로운 리소스를 생성(create)할 때 사용한다.
    > 
    
    ### 문법
    
    ```jsx
    axios.post("url주소",{
      data객체
        },[,config])
    ```
    
    **POST 메서드의 두 번째 인자는 본문으로 보낼 데이터를 설정한 객체 리터럴을 전달한다.**
    
    **`Q) Post는 새로운 리소스를 생성할 때 사용되는데 그러면 언제 POST를 사용하나요?`**
    
    ✅ 로그인, 회원가입 등 사용자가 생성한 파일을 서버에다가 업로드할때 사용한다.
    
    **Post를 사용하면 주소창에 쿼리스트링이 남지 않기때문에 GET보다 안전하다.**
    
    **예제 코드**
    
    ```jsx
    axios.post( 'url',
      {
       contact: 'Sewon',
       email: 'sewon@gmail.com'
       },
      {
       headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
          }
        }
    )
      .then((response) => { console.log(response.data); })
      .catch((response) => { console.log('Error!) });
    
    ```
    
    ### 3. Delete
    
    > REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 삭제하는 목적으로 사용한다.
    > 
    
    ### 문법
    
    ```jsx
    axios.delete(url,[,config]);
    ```
    
    ✅ Delete메서드는 HTML Form 태그에서 기본적으로 지원하는 HTTP 메서드가 아니다.
    
    Delete메서드는 서버에 있는 데이터베이스의 내용을 삭제하는 것을 주 목적으로 하기에 두 번째 인자를 아예 전달하지 않는다.
    
    **예제 코드**
    
    ```jsx
    axios.delete("/thisisExample/list/30").then(function(response){
        console.log(response);
          }).catch(function(ex){
          throw new Error(ex)
    }
    ```
    
    ### 4. PUT
    
    > REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 갱신하는 목적으로 사용된다.
    > 
    
    ### 문법
    
    ```jsx
    axios.put(url[, data[, config]])
    ```
    
    ✅ PUT메서드는 HTML Form 태그에서 기본적으로 지원하는 HTTP 메서드가 아니다.
    
    PUT메서드는 서버에 있는 데이터베이스의 내용을 변경하는 것을 주 목적으로 하고 있다.
    
- `fetch`  🍠
    
    우리는 자바스크립트를 사용하면, 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 할 수 있다.
    
    백앤드로부터 데이터를 받아오면 API를 호출하고 데이터 응답을 받는데
    
    이때 자바스크립트 fetch()함수를 사용하거나 axios 라이브러리를 사용한다.
    
    브라우저에서 fetch()함수를 지원하기 이전에는, 클라이언트 단에서 직접 HTTP 요청하고 응답받는게 상당히 복잡해서 이러한 라이브러리를 사용하는것이 합리적이였다.
    
    하지만 요즘에는 오히려 라이브러리 사용하는 것이 자바스크립트 번들 파일의 크기만 늘려 낭비가 될 수 있으므로 브라우저에 내장된 fetch() 함수를 이용하여 사용한다고 한다.
    
    이는 다음과 같이 사용할 수 있다. 
    
    ```jsx
    fetch(url, [options])
      .then((response) => console.log("response:", response))
      .catch((error) => console.log("error:", error));
    ```
    
    url : 접근하고자 하는 URL,
    
    options : 선택 매개변수 (options에 아무것도 넘기지 않으면, GET 메서드로 진행되며 url로부터 콘텐츠가 다운로드 된다.
    
    fetch()를 호출하게되면 브라우저는 네트워크로 요청을 보내고 프라미스가 반환된다.
    
    반환된 객체는 API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고,
    
    실패했을 경우에는 error 객체를 reject 한다.
    
- `axios` vs `fetch` (차이점)  🍠
    - `Fetch()`는 **body** 프로퍼티를 사용하고,`axios`는 **data** 프로퍼티를 사용한다.
    - `Fetch`의 url이 `Fetch()`함수의 인자로 들어가고, `axios`에서는 url이 `option`객체로 들어간다.
    - `Fetch`에서 **body**부분은 stringify()로 되어진다.
    
    > 이처럼 axios는 HTTP 통신의 요구사항을 컴팩트한 패키지로써 사용하기 쉽게 설계 되었다.
    > 
    
    는 것이 블로그의 설명인데, 이에 대해 더 자세히 알아보자.
    
    - **Fetch와 axios의 사용 방식 차이**
        - **fetch**: `fetch()`는 기본적으로 `url`을 함수의 첫 번째 인자로 받고, 두 번째 인자로 옵션 객체를 넣는다. 이 옵션 객체에는 요청의 방식을 정의하는 `method`, 보낼 데이터를 담는 `body` 등을 포함할 수 있다.
            
            예시:
            
            ```jsx
            fetch('https://api.example.com/data', {
              method: 'POST', // 요청 방식
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ name: 'John', age: 30 }) // 보낼 데이터
            });
            ```
            
        - **axios**: `axios`는 요청 시 `url`, `method`, `data` 등을 옵션 객체 형태로 설정하며, `data` 프로퍼티에 보낼 데이터를 담는다.
            
            예시:
            
            ```jsx
            axios({
              method: 'post',
              url: 'https://api.example.com/data',
              data: { name: 'John', age: 30 } // 보낼 데이터
            });
            ```
            
    - **Fetch는 데이터를 `JSON.stringify`로 문자열로 변환해야 한다.**
        - `fetch()`는 데이터를 보낼 때 **body 부분을 문자열 형식**으로 변환해야 한다. 그래서 `JSON.stringify()`를 이용해 데이터를 JSON 문자열로 바꿔야 한다.
        - `axios`는 **자동으로 데이터를 JSON 형식으로 처리**해주므로, 별도로 변환할 필요가 없다. 그래서 객체 형태 그대로 `data`에 넣으면 된다.
    - **정리**
        - `fetch`는 약간의 추가 설정이 필요하고, 데이터를 JSON 형식으로 직접 변환해야 하지만,
        - `axios`는 이런 과정이 이미 설계에 포함되어 있어 좀 더 간편하고 쉽게 사용할 수 있다. `axios`는 **HTTP 요청의 요구사항을 간결하게 처리**해주는 패키지라 볼 수 있다.
- `.env` 파일에는 어떤 내용들을 관리할까요?  🍠
    
    `.env` 파일에는 애플리케이션의 민감한 정보를 **환경 변수**로 관리한다. 이 파일은 애플리케이션 설정과 중요한 정보를 코드에 직접 포함하지 않고 외부 파일에 따로 저장해 보안성을 높여준다. `.env` 파일을 사용하면 서버 환경에 따라 유연하게 설정을 변경할 수 있어, 배포와 유지보수에도 큰 도움이 된다.
    
    민감한 정보에는 API키, 데이터베이스 정보, 비밀 키, 서버 환경 정보, 기타 설정 값(포트 번호, 특정 기능을 활성화하는 플래그와 같이 애플리케이션 환경 설정에 필요한 다양한 변수)가 포함된다.
    
    이때 중요한 점은, `.env` 파일은 프로젝트 폴더에 포함되어 있지만 보안상 **GitHub 같은 공개 저장소에는 업로드하지 않도록** `.gitignore`에 추가하여 관리해야 한다는 것이다…! 큰일나용ㅠ_ㅠ
    
    이제 `.env`파일을 사용하는 방법에 대해 알아보자!
    
    우선, 파일 안에 저장할 환경변수 내용을 적어준다.
    
    이때 중요한 점은, 반드시 변수명 앞에 **REACT_APP_ 을 붙여줘야 한다!!**
    
    이걸 붙여주지 않으면 리액트 앱에서는 변수를 불러오지 않는다.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/9fb237f7-eb99-4aef-b3b4-1427be919889/image.png)
    
    리액트는 라이브러리나 컴포넌트 사용 시 import를 꼭 해줘야 하지만,
    
    .env에 등록된 변수는 별도의 import가 필요하지 않는다.
    
    따라서 전역 어디서든 다음과 같이 process.env.으로 가져와서 사용하면 된다.	
    
    ```jsx
    process.env.REACT_APP_SLACK_BOT_TOKEN
    ```
    
- **`custom hook ?`**
    
    커스텀 훅이란? 반복되는 로직을 리액트 내장 훅 들을 사용하여 구현한'내가 만든 훅'이라고 생각하면 된다.
    다시 말하자면, 반복되는 로직을 **재사용 가능한 형태로 만들어** 여러 컴포넌트에서 쉽게 활용할 수 있게 하는 기능이다.
    
    '반복되는 로직을 분리' 했는데분리한 로직 속에 리액트 훅이 있다? > '커스텀 훅'
    
    분리한 로직 속에 리액트 훅이 없다? > '(JS) 함수'
    
    이름 규칙
    
    - 커스텀 훅의 이름은 "use"로 시작해야 한다.
    예를 들어, useCounter나 useFetchData와 같은 이름.
    내장 훅(Hook) 사용
    - 커스텀 훅 내에서 내장 훅(예: useState, useEffect)을 사용.
    이렇게 하면 커스텀 훅의 로직을 더욱 강력하게 만들 수 있다.
    
    상태와 함수 반환
    
    - 커스텀 훅은 상태 값과 해당 상태를 업데이트하는 함수를 반환합니다.
    예를 들어, 카운터를 관리하는 커스텀 훅은 현재 카운트 값과 카운트를 증가시키는 함수를 반환할 수 있다.
    - 로직 모듈화
    커스텀 훅은 비즈니스 로직을 모듈화 하고, 여러 컴포넌트에서 재사용할 수 있는 추상화된 API를 제공하는 데 사용된다.
    예를 들어, 로그인 상태 관리, 데이터 가져오기, 테마 설정, 폼 상태 관리 등과 같은 일반적인 로직을 커스텀 훅으로 추상화하여 코드를 더 간결하고 유지보수하기 쉽게 만들 수 있다.
    
    다음은 간단한 커스텀 훅의 예제이다.
    
    ```jsx
    import { useState } from 'react';
    
    // 커스텀 훅 정의
    function useCounter(initialValue = 0) {
      const [count, setCount] = useState(initialValue);
    
      // count를 증가시키는 함수
      function increment() {
        setCount(count + 1);
      }
    
      // count를 감소시키는 함수
      function decrement() {
        setCount(count - 1);
      }
    
      // count를 리셋하는 함수
      function reset() {
        setCount(initialValue);
      }
    
      // 현재 count와 관련된 값을 반환하는 함수
      function getCount() {
        return count;
      }
    
      return {
        count,
        increment,
        decrement,
        reset,
        getCount,
      };
    }
    ```
    
    ```jsx
    // 커스텀 훅 사용 예제
    function Counter() {
    const counter = useCounter(0);
    
    return (
    <div>
    <p>Count: {counter.count}</p>
    <button onClick={counter.increment}>증가</button>
    <button onClick={counter.decrement}>감소</button>
    <button onClick={counter.reset}>리셋</button>
    </div>
    );
    }
    
    export default Counter;
    ```