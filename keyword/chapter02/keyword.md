### React의 동작 원리

React는 User Interface Library이다. 리액트의 핵심적인 특징은 아래와 같다.

<aside>
💡

각 특징들이 무엇인지, 어떠한 이점이 있는지 정리해주세요

- UMC 웹 파트장 매튜 / 김용민 - 

</aside>

1. SPA (Single Page Application)
- 정리
    
    SPA는 **Single Page Application**의 약자이다.
    
    **SPA(Single Page Application)**는 말 그대로 한 개의 페이지로 이루어진 어플리케이션이라는 의미이다. 전통적인 웹 페이지는 다음과 같이 구성되어 있다.
    
    !https://velog.velcdn.com/images%2Fdaybreak%2Fpost%2F73d3a899-9092-4ebd-9ee7-aa2c214bf3e6%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202020-05-21%2012.32.47.png
    
    기존에는 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아오고, 페이지를 로딩 할 때 마다 서버에 리소스를 전달 받아 해석한 뒤 화면에 보여주었다. 요즘은 웹에서 제공되는 정보가 많기 때문에 새로운 화면을 보여 주어야 할 때마다 서버 측에서 모든 뷰를 준비한다면 성능 상의 문제가 발생할 수 있다. 이러한 방식은 비효율적이다.
    
    그래서 React 같은 라이브러리 혹은 프레임 워크를 사용하여 View렌더링을 사용자의 브라우저가 담당하도록 하고, 우선 어플리케이션을 브라우저에 불러와서 실행시킨 후에 사용자와의 인터랙션이 발생하면 필요한 부분만 자바스크립트를 사용하여 업데이트 해준다. 만약 새로운 데이터가 필요하다면 서버 API를 호출하여 **필요한 데이터만 새로 불러와** 어플리케이션에서 사용할 수 있다.
    
    !https://velog.velcdn.com/images%2Fdaybreak%2Fpost%2Fcaacf6bd-f43f-4686-8b7a-167b22bf3cbd%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202020-05-21%2012.40.12.png
    
    싱글페이지라고 화면이 한 종류일까? 절대 그렇지 않다. 요즘은 웹에서 제공되는 정보의 양도 어마어마하고 페이지 수도 엄청나게 많다.
    
    다른 주소에 다른 화면을 보여주는 것을 Routing이라고 한다. 리액트 자체에 이 기능이 내장되어 있지는 않다. 그 대신 브라우저의 API를 직접 사용하여 관리하거나, 라이브러리를 사용하여 쉽게 구현할 수 있다.
    
    하지만 이러한 SPA에도 단점이 있다.
    
    1. 앱의 규모가 커지면 자바스크립트 파일이 너무 커진다는 것이다. (페이지 로딩 시 실제 사용자가 방문하지 않을 수도 있는 페이지의 스크립트도 불러오기 때문이다.)
    2. SEO , 크롤러가 페이지 정보를 수집하지 못하여 페이지 검색이 힘들다. (구글,네이버 같은)대형 포털싸이트에 검색 안 될 경우도 있음.
        
        
        내가 이해한 부분 : 우리가 쓰는 일반 홈페이지는 상단의 nav바를 통해 페이지마다의 js파일을 불러온다. 그래서 싱글페이지인 것이다.
        
2.  User Interface Library 
- 정리
    
    React는 UI를 구축하기 위한 **라이브러리**로, 컴포넌트 기반 아키텍처를 통해 개발자가 복잡한 사용자 인터페이스를 관리하고 유지 보수할 수 있도록 돕는다.
    
    이는 UI를 작은 단위로 나누어 재 사용성과 가독성을 높이며, 컴포넌트 별로 상태와 로직을 캡슐화하여 코드의 유지 보수를 쉽게 한다.
    
3. Functional Component (함수형 컴포넌트)
- 정리
    
    📌**React 컴포넌트(Component)의 역할**
    
    리액트에서는 화면에서 보이는 인터페이스를 설계할 때 '컴포넌트' 단위로 설계가 이루어진다. 컴포넌트는 가장 기본적인 템플릿으로 데이터를 받아서  화면에 필요한 UI형태로 띄워주는 역할을 한다. 
    
    리액트에서는 이런 컴포넌트 단위로 앱을 구성하게 되는데, 컴포넌트는 선언 방식에 따라서 함수형 컴포넌트, 클래스형 컴포넌트로 나눠진다.
    
    **함수형(Function) 컴포넌트**는 자바스크립트의 함수형태로 표현되는 컴포넌트이다.
    
    이는 return 뒤에 JSX 코드를 넣어줘서 반환을 하게 된다. (이거 화살표함수로 가능!!!)
    
    ```jsx
    function about() {
      return (
          <div>
            <h2>Hello React</h2>
          </div>
      )
    }
    
    export default about;자바스크립트에 익숙한 개발자라면 확실히 직관적이며,
    메모리 자원도 클래스형 컴포넌트보다 덜 사용하게 된다.큰 차이는 아니지만, 
    빌드 후 배포할 때도 함수형 컴포넌트가 파일크기도 더 작아진다.
    ```
    
4. Virtual DOM (가상 DOM)
- 정리
    
    우선, 리액트는 가상 돔(Virtual DOM)을 사용해 보다 효율적으로 우리가 원하는 페이지를 브라우저에 빠르게 그려준다.
    
    이 Virtual DOM은 실제 DOM과 같은 내용을 담고 있는 복사본이라고 생각하시면 쉽다. 이 복사본은 실제 DOM이 아닌 **JS** 객체 형태로 메모리 안에 저장되어 있다.
    
    Virtual DOM은 실제 DOM의 복사본이기 때문에, 실제 DOM의 모든 element과 속성을 공유한다. 차이점은 브라우저에 있는 문서에 직접적으로 접근할 수 없다는 점인데, 때문에 화면에 보여지는 내용을 직접 수정할 수 없다. 그렇다면 Virtual DOM은 왜 사용하는 것일까?
    
    리액트는 이를 굉장히 똑똑하게 사용하고 있는데, 이를 통해 실제 DOM을 조작하는데 걸리는 시간을 획기적으로 줄여준다.
    
    만약 폰트의 컬러만 바꾸고 싶어도, 다음과 같이 DOM조작을 필요로 하게 된다 - 
    
    ```jsx
    document.querySelector(‘#title”).style.color = “red”;
    ```
    
    이는 다음과 같은 순서로 진행된다. - 
    
    1. 브라우저는 HTML을 탐색해 해당 Element를 찾고, 해당 Element와 자식 Element들을 DOM에서 제거.
    2. 이후 새롭게 수정된 Element로 이를 교체하고, CSS는 이 과정 이후 다시 계산하여 결과적으로는 레이아웃 정보를 알맞게 수정한다.
    
    이렇게 새롭게 계산된 내용이 브라우저에 그려지는 방식으로 플로우가 진행되는 것이다.
    
    하지만 이를 반복적으로 수행한다면? 충분히 무거워질 수 있는 작업이 될 수도 있다.
    
    앞서 말했듯이, 가상 DOM은 실제 DOM과 내용을 공유하는 복사본이다.
    
    하지만, 실제 DOM과 다르게 직접적으로 브라우저 화면의 UI를 조작할 수 있게 해주는 API는 제공하지 않는다. 가상 돔은 메모리에 저장되어 있는 자바스크립트 객체에 불과하기 때문이다. 
    
    때문에, 가상 돔에 접근하고 수정하는 것은 매우 가볍고 빠른 작업이 되는 것이다. *“실제 브라우저에 접근하는 것이 아니기 때문이기에.”*
    
    그렇다면 리액트는 어떤 식으로 가상 돔을 활용해 보다 효율적으로 실제 DOM을 조작할까?
    
    리액트는 항상 두개의 가상 돔 객체를 가지고 있다.
    
    1. 렌더링 이전 화면 구조를 나타내는 가상 돔
    2. 렌더링 이후에 보이게 될 화면 구조를 나타내는 가상 돔
    
    리액트는 STATE가 변경될 때마다 Re-Rendering이 발생하는데, 실제 브라우저가 그려지기 이전인 이 시점마다 새로운 내용이 담긴 가상 돔을 생성하게 된다.
    
    사실 처음엔 나도 이 말이 쉽게 이해가 안됐는데, 이는 쉽게 말해 리액트는 화면을 직접 수정하기 전에 "바뀐 내용이 어디인지"를 먼저 확인하고 나서 필요한 부분만 업데이트한다는 것이다. 예를 들어, 버튼 색상이 빨간색에서 파란색으로 바뀌었다면, 리액트는 가상 DOM에서 버튼의 색상만 바꾸고, 나머지 화면은 그대로 둔다.
    
    이 과정을 통해 불필요한 화면 전체의 업데이트를 피하고, 빠르게 변경된 부분만 반영할 수 있게 된다.
    
    자, 다음과 같이 그림과 함께 보자.
    
    !https://miro.medium.com/v2/resize:fit:700/1*JCrDk-N-wpPnE9j0GObItg.png
    
    그림을 보면 렌더링 이전에 화면의 내용을 담고있는 첫 번째 가상 돔과, 업데이트 이후에 발생할 두 번째 가상 돔을 비교해 정확히 어떤 Element가 변했는 지를 비교한다. 이를 리액트에선 **Diffing**이라고 표현한다.
    
    **Diffing**은 효율적인 알고리즘을 사용해 진행되기 때문에, 어떤 Element에 차이가 있는지를 매우 신속하게 파악할 수 있게 된다.
    
    리액트는 이를 통해 차이가 발생한 부분 만을 (브라우저 상의) 실제 DOM에 적용하게 되는 것이다.
    
    이 과정을 **Reconciliation(재조정)**이라고 한다. 이 과정이 매우 효율적인 이유는 Batch Update때문인데, 이는 변경된 모든 Element들을 집단화 시켜 이를 한번에 실제 DOM에 적용하는 방식이다.
    
    예를 들어, 리스트안에 10개의 항목이 바뀌었다면 실제 DOM을 10번 반복해 수정하는 것이 아닌, 한 번에 집단화 시켜 이를 적용한다는 것이다.
    
    DOM을 자주 수정할수록 브라우저는 화면을 자주 다시 그려야 하므로 성능이 저하되기에, 변경된 내용을 한 번에 받아와 이를 실제 DOM에 한번에 적용 시켜 준다는 점이 효율적이라는 것이다.
    
5. 동시성 렌더링
- 정리
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/3dc54147-1a2b-4b70-b77b-a6eee228607b/image.png)
    
    React가 화면 업데이트를 비동기적으로 처리하여, 렌더링 과정에서 UI가 멈추지 않고 사용자의 상호작용에 신속히 반응할 수 있도록 하는 기술이다.
    
    이에 대한 이점으로는, 대규모 애플리케이션에서 화면 갱신 속도를 향상시켜, 복잡한 계산이나 데이터 로딩 중에도 사용자 경험을 부드럽게 유지할 수 있다.




    여러개를 반환하고 싶은 경우는 어떻게 해야 할까요?
코드와, 이유를 간략하게 작성해주세요.

- 답변 🍠
    
    ```jsx
    // 코드 아래 첨부
    function App() {
      return (
         <>
          <strong>상명대학교</strong>
          <p>매튜/김용민</p>
         </>
      )
    }
    
    export default App
    
    ```
    
    <aside>
    💡
    
    이유: 
    빈 태그 `<></>`를 사용하면 불필요한 DOM 노드를 생성하지 않고 여러 요소를 반환할 수 있어 효율적이기 때문이다.
    
    </aside>

    # 실습 - ToDoList 만들며 useState 익히기 🍠

<aside>
💡

이번 실습은 위에서 학습한 jsx 문법과 **`useState`**를 활용하여 TodoList를 만들어보고자 합니다.

개발 하면서 필수라고 말할 수 있는

1. 추가
2. 수정
3. 삭제

3 가지 요소를 배워보고자 합니다.

스스로 만들어 보는 것이 매우 좋으나, WEB 파트 같은 경우, 아직 HTML, CSS, JS에 익숙하지 않은 사람이 매우 많기에, 여러 번 되돌려서 볼 수 있도록 강의 형태로 제공해 드리는 점 참고 바랍니다.

처음부터 막히고, 매우 어려운 것이 당연하며, 좌절하지 마시고, 여러 번 만들어 보시면 금방 이해하실 수 있습니다!

최대한 자세하게 설명을 드리려고, 강의 영상 자체가 조금 깁니다.

너무 강의 영상에 의존하지 말고, 혼자 구글링을 하시며, 만들어 보고자 노력하시면 좋겠습니다!

**- UMC 7th 중앙 WEB 파트장 매튜/김용민 -**

</aside>

https://www.youtube.com/watch?v=8pm6o5dXtw0&t=3182s

https://www.youtube.com/watch?v=8pm6o5dXtw0&t=1032s

수정하기 부분에서 자바스크립트의 얕은 복사, 깊은 복사에 대해 많이 헷갈리시는 분이 있을 것 이라고 생각합니다. 이에 대해 한번 정리해주시면 좋을 것 같습니다!

- 얕은 복사 🍠
    
    얕은 복사는 객체의 1단계 깊이까지만 복사하여, 내부의 중첩 객체는 참조 값만 복사한다. 이는 원본 객체와 복사본이 동일한 내부 객체를 참조하게 되므로, 한쪽의 중첩 객체를 수정하면 다른 쪽에도 영향을 미친다.
    
- 깊은 복사 🍠
    
    깊은 복사는 객체의 모든 레벨을 재귀적으로 복사하여, 원본 객체와는 완전히 독립된 복사본을 생성한다. 이는 원본 객체와 복사본이 서로 다른 메모리 주소를 가지므로, 한쪽의 객체를 수정해도 다른 쪽에는 영향을 주지 않는다.
    
    —> 
    얕은 복사는 **객체의 참조를 공유**하고, 깊은 복사는 **새로운 객체를 생성**하여 원본과 독립적으로 동작한다는 점을 기억하면 된다.