# 📝 학습 목표

---

1. CSS-in-JS 중 `Styled-Component`에 대해 학습합니다.
2. **`React Router`**를 활용하여, 프로젝트 라우팅을 진행해봅니다.
3. 리액트 훅 중 **`useEffect`**에 대해 심도있게 알아봅니다.

<aside>
💡 이번 주차는 `CSS-in-JS` 방식에 대해 학습을 진행합니다. `React Router`를 활용하여, **`SPA`** 방식의 웹사이트를 만드는 것을 실습해봅니다. 추가적으로, `useEffect` Hook에 대해 심도있는 학습을 해보며, 실제로 서버로부터 데이터를 받아오는 실습을 진행해봅니다.

</aside>

# ⚠️  스터디 진행 방법

---

1. 스터디를 진행하기 전, 워크북 내용들을 모두 채우고 스터디에서 서로 모르는 내용들을 스터디원과 함께 공유해 주세요.
2. 실습과 미션은 워크북 내용들을 모두 완료한 후, 스터디 전에 진행해 오세요!
    - 1주 차 스터디 이전에 1주 차 워크북을 완성한 후 스터디를 진행해 주세요.
3. 스터디 시간에는 각자 해 온 미션들을 공유하고, 아래의 과정을 진행합니다.
    1. 스터디원과 함께 코드 리뷰 진행.
    2. 코드 리뷰 이후, 본인의 코드의 문제가 있는 경우 리팩토링 진행.
    3. 팀원들과, 조금 더 코드를 깔끔하게 작성할 수 있는 개선점이 있을지 고민 후, 리팩토링 진행.
    4. 각자 미션을 진행하면서 해결하지 못한 이슈를 공유 후, 해당 이슈를 도움받아 해결.
4. 매주 주어진 미션을 성실하게 제출합니다.
5. 🍠 이모지가 붙어있는 곳은, 직접 여러분들이 채워 넣으셔야 하는 부분입니다. 꼭 Google을 통한 검색을 하시고, VSCode를 활용하여, 실행 결과를 눈으로 보시면서 정리해 주세요!

# 📸 잠깐 ! 스터디 인증샷은 찍으셨나요?📸

---

* 스터디리더께서 대표로 매 주차마다 한 장 남겨주시면 좋겠습니다!🙆💗
 (사진을 저장해서 이미지 임베드를 하셔도 좋고, 복사+붙여넣기해서 넣어주셔도 좋습니다!)

[]()

# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

### Styled-Components에 대한 학습 🍠

- **`Styled-Components`**는 무엇일까요~?
    
    ### Styled-Component
    
     우리는 지금까지**`style={{ ‘key’: ‘property’ }}` 과** **`className`**  **과 같은 인라인 스타일링 방식 CSS-in-CSS 방식을** 활용해서 스타일링을 진행했습니다.
    
     컴포넌트를 스타일링하는 다른 방식은, 자바스크립트 파일을 활용하여, 스타일을 선언하는 것 입니다. 이러한 방식을 우리는 **`CSS-in-JS`**라고 부르며, 이러한 방식을 활용하는 라이브러리가 상당히 많이 존재합니다. 대표적인 방식으로는 **`Styled-Component`**와 **`Emotion`**이 존재합니다. 
    
     현재 우리는 **`Styled-Component`**를 활용한 스타일링 방식에 대해 배워보겠습니다.
    
    ### 🍠 실습  Styled Component를 활용하여, 버튼 꾸며보기 🍠
    
    먼저, 라이브러리를 설치해보겠습니다.
    
    ```tsx
    npm i styled-components
    ```
    
    먼저 **`src/components`** 폴더에, **`custom-button.jsx`** 파일을 만들어보겠습니다.
    
    ![스크린샷 2024-09-12 오전 2.02.40.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/9070dd1c-1507-40ae-86df-b85dc884abe4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.02.40.png)
    
    그 후 **`App.jsx`**에 **`custom-button` 컴포넌트를** 연결해보겠습니다.
    
    ```tsx
    // custom-button.jsx
    
    const CustomButton = () => {
        return (
            <button>
                커스텀 버튼
            </button>
        );
    };
    
    export default CustomButton;
    
    ```
    
    ```tsx
    // App.jsx
    
    import './App.css'
    import CustomButton from "./components/custom-button.jsx";
    
    function App() {
        return (
            <>
                <CustomButton/>
            </>
        )
    }
    
    export default App
    
    ```
    
    ![스크린샷 2024-09-12 오전 2.05.15.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/3fcf8ece-7b39-4f3c-8947-47aaae504ca9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.05.15.png)
    
    ### 1. Styled-Component 문법 설명
    
    ### 1. 스타일 요소 정의 이후 사용 방법
    
     스타일 요소를 정의하기 위해서는 **`styled.태그명`** 다음 **`백틱(``)를 활용`**해서 스타일을 지정할 수 있습니다. 스타일 속성들은, 이전에 배운 **`CSS-Property`**와 동일합니다.
    
    ```jsx
    // button 태그를 만들고 싶을떄 button 태그명을 작성해주면 됩니다.
    const FirstStyledSweetPotato = styled.button`
        background-color: purple;
        border: none;
        padding: 0;
        cursor: pointer;
    `
    
    // div 태그를 만들고 싶을때는 아래와 같이 하면 되겠죠?
    const StyledDivComponent = styled.div`
      // ... 생략
    `
    
    ```
    
    사용 방법은 매우 간단합니다. 만든 컴포넌트 명을 import 해서 일반 태그 사용하는 것 처럼 해주시면 됩니다.
    
    ```jsx
    import styled from "styled-components";
    
    const CustomButton = () => {
        return (
            <FirstStyledSweetPotato>
                커스텀 고구마 버튼
            </FirstStyledSweetPotato>
        );
    };
    
    export default CustomButton;
    
    const FirstStyledSweetPotato = styled.button`
        background-color: purple;
        border: none;
        padding: 0;
        cursor: pointer;
    `
    
    ```
    
    ### 2. CSS 의사 클래스(가상 클래스) 선택자 적용 방법
    
    무엇인가, 마우스를 올렸을 떄 해당 태그에 효과를 주고 싶을때 우리는 :hover 라는 속성을 자주 사용합니다. CSS 의사 클래스는 선택자에 추가하는 키워드로, 선택하는 요소가 특별한 상태여야 만족할 수 있습니다.
    
    ```jsx
    // css 일 경우
    button:hover {
    	// 버튼에 손을 올렸을 떄, purple 글씨 색상으로 변경되는 코드.
    	color: purple;
    }
    ```
    
    이를 그럼 **`Styled-Component`**에서 어떠한 방식으로 적용할 수 있을까요? 이떄는, **`자신을 선택하는 & 문자를 사용`**하여, 아래와 같이 정의할 수 있습니다.
    
    ```jsx
    const StyledHoverButton = styled.button`
    	&:hover {
    		// 밑줄을 부여한다.
    		text-decoration: underline;
    	}
    `
    ```
    
    ### 3. props에 전달된 속성에 따른, 스타일링 분리
    
    리액트를 활용하면서, 여러분들은 앞으로, 재사용성 좋은 컴포넌트에 대한 많은 고민을 하셔야 합니다.
    
    예를들어, 두개의 버튼이 다른 것은 딱 2가지 입니다.
    
    ![스크린샷 2024-09-12 오전 2.29.06.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/1e411e40-6f0f-4f42-b26c-51a568c72330/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.29.06.png)
    
    배경 색상만 다릅니다. 하지만, 이러한 것을 구현하기 위해서 컴포넌트를 두개 만든다면 매우 비합리적이지 않을까요?
    
    보라색 고구마를 위한 → `purple-button.jsx`
    
    주황색 고구마를 위한 → `orange-button.jsx`
    
    우리는, 이러한 상황을 **`props를 활용`**해서, 하나의 컴포넌트에서 props로 색상을 받아 한개의 버튼 컴포넌트에서, 다양한 색상을 활용할 수 있도록 조금 더 dynamic한 컴포넌트를 만들어보고자 합니다. 
    
    ```jsx
    import styled from "styled-components";
    
    const CustomButton = () => {
        return (
            <>
                <FirstStyledSweetPotato color={'purple'}>
                    고구마
                </FirstStyledSweetPotato>
            </>
        );
    };
    
    export default CustomButton;
    
    // background-color에 props.color를 통해, 전달받은 색상을 활용할 수 있습니다.
    const FirstStyledSweetPotato = styled.button`
        background-color: ${props => props.color};
        border: none;
        border-radius: 10px;
        padding: 20px;
        cursor: pointer;
        color: white;
    `
    ```
    
    단, color에 전달하는 props의 value에 따라 색상을 아름답게 변경할 수 있습니다.
    
    ```jsx
    import styled from "styled-components";
    
    const CustomButton = () => {
        return (
            <>
                <FirstStyledSweetPotato color={'purple'}>
                    고구마
                </FirstStyledSweetPotato>
                <FirstStyledSweetPotato color={'red'}>
                    고구마
                </FirstStyledSweetPotato>
            </>
        );
    };
    
    export default CustomButton;
    
    const FirstStyledSweetPotato = styled.button`
        background-color: ${props => props.color};
        border: none;
        border-radius: 10px;
        padding: 20px;
        cursor: pointer;
        color: white;
    `
    ```
    
    단 위의 방식의 문제점은, 반드시 `color` `props`에 색상 값을 전달해야 한다는 것 입니다.
    
    ```jsx
    <FirstStyledSweetPotat>
                    고구마
    </FirstStyledSweetPotato>
    ```
    
     당연히 **`background-color에 해당하는 색상이 없기에 제대로 동작하지 않을 것`** 입니다.
    
    이때 예외 처리를 하나 해주도록 하겠습니다.
    
    ```jsx
    import styled from "styled-components";
    
    const CustomButton = () => {
        return (
            <>
                <FirstStyledSweetPotato color={'purple'}>
                    고구마
                </FirstStyledSweetPotato>
                <FirstStyledSweetPotato>
                    고구마
                </FirstStyledSweetPotato>
            </>
        );
    };
    
    export default CustomButton;
    
    const FirstStyledSweetPotato = styled.button`
        background-color: ${props => props.color || 'purple'};
        border: none;
        border-radius: 10px;
        padding: 20px;
        cursor: pointer;
        color: white;
    `
    
    ```
    
    **`or 연산자 ( || )`** 를 통해서 **`color props`**가 전달되지 않은 경우에는 **`purple 색상`**을 기본적으로 활용하게 만들어줄 수 있습니다.
    
    ![스크린샷 2024-09-12 오전 2.38.54.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/acd3075b-f351-4dc1-9f11-ea80fb6f6dc3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.38.54.png)
    

사실 이 자료들만으로는 이해가 되지 않는 부분이 세 개 있어, 이를 Gpt에게 물어보았다.

- **개인적으로 추가로 이해한 내용**
    
    ### 1. `import styled from "styled-components";`은 임의로 이름을 바꿀 수 있어? 아니면 저렇게 써야지만 스타일드-컴포넌트를 사용할 수 있는거야?
    
    `import styled from "styled-components";` 구문에서 `styled`라는 이름은 **임의로 바꿀 수 있습니다**. JavaScript의 `import` 구문에서는 가져오는 모듈을 변수에 할당하듯이 이름을 정의할 수 있기 때문에 `styled` 대신 다른 이름을 사용할 수도 있습니다.
    
    예를 들어, 아래와 같이 `styled`를 `myStyled`로 변경할 수 있습니다:
    
    ```jsx
    javascript
    코드 복사
    import myStyled from "styled-components";
    
    ```
    
    그리고 이후의 `styled.button`도 다음과 같이 변경됩니다:
    
    ```jsx
    javascript
    코드 복사
    const FirstStyledSweetPotato = myStyled.button`
        background-color: ${props => props.color};
        border: none;
        border-radius: 10px;
        padding: 20px;
        cursor: pointer;
        color: white;
    `;
    
    ```
    
    ### 중요한 사항
    
    - **이름을 바꿀 수 있지만, 바꾼 이름이 일관되게 사용되어야** 합니다. 즉, `import`에서 `myStyled`로 바꿨다면, 컴포넌트를 정의할 때도 `myStyled.button`으로 일관되게 사용해야 합니다.
    - `styled-components` 라이브러리는 `default export`를 제공하기 때문에, 가져올 때 이름을 마음대로 지정할 수 있습니다. 반대로 `named export`를 제공하는 경우에는 가져오는 이름을 변경할 수 없으므로, 반드시 라이브러리가 제공하는 이름을 사용해야 합니다.
    
    ### `default export`와 `named export`의 차이
    
    - `styled-components`의 `styled`는 `default export` 방식으로 제공됩니다. 즉, 아래와 같은 형태로 모듈에서 `styled`를 기본으로 내보내기 때문에, 가져오는 쪽에서 자유롭게 이름을 변경할 수 있습니다.
        
        ```jsx
        javascript
        코드 복사
        // styled-components 내부의 모듈 정의 (예시)
        export default styled;
        
        ```
        
    - 만약 `named export`로 제공되었다면, 반드시 원래 이름을 사용해야 합니다. 예를 들어, `export const styled = ...;`로 정의된 경우, `import { styled } from "styled-components";`로 가져와야 하며, 이름을 바꿀 수 없습니다.
    
    ### 결론
    
    - `styled`는 `default export`로 제공되므로 `styled` 대신 `myStyled`, `customStyled`, 혹은 다른 이름으로 바꿔도 상관없습니다.
    - 하지만 일반적으로 `styled`라는 이름이 널리 사용되기 때문에, 코드의 일관성과 가독성을 위해 `styled`라는 이름을 사용하는 것이 권장됩니다.
    
    ---
    
    ### 2. `const FirstStyledSweetPotato = styled.button`의 `styled.button`의 이름은 바꿀 수 있는 거야? 아니면 버튼을 스타일한다는 의미에서 저렇게 써야만 하는 거야?
    
    `styled.button`에서 `styled`와 `button`은 각기 다른 역할을 하며, 이름을 바꿀 수 있는지 여부도 다릅니다. 아래에서 `styled`와 `button`의 관계와 동작 원리를 설명하겠습니다.
    
    ### `styled`의 의미
    
    - `styled`는 `styled-components` 라이브러리에서 제공하는 함수로, HTML 태그를 스타일링된 컴포넌트로 변환해 주는 역할을 합니다.
    - `styled`는 실제로 함수이며, 어떤 태그를 스타일링할 것인지를 결정하는 함수를 리턴하는 **함수 생성기**라고 볼 수 있습니다.
    - 따라서, `styled`라는 이름은 임의로 바꿀 수 있으며, `myStyled`, `customStyled` 등 다른 이름으로도 사용할 수 있습니다.
    
    ### `button`의 의미
    
    - `button`은 `styled`에 의해 스타일링될 **기본 HTML 요소**를 의미합니다.
    - `styled.button`은 **기본 HTML `<button>` 요소**를 스타일링하여 새로운 컴포넌트로 만들어 줍니다.
    - 만약 다른 HTML 요소를 스타일링하고 싶다면 `button` 대신 다른 태그 이름을 사용하면 됩니다.
        
        예를 들어:
        
        ```jsx
        
        const FirstStyledSweetPotato = styled.div`
            background-color: ${props => props.color};
            border: none;
            border-radius: 10px;
            padding: 20px;
            cursor: pointer;
            color: white;
        `;
        
        ```
        
        - 위 코드는 `<button>` 대신 `<div>` 태그를 스타일링하는 컴포넌트를 생성합니다.
    
    ### `styled`와 HTML 태그 이름의 관계
    
    - `styled` 뒤에 붙는 `button`은 `styled` 함수의 메서드(`styled.button`)입니다. 각 메서드는 HTML 태그 이름과 일치하며, 그 태그에 적용할 스타일을 지정하는 역할을 합니다.
    - 예를 들어, `styled.div`, `styled.h1`, `styled.span` 등의 메서드를 사용하여 다양한 HTML 요소를 스타일링할 수 있습니다.
    
    ### 예시: `styled`와 HTML 태그 이름 변경하기
    
    만약 `button` 대신 `div`나 `h1`을 스타일링하고 싶다면 다음과 같이 변경할 수 있습니다:
    
    ```jsx
    javascript
    코드 복사
    const FirstStyledSweetPotato = styled.div`
        background-color: ${props => props.color};
        border: none;
        border-radius: 10px;
        padding: 20px;
        cursor: pointer;
        color: white;
    `;
    
    ```
    
    - 위 코드에서는 `div` 태그를 스타일링한 `FirstStyledSweetPotato` 컴포넌트를 생성합니다.
    
    ### 결론
    
    - `styled`는 함수이기 때문에 `myStyled`와 같은 임의의 이름으로 변경할 수 있습니다.
    - `button`은 `styled`가 어떤 HTML 요소를 스타일링할지 결정하는 태그 이름이므로 변경할 수 있습니다. `styled.div`, `styled.h1` 등 다양한 태그 이름을 사용할 수 있습니다.
    
    ---
    
    ### 3. `background-color: ${props => props.color};`에서 `props`가 `props.color`로 전달된다고 했는데, 윗줄에서 `color={red}`로 전달된 `red`가 처음에 `props`로 들어가고, 그 다음 그게 `props.color`로 들어가는 거야? 이게 메커니즘이 잘 이해가 안 돼. 순서 말이야. 이거 `red`를 예시로 순서가 어떻게 진행되는지 알려줄래?
    
    네, 이 부분을 `red`라는 `color` 속성이 `props`로 어떻게 전달되고 사용되는지 순서대로 설명해 드리겠습니다.
    
    1. **`CustomButton`에서 `FirstStyledSweetPotato`에 `props` 전달**:
        
        ```jsx
        javascript
        코드 복사
        <FirstStyledSweetPotato color={'red'}>
            고구마
        </FirstStyledSweetPotato>
        
        ```
        
        - 이 줄에서 `FirstStyledSweetPotato` 컴포넌트를 사용할 때, `color={'red'}` 속성을 전달합니다.
        - 여기서 `color`가 `FirstStyledSweetPotato`로 **`props.color`** 형태로 전달됩니다.
        - 즉, `props` 객체는 다음과 같은 구조를 갖게 됩니다:
            
            ```jsx
            javascript
            코드 복사
            const props = {
                color: 'red'
            };
            
            ```
            
    2. **`FirstStyledSweetPotato` 컴포넌트 내부로 `props` 전달**:
        
        ```jsx
        javascript
        코드 복사
        const FirstStyledSweetPotato = styled.button`
            background-color: ${props => props.color};
            border: none;
            border-radius: 10px;
            padding: 20px;
            cursor: pointer;
            color: white;
        `;
        
        ```
        
        - `FirstStyledSweetPotato`는 `styled-components` 라이브러리를 통해 생성된 컴포넌트이므로, 사용된 속성 `color`가 자동으로 `props` 객체로 전달됩니다.
        - 이 `props` 객체는 `styled-components` 내부에서 스타일링 규칙에 접근할 수 있도록 전달되며, 스타일 정의 시 `props => props.color` 형태로 사용할 수 있게 됩니다.
    3. **`props`에서 `props.color` 추출**:
        
        ```jsx
        javascript
        코드 복사
        background-color: ${props => props.color};
        
        ```
        
        - `styled.button` 내부에서 `props` 객체를 가져와 `props.color`의 값을 참조합니다.
        - `props => props.color`는 `props` 객체가 전달된 후, `props.color` 값을 반환하는 함수입니다.
        - 이때, `props.color`는 전달된 `color={'red'}` 값에서 **`red`*가 되므로, `background-color` 속성은 최종적으로 `red`가 됩니다.
    4. **`styled-components`가 `props.color` 값을 CSS로 변환**:
        - `styled-components`는 이 스타일을 CSS 문자열로 변환하여, 최종적으로 아래와 같은 CSS 코드로 만들어집니다:
            
            ```css
            css
            코드 복사
            background-color: red;
            
            ```
            
    5. **변환된 CSS가 최종 HTML 요소에 적용**:
        - 변환된 CSS가 `<button>` 태그에 적용되어, `FirstStyledSweetPotato` 컴포넌트는 배경색이 `red`로 설정된 버튼이 됩니다.
    
    ### 순서 요약:
    
    1. `CustomButton` 컴포넌트에서 `color={'red'}`를 `FirstStyledSweetPotato` 컴포넌트에 전달.
    2. `FirstStyledSweetPotato`는 이 `color` 값을 `props.color`로 받음.
    3. `styled.button` 스타일링 정의에서 `${props => props.color}`로 `props.color` 값을 참조.
    4. `props.color` 값인 `red`가 `background-color`로 변환되어 CSS로 적용.
    5. 최종적으로 `FirstStyledSweetPotato` 버튼 컴포넌트에 배경색 `red`가 적용됨.
    
    이 순서로 `props`가 전달되고 스타일링에 반영되는 과정을 이해하시면 됩니다. 추가적인 질문이 있으면 언제든지 말씀해 주세요!
    
    ### 나의 말:
    
    아 그러니까 만약 우리가 <FirstStyledSweetPotato color={'red'}>에서 color뿐만아니라 curser등을 다른 값으로 임의로 지정해서 props로 전달해주면, 
    background-color: ${props => props.color};에서 추가로 props => props.curser도 써주는거야? 그래서 그 값이 FirstStyledSweetPotato에서 css값으로 변환되어 적용되는거고?
    
    ### ChatGPT의 말:
    
    네, 정확히 이해하셨습니다!
    
    말씀하신 대로, `FirstStyledSweetPotato` 컴포넌트에 `props`로 여러 CSS 속성 값을 전달하고 싶다면, 각 `props`를 `styled-components` 내에서 CSS 속성에 동적으로 적용할 수 있습니다. `props.color`처럼 `props.cursor`도 사용할 수 있으며, 이를 통해 다양한 CSS 속성 값을 props로 전달하고 동적으로 스타일링할 수 있습니다.
    
    ### 예시를 통한 설명
    
    만약 `color`뿐만 아니라 `cursor`라는 속성도 함께 전달하고 싶다면, 다음과 같이 할 수 있습니다.
    
    ### 1. 여러 `props` 전달 예시
    
    ```jsx
    
    <FirstStyledSweetPotato color={'red'} cursor={'pointer'}>
        고구마
    </FirstStyledSweetPotato>
    
    ```
    
    - 여기서 `color={'red'}`와 `cursor={'pointer'}`를 `FirstStyledSweetPotato` 컴포넌트에 `props`로 전달합니다.
    - `props` 객체는 다음과 같은 구조를 가집니다:
        
        ```jsx
        
        const props = {
            color: 'red',
            cursor: 'pointer'
        };
        
        ```
        
    
    ### 2. `styled-components`에서 `props`를 활용한 스타일링
    
    ```jsx
    
    const FirstStyledSweetPotato = styled.button`
        background-color: ${props => props.color};  /* props.color 값을 사용 */
        border: none;
        border-radius: 10px;
        padding: 20px;
        cursor: ${props => props.cursor};  /* props.cursor 값을 사용 */
        color: white;
    `;
    
    ```
    
    - `props => props.color`와 마찬가지로 `props => props.cursor`를 사용하여 `cursor` 속성도 `props`에서 동적으로 가져옵니다.
    - `props.cursor`가 `pointer`로 설정되었기 때문에, `cursor` 스타일 속성의 최종값은 `pointer`가 됩니다.
    
    ### 3. 최종 결과
    
    `props`로 전달된 `color`와 `cursor` 값이 각각 `background-color`와 `cursor` CSS 속성으로 변환되어 최종적으로 적용됩니다.
    
    - 최종 CSS는 다음과 같이 변환됩니다:
        
        ```css
        
        background-color: red;
        cursor: pointer;
        
        ```
        
    
    ### 예제 코드 전체
    
    위 내용을 반영한 전체 코드는 다음과 같습니다:
    
    ```jsx
    
    import styled from "styled-components";
    
    const CustomButton = () => {
        return (
            <>
                {/* color와 cursor를 각각 전달 */}
                <FirstStyledSweetPotato color={'red'} cursor={'pointer'}>
                    고구마
                </FirstStyledSweetPotato>
                <FirstStyledSweetPotato color={'blue'} cursor={'default'}>
                    감자
                </FirstStyledSweetPotato>
            </>
        );
    };
    
    export default CustomButton;
    
    const FirstStyledSweetPotato = styled.button`
        background-color: ${props => props.color};  /* 전달된 color를 배경색으로 적용 */
        border: none;
        border-radius: 10px;
        padding: 20px;
        cursor: ${props => props.cursor};  /* 전달된 cursor를 마우스 커서 모양으로 적용 */
        color: white;
    `;
    
    ```
    
    - `color={'red'}`와 `cursor={'pointer'}`를 `FirstStyledSweetPotato`로 전달하여 각각 `background-color`와 `cursor`에 적용합니다.
    - 두 번째 버튼(`감자`)은 `color={'blue'}`와 `cursor={'default'}`가 적용되어 배경색이 파란색이고, 기본 마우스 커서가 적용됩니다.
    
    ### 동적 스타일링의 장점
    
    `props`를 활용하면 다음과 같은 장점이 있습니다:
    
    1. **컴포넌트의 재사용성**:
        - 같은 `FirstStyledSweetPotato` 컴포넌트를 사용하더라도, `props` 값에 따라 다양한 스타일을 적용할 수 있어 컴포넌트의 재사용성이 높아집니다.
    2. **유연한 스타일링**:
        - CSS 스타일을 props 값에 따라 동적으로 설정할 수 있으므로, 상황에 맞는 스타일링을 쉽게 구현할 수 있습니다.
    3. **코드 가독성**:
        - 스타일링을 JSX와 가까운 위치에서 작성할 수 있어, 어떤 props가 어떤 스타일에 영향을 주는지 쉽게 파악할 수 있습니다.

### React Router 🍠

아래, React Router 공식문서를 먼저 읽어보시고 공식문서에 익숙해져보세요!

https://reactrouter.com/en/main

- **`React Router`**란?
    - Routing에 대해 정리
        
        Routing 이란, 유저가 주소창에 url 입력시 요청된 url에 해당하는 데이터를 보내주는 것 을 의미한다.
        
        새로운 URL을 요청하면 그 URL에 맞는 데이터를 받아오는 것을 Routing이라고 한다.
        
        우리가 새로운 URL 경로를 입력하면, 그 URL에 해당하는 새로운 페이지를 네트워크 서버상에 요청하고, 서버에서 새로운 html을 받와엇, 페이지 전체가 업데이트 되는 것을 Routing이라고 한다.
        
    - Client Side Rendering (CSR)
        
        새로운 링크를 클릭할 떄 Page URL이 업데이트는 되나, 로딩 스피너는 돌지 않고, 페이지가 새롭게 refresh 되는게 아니고, Navbar나 Sidebar는 유지되고, main body 부분의 데이터만 바꿔지는 현상.
        
        새로운 경로를 입력했을 떄 서버에서 새로운 페이지를 요청하는 것이 아닌, 앱 안에서 필요한 부분만, 업데이트 하는 것이 Routing과의 차이다.
        
        이걸 보여줬다가, 저걸 보여줬다가 하면서, 필요한 데이터가 있으면 부분적으로만 동적으로 데이터를 업데이트해서 JSON 형태의 데이터를 받아옵니다.
        
    
    ### React Router
    
    CSR은 페이지는 유지하되, 부분적으로 내가 원하는 부분만 경로에 해당하는 컴포넌트를 보여줬다, 숨겼다 할 수 있는 방법이다.
    
    SPA를 유지하면서, 멀티 페이지 형태의 장점을 그대로 사용할 수 있다.
    
    장점
    
    1. URL 경로가 달라지니까 WEB History를 이용할 수 있다.
    2. 주소만 복사해도, 내가 아무리 다른 페이지에 있어도, 그 URL로 돌아갔을 떄 URL의 첫 화면인 홈 컴포넌트가 보이는 것이 아닌, 원하는 위치로 볼 수 있습니다.
    
- **`React Router`** 기본 사용법 (**`createBrowserRouter`**, **`RouterProvider`**)
    
    ### React Router 실습
    
    먼저, **`React Router`**를 사용하기 위해 아래의 라이브러리를 사용해보고자 합니다.
    
    ```jsx
    npm i react-router-dom
    ```
    
    `App.jsx`에  아래와 같이 코드를 입력해줍시다.
    
    ```jsx
    import './App.css'
    
    // 1. import를 해줍니다.
    import {createBrowserRouter, RouterProvider} from "react-router-dom";
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <h1>홈 페이지입니다.</h1>
        },
        {
            path: '/movies',
            element: <h1>영화 페이지 입니다.</h1>
        }
    ])
    
    function App() {
        return <RouterProvider router={router}/>
    }
    
    export default App
    
    ```
    
    1. 먼저, `createBrowerRouter`를 활용하여, 원하는 `path`(경로)를 통해, 해당 경로에 접근하면 어떤 `element`(요소)를 보여주게 될 지 정의 해줍니다.
    2. 즉, `path: ‘/’` 라는 것은 현재 vite로 프로젝트를 세팅했을 경우 localhost:5173을 의미합니다. 즉 처음 실행했을 떄 페이지입니다.
    3. **`path: ‘/movies’`** 라는 것은 현재 vite로 프로젝트를 세팅했을 경우 [localhost:5173/movies](http://localhost:5173/movies) 경로를 의미합니다. 즉, 유저가 movies라는 경로로 이동 했을 때, 영화 페이지 입니다. 라는 텍스트가 나오게 됩니다.
    4. 그 후 **`createBrowserRouter`**를 통해, 만든 **`router`**를 **`RouterProvider`**의 **`router`**에 전달해주면 됩니다.
        
        ![스크린샷 2024-09-12 오전 3.51.07.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/72740d51-338f-4be4-9028-856d0bcfa4c3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.51.07.png)
        
        ![스크린샷 2024-09-12 오전 3.51.20.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/3c49a7f2-5258-4e8e-a3db-065921f4d6a1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.51.20.png)
        
        그러면 이제 위와 같이, 우리가 설정한 `path`로 접근 했을 경우, `element`가 페이지에 보이게 됩니다.
        
    
- **`React Router`** 지정하지 않은 경로 접근 처리 (**`errorElement`**)
    
    ### React Router 지정하지 않은 경로 접근 처리
    
    우리가, 위의 실습에서,  `‘/’`, `‘/movies’` 두개의 경로에 대한 처리를 진행했습니다. 
    
    ```jsx
    import './App.css'
    
    // 1. import를 해줍니다.
    import {createBrowserRouter, RouterProvider} from "react-router-dom";
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <h1>홈 페이지입니다.</h1>
        },
        {
            path: '/movies',
            element: <h1>영화 페이지 입니다.</h1>
        }
    ])
    
    function App() {
        return <RouterProvider router={router}/>
    }
    
    export default App
    
    ```
    
    만약 사용자가, 지정한 path가 아닌, [localhost:5173/yaho](http://localhost:5173/yaho) 와 같은 경로에 접근하게 되었을 떄 어떻게 될 까요?
    
    ![스크린샷 2024-09-12 오전 3.55.20.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/a67bf72d-c177-43d1-87ad-e12869aaec86/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.55.20.png)
    
    위와 같이 **`404 NOT FOUND`** 라는 에러가 발생합니다. 이러한 결과는 매우 당연합니다.
    
    개발자가 지정하지 않은 경로에 접근했기 떄문에, **`404 ERROR`**가 발생한 것 입니다.
    
    해당 페이지는 UX 상으로 매우 아름답지 않고, 실제로 아래 영어 문구를 해석해보시면, **`errorElement`**를 활용해서, 더 나은 UX를 만들 수 있다. 라고 설명되어있습니다.
    
    한번 활용해보겠습니다.
    
    ```jsx
    import './App.css'
    
    import {createBrowserRouter, RouterProvider} from "react-router-dom";
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <h1>홈 페이지입니다.</h1>,
            // 없는 경로에 들어온 처리를 해줍니다.
            errorElement: <h1>너는 없는 경로에 들어왔다 ^ㅁ^ 야호~!</h1>
        },
        {
            path: '/movies',
            element: <h1>영화 페이지 입니다.</h1>
        }
    ])
    
    function App() {
        return <RouterProvider router={router}/>
    }
    
    export default App
    
    ```
    
    ![스크린샷 2024-09-12 오전 3.58.07.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/f3ad9c92-3eed-4664-ba21-78cc28247b25/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.58.07.png)
    
    프론트엔드 개발은, 단순히 화면 구현에만 끝나지 않습니다.
    
    로딩 처리, 에러 처리, 데이터 관련 처리 등 UX 뿐만 아니라, 성능에 관한 처리도 많이 하게 됩니다.
    
    나중에 조금 더 학습하시게 된다면 아래와 같은 처리를 해보시면 좋을 것 같습니다.
    
    1. 유저가 이상한 경로에 접근했을 떄, 홈으로 이동시킬 수 있는 버튼을 제작. (UX)
    2. 각 페이지 별 다른 에러 처리
    3. ErrorBoundary 처리
    
- **`React Router`**의 **`Outlet`** 사용법 **`Link`** 태그를 활용한 페이지 이동.
    
    ### 1. Outlet 적용 전 세팅
    
    우리가 기존에, 컴포넌트를 만들면서, `src/components` 폴더에서 해당 파일들을 관리했습니다.
    
    이번에는, **`src/pages`** 폴더에서 페이지 관련된 파일들을 관리해보겠습니다.
    
    ![스크린샷 2024-09-12 오전 4.03.45.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/db5cd4bd-eebe-498f-9ec3-1baa85a84877/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.03.45.png)
    
    총 3개의 페이지를 만들어 보고자 합니다. 
    
    1. 홈페이지
    
    ```jsx
    // home.jsx
    const HomePage = () => {
        return (
            <h1>Home Page 야호~!</h1>
        );
    };
    
    export default HomePage;
    
    ```
    
    1. 영화 페이지
    
    ```jsx
    const MoviesPage = () => {
        return (
            <h1>Movies Page 야호~!</h1>
        );
    };
    
    export default MoviesPage;
    
    ```
    
    1. 에러 페이지
    
    ```jsx
    const NotFound = () => {
        return (
            <h1>너는 찾을 수 없는 페이지 야호~!</h1>
        );
    };
    
    export default NotFound;
    
    ```
    
    그리고, 위에서 실습하면서 제작했던 `Router`는 우리가, `elements 요소에 직접, 태그를 입력`했는데, 이제는 `만든 페이지들을 import 하여 연결`해주겠습니다.
    
    ```jsx
    import './App.css'
    
    import {createBrowserRouter, RouterProvider} from "react-router-dom";
    
    // 1. 만든 페이지들을 import
    import HomePage from "./pages/home.jsx";
    import NotFound from "./pages/not-found.jsx";
    import Movies from "./pages/movies.jsx";
    
    // 2. 연결
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage/>,
            errorElement: <NotFound/>
        },
        {
            path: '/movies',
            element: <Movies/>
        }
    ])
    
    function App() {
        return <RouterProvider router={router}/>
    }
    
    export default App
    
    ```
    
    아래와 같이 제대로 동작하면 성공입니다.
    
    ![스크린샷 2024-09-12 오전 4.07.20.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/1fd21330-d448-44af-9ffe-bd62af440c9c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.07.20.png)
    
    ![스크린샷 2024-09-12 오전 4.07.29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5677cd07-6828-43e4-aae2-414a9827b077/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.07.29.png)
    
    ![스크린샷 2024-09-12 오전 4.07.52.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/8d4a747e-d7c0-4bb8-a10f-9b0a75c9907b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.07.52.png)
    
    ### 2. Outlet 적용 방법
    
    먼저, `‘/’ 경로에서만 공유하는 layout`을 만들어보고자 합니다.
    
    `‘/’ 경로`에서 공유한다는 것은 `‘/movie’`, `‘/yaho’`, 등 ‘/’ 로 시작하는 모든 루트 경로에서 해당 Outlet을 공유하는 것 입니다.
    
    `src/layout` 폴더를 만든 후, `root-layout.jsx` 파일을 만들어보겠습니다.
    
    폴더구조는 자유이며, 합당한 이유만 존재한다면 본인이 관리하기 쉬운 형태로 만드셔도 좋습니다!
    
    ![스크린샷 2024-09-12 오전 4.11.18.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/721db2f0-e3f8-4d60-a681-c1275a55f184/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.11.18.png)
    
    ```jsx
    import {Outlet} from "react-router-dom";
    
    const RootLayout = () => {
        return (
            <>
                <Outlet/>
            </>
        );
    };
    
    export default RootLayout;
    
    ```
    
    [화면 기록 2024-09-12 오전 4.13.20.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/8b799fb8-4c8f-4f24-a2e0-beb851411daf/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.13.20.mov)
    
    https://www.smumc.co.kr/
    
    우리가, 궁극적으로 만들고 싶은 형태는 **`Outlet`**을 활용해서 **`Single Page Application 장점`**을 살려 navbar라는 컴포넌트를 만든후, `navbar는 유지`되며, 아래에 있는 내용들만, `각 경로에 맞게 Content 내용이 변경`되도록 만들어보겠습니다.
    
    먼저, `component` 폴더에 `navbar.jsx` 라는 컴포넌트를 만들어 보겠습니다.
    
    그 후, **`react-router-dom`** 에서 제공해주는 **`Link 태그를 활용`**하면, 원하는 경로로 페이지 이동을 할 수 있습니다.
    
    ```jsx
    // navbar.jsx
    import {Link} from "react-router-dom";
    
    const Navbar = () => {
        return (
            <nav>
                <Link to={'/'}>홈 페이지로 이동</Link>
                <Link to='/movies'>영화 목록 페이지로 이동</Link>
            </nav>
        );
    };
    
    export default Navbar;
    
    ```
    
    만든 **`navbar`**를 **`root-layout.jsx`**에 import를 시켜주겠습니다.
    
    ```jsx
    import {Outlet} from "react-router-dom";
    import Navbar from "../components/navbar.jsx";
    
    const RootLayout = () => {
        return (
            <>
                <Navbar/>
                <Outlet/>
            </>
        );
    };
    
    export default RootLayout;
    
    ```
    
    아직은, 해당 `root-layout.jsx` 파일을 어떠한 곳에도 연결해주지 않았기에, navbar가 보이지 않고, 이전과 비교하였을 떄  다른 변화가 발생하지 않습니다. 이를 이제 router에 연결해주도록 하겠습니다.
    
    ```jsx
    import './App.css'
    
    import {createBrowserRouter, RouterProvider} from "react-router-dom";
    
    import HomePage from "./pages/home.jsx";
    import NotFound from "./pages/not-found.jsx";
    import Movies from "./pages/movies.jsx";
    import RootLayout from "./layout/root-layout.jsx";
    
    const router = createBrowserRouter([
        {
            path: '/',
            // element: <HomePage/>,
            element: <RootLayout/>,
            errorElement: <NotFound/>
        },
        {
            path: '/movies',
            element: <Movies/>
        }
    ])
    
    function App() {
        return <RouterProvider router={router}/>
    }
    
    export default App
    
    ```
    
    [화면 기록 2024-09-12 오전 4.21.30.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/bc756279-982c-4143-8725-56b12cf27aa9/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.21.30.mov)
    
    무엇인가 이상하지 않나요? 
    
    위의 영상처럼 동작하면 여러분들은 놀랍게도 맞게 따라오신 것 입니다.
    
    하지만 실제로 우리가 원하는 동작은, navbar를 통해 경로 이동시 각 path에 맞는 element가 나오기를 기대하는데 그렇게 동작하지 않습니다.
    
    원하는 방식처럼 동작하기 위해서는 아래와 같은 처리를 진행해야합니다.
    
    이처럼 해당 `RootLayout` 안에있는 `Outlet`안에 보여주길 원한다면, 
    
    경로에 해당하는 element들을 외부에 표기하는 것이 아닌 `children`이라는 속성안에 자식 경로를 만들어, 표기해주어야 합니다.
    
    ```jsx
    import './App.css'
    
    import {createBrowserRouter, RouterProvider} from "react-router-dom";
    
    import HomePage from "./pages/home.jsx";
    import NotFound from "./pages/not-found.jsx";
    import Movies from "./pages/movies.jsx";
    import RootLayout from "./layout/root-layout.jsx";
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout/>,
            errorElement: <NotFound/>,
            // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
            children: [
                {
                    // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
                    index: true,
                    element: <HomePage/>
                },
                {
                    // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
                    path: 'movies',
                    element: <Movies/>
                }
            ]
        },
    
    ])
    
    function App() {
        return <RouterProvider router={router}/>
    }
    
    export default App
    
    ```
    
    [화면 기록 2024-09-12 오전 4.26.31.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/3bbb7ea1-27fc-4bf7-940b-34239f341dc9/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.26.31.mov)
    
    위와 동일하게 동작한다면 성공입니다~!
    
    → 이거 잘 이해가 안돼서 다시 이해를 해보았더니, 사실 간단하였다.
    
    ```jsx
    // root-layout.jsx
    import { Outlet } from "react-router-dom";
    import Navbar from "../components/navbar.jsx";
    
    const RootLayout = () => {
    return (
    <>
    <Navbar/>   {/* 항상 렌더링되는 Navbar */}
    <Outlet/>   {/* 자식 컴포넌트가 렌더링되는 위치 */}
    </>
    );
    };
    export default RootLayout;
    
    이렇게, 언제든 네비게이션 바는 상단에 떠있고, 그 밑에는 자식 컴포넌트들이 바뀌면서 렌더링 될 수 있게
    정의를 해 준 것이었다.
    ```
    
- **`React Router`**를 활용하여 **`Dynamic Routing`**을 구현해보자.
    
    ### Dynamic Routing (동적 라우팅)
    
    **`Dynamic Routing`**에 대해 쉽게 설명드리겠습니다. 
    
    쿠팡을 통해 상품 상세 정보 페이지를 접근한다고 해보겠습니다.
    
    보통, 상세 상품 페이지는, 진열된 상품 정보는 다르지만, 전체적인 UI는 비슷합니다. 이러한 페이지 같은 경우 **`Dynamic Routing`**을 활용해서 구현을 많이합니다.
    
    ![스크린샷 2024-09-12 오전 4.28.25.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/36bafd7f-9240-4a48-a2ac-58f6607a207d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.28.25.png)
    
    ![스크린샷 2024-09-12 오전 4.29.26.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/0f21e46f-6277-4a8a-8e3a-0fdf637dc304/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.29.26.png)
    
    위의 페이지의 URL 앞부분만 보겠습니다.
    
    ```jsx
    coupang.com/vp/products/여기 부분 숫자만 다른...
    ```
    
    위의 `products/` 뒤의 숫자만 다른 것을 볼 수 있습니다. 
    
    이렇게 `products/` 뒤의 숫자만 다른 것을 활용하여, 해당 숫자를 활용하여 페이지의 정보를 구분하는 것을 `Dynamic Routing`이라고 부릅니다.
    
    우리는 이를, React Router를 활용하여 매우 쉽게 구현할 수 있습니다.
    
    ```jsx
    import './App.css'
    
    import {createBrowserRouter, RouterProvider} from "react-router-dom";
    
    import HomePage from "./pages/home.jsx";
    import NotFound from "./pages/not-found.jsx";
    import Movies from "./pages/movies.jsx";
    import RootLayout from "./layout/root-layout.jsx";
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                },
                {
    		            // /:을 활용해서, 동적으로 바뀌는 부분의 이름을 정의해줍시다.
                    path: 'movies/:movieId',
                    element: <Movies/>
                }
            ]
        },
    
    ])
    
    function App() {
        return <RouterProvider router={router}/>
    }
    
    export default App
    
    ```
    
    여기서, 가장 중요한 점은 `/:` 뒤에 설정한 이름으로, 우리가 해당하는 `params`의 값을 받아올 수 있다는 것입니다.
    
    다음 주차 워크북에서, 각기 다른 영화 페이지 정보를 불러오면서, 이를 실습할테니, 이 이름을 잘 기억해야 한다 정도만 아시면 좋습니다!
    
    이렇게 설정하면 아래와 같이 movies뒤에 어떠한 값이 붙어도 동일한 구조의 페이지가 보인다는 것을 이해하시면 됩니다.
    
    [화면 기록 2024-09-12 오전 4.34.50.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/867971f0-ad72-48ae-a761-5748fa488667/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.34.50.mov)
    

### 나의 두 번째 react-hook 🍠

<aside>
💡

리액트 함수 컴포넌트에서 가장 중요한 개념은 훅입니다.

함수형 컴포넌트 이전에 클래스 컴포넌트에서 가능했던, state, ref와 같은 리액트의 핵심 기능들을 함수에서도 간결하게 사용 가능하게 만들었습니다.

우선, 다양한 Hook 중 **`useEffect`**에 대해서 배워보고자 합니다.

</aside>

- **`useEffect` 기초 설명**
    
    ### useEffect 기초
    
     React 컴포넌트는 **`일반적으로 JSX를 사용하여 사용자에게 HTML 형식으로 정보를 보여주는 역할`**을 합니다. 그러나 이 외에도 다양한 작업을 수행할 수 있습니다. 예를 들어, **`컴포넌트는 백엔드의 REST API를 호출하여 데이터를 생성(Create), 조회(Read), 수정(Update), 삭제(Delete)하는 작업을 처리`**할 수도 있습니다.
    
     특히, 백엔드에서 데이터를 받아와야 하는 경우, 컴포넌트가 처음 화면에 나타날 때(마운트될 때)만 데이터를 불러오는 것이 적절한 상황이 많습니다. 하지만 **`컴포넌트가 리렌더링될 때마다 불필요하게 계속 데이터를 요청하는 것은 비효율적`**일 수 있습니다.ㅂ
    
     이때 말하는 **`Effect`**는 특정 상황에서 컴포넌트 내부에서 발생하는 행동을 의미합니다. React 컴포넌트의 기본적인 역할은 화면에 HTML을 렌더링하는 것이지만, 그 외에 데이터를 불러오거나, API를 호출하는 등의 작업을 추가로 수행할 때 우리는 이를 **`부수효과(Side Effect)`**라고 부릅니다.
    
     이러한 Side Effect를 특정 조건에서만 실행하기 위해 React에서는 `useEffect`라는 훅(Hook)을 사용합니다. 이 훅을 통해 컴포넌트가 마운트될 때나 업데이트될 때 원하는 작업을 수행할 수 있으며, **`의존성 배열(dependency array)을 통해 Side Effect가 언제 실행될지를 제어`**할 수 있습니다.
    
    ```jsx
    import { useEffect } from 'react';
    
    useEffect(() => {
    	// 부수 효과 실행.
    }, []);
    // []를 의존성 배열이라고 부름.
    ```
    
    **`useEffect`**
    
    **`첫 번쨰 Parameter`** ⇒ 부수 효과를 실행하는 함수 값을 지정합니다.
    
    **`두 번쨰 Parameter`** ⇒ 의존성 배열에 지정한 값이 변경될 떄, 부수 효과 실행. 단, [] 빈 배열인 경우, 컴포넌트가 처음 마운트될 때, 실행 된다.
    
- **`useEffect`** 로 데이터를 호출하는 방법 알아보기 🍠
    
    ### useEffect로 데이터를 호출하는 방법 알아보기
    
    <aside>
    💡
    
    Chapter.2 에서 mockData를 활용해서, movie 컴포넌트를 제작했습니다.
    이제 아래와 같이 변경을 해보고자 합니다.
    
    1. 실제로, 데이터를 호출해서 
    
    </aside>
    
    1. 먼저 TMDB 사이트에 들어가서, 회원가입 후 로그인을 해줍니다.
        
        https://developer.themoviedb.org/reference/intro/getting-started
        
    2. 그러면 아래 **`Authenticate`** 부분에, Token이 들어가 있을 겁니다. Token이 무엇인지 잘 모른다면, 간략하게 해당 정보를 호출하기 위해, 어떠한 사용자가 접근했는지 판단할 수 있는 것 이라고 간략하게 이해하고, 나중에 자세히 다루어 보겠습니다.
        
        ![스크린샷 2024-09-12 오후 8.47.54.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/352acb64-5eda-4ce8-a91e-8a3aaa083b40/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.47.54.png)
        
    3. MOVIE LISTS의 Popular 부분을 활용해서, 영화 데이터를 받아와보겠습니다.
        
        ![스크린샷 2024-09-12 오후 8.50.38.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/b3befdfe-41bd-4c2d-9fb2-3be42c078190/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.50.38.png)
        
        ```jsx
        curl --request GET \
             --url 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' \
             --header 'Authorization: Bearer 토큰' \
             --header 'accept: application/json'
        ```
        
        curl문을 통해 데이터 요청을 어떻게 해야하는지 이해해 보겠습니다.
        
        1. url을 통해, 데이터를 달라고 요청! (Client → Server)
        2. 이때 header에 2가지를 전달해주어야 한다.’
            1. Authorization: Bearer 토큰
            2. application/json
        
        4. 위의 URL을 봅시다.
        
        `?, & 를 활용`해서, 무엇인가 부가적인 정보를 받게 되는데, 이를 우리는 `Query Parameter`라고 합니다.
        
        쉽게 생각하면, **`첫번째 쿼리파라미터는 ?`**로 시작하고, 그 이후에 붙는 **`쿼리파라미터는 &로 시작`**하며 작성해주시면 됩니다.
        
        ![스크린샷 2024-09-12 오후 8.51.38.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/64763c33-9731-4e07-a91b-560c45120944/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.51.38.png)
        
        ```jsx
        --url 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' \
        
        ```
        
        즉 해당 URL로 만약 데이터가 정상적으로 받아와 진다면, **`영어(en-US)로 된`**, **`1 페이지에 해당하는 데이터들`**이 전달 됨을 알 수 있을 것 입니다!
        
        ㅂ
        
        ### useEffect를 활용해서 데이터 받아오기
        
        아래는, 이전에 제가 작성한 MoviesPage 컴포넌트입니다.
        
        현재 동작 방식은 아래와 같습니다. 
        
        1. 이전에 MOCK DATA를 통해 영화 데이터를 받아옴.
        2. 해당 영화 데이터를 Card라는 컴포넌트에 전달.
        
        ```jsx
        import {MOVIES} from "../../mocks/movies.js";
        import Card from "../../components/Card/card.jsx";
        
        import * as S from './movies.style.js'
        
        const MoviesPage = () => {
        
            return (
                <S.CardList>
                    {MOVIES.results.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </S.CardList>
            )
        };
        
        export default MoviesPage;
        
        ```
        
        지금, 우리의 영화 데이터는 당연히 최신화된 정보가 아닌, mock-data, 임의의 데이터로 구성되어 있습니다. 
        
        이제는 실제 API 통신을 통해, 데이터를 받아오는 방법에 대해 알아보겠습니다.
        
        먼저, **`axios`** 라이브러리를 설치해줍니다. fetch를 사용하셔도 상관없습니다만, 저는 axios를 통해 실습을 진행해보고자 합니다.
        
        ```jsx
        npm i axios
        ```
        
        1. **`useState`**를 통해, 영화 데이터를 받아 올 상태를 선언
        
        ```jsx
        import {useState} from "react";
        
        import {MOVIES} from "../../mocks/movies.js";
        import Card from "../../components/Card/card.jsx";
        
        import * as S from './movies.style.js'
        
        const MoviesPage = () => {
            const [movies, setMovies] = useState([])
        
            return (
                <S.CardList>
                    {MOVIES.results.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </S.CardList>
            )
        };
        	export default MoviesPage;
        
        ```
        
        당연히, 초기에는 아무런 데이터를 받아올 수 없으니 빈 배열이겠죠?
        
        1. axios를 import하자.
        
        ```jsx
        import {useState} from "react";
        import axios from "axios";
        
        import {MOVIES} from "../../mocks/movies.js";
        import Card from "../../components/Card/card.jsx";
        
        import * as S from './movies.style.js'
        
        const MoviesPage = () => {
            const [movies, setMovies] = useState([])
        
            return (
                <S.CardList>
                    {MOVIES.results.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </S.CardList>
            )
        };
        
        export default MoviesPage;
        
        ```
        
        1. useEffect를 통한 데이터 호출
        
        ```jsx
        import {MOVIES} from "../../mocks/movies.js";
        import Card from "../../components/Card/card.jsx";
        
        import * as S from './movies.style.js'
        import {useEffect, useState} from "react";
        import axios from "axios";
        
        const MoviesPage = () => {
            const [movies, setMovies] = useState([])
            
            useEffect(() => {	
                const getMovies = async () => {
                    const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                        headers: {
                            Authorization: `Bearer 토큰`,
                        }
                    })
                    setMovies(movies);
                }
                getMovies()
            }, []);
            
            return (
                <S.CardList>
                    {movies.data?.results.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </S.CardList>
            )
        };
        
        export default MoviesPage;
        
        ```
        
        **`axios`**를 사용하면, **`application/json`**이 자동으로 요청 헤더에 들어가기 떄문에 따로 선언을 안해주어도 좋습니다.
        
        여기서 useEffect를 사용할 때 유의 할 점이 있습니다.
        
        <aside>
        💡
        
        async await 함수는 프로미스 객체를 반환 하므로 부수효과 함수가 될 수 없다.
        
        부수 효과 함수는 함수만 반환 할 수 있으며, 반환된 함수는 부수 효과 함수가 호출되기 직전과 컴포넌트가 사라지기 직전에 호출된다.
        
        </aside>
        
        그러므로, 우리는 `useEffect` 훅에서, `async await 함수`를 사용하기 위해서, `useEffect 함수 내부에서, 다른 async/await 함수를 만들어`, 해당하는 데이터를 호출하는 것 입니다.
        
        함수만, 만들면 의미 없기에, 만든 이후에 바로 **`getMovies()`**를 통해, 해당 함수를 호출합니다.
        
        그러면, 우리가 `setMovies`를 통해, 데이터 호출시 해당하는 데이터를 받아오기에, movies에는 이제 실제로 서버에서 받아온 영화 데이터들이 담깁니다.
        
        ![스크린샷 2024-09-12 오후 9.18.07.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/3a30216a-ee1e-48e9-9cb5-a30f81897ac5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.18.07.png)
        
        실제로, `console.log(movies)`를 통해, 안의 데이터를 보면 성공적으로 통신이 되었다는 200 코드와 함께 정보들을 확인할 수 있다.
        
        우리가, 실제로 사용하는 mock-data의 구조와 이제 맞춰줘야한다.
        
        ```jsx
        export const MOVIES = {
            "dates": {
                "maximum": "2023-09-17",
                "minimum": "2023-07-31"
            },
            "page": 1,
            "results": [
                {
                    "adult": false,
                    "backdrop_path": "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
                    "genre_ids":
        ```
        
        우리는 `MOVIES.results`를 통해, 화면에 보여주고있었는데, 이제 실제 데이터들은 `movies.data.results`안에 들어있으므로, 그에 맞게 코드를 변경해주면 된다.
        
        ```jsx
        import {MOVIES} from "../../mocks/movies.js";
        import Card from "../../components/Card/card.jsx";
        
        import * as S from './movies.style.js'
        import {useEffect, useState} from "react";
        import axios from "axios";
        
        const MoviesPage = () => {
            const [movies, setMovies] = useState([])
        
            useEffect(() => {
                const getMovies = async () => {
                    const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                        headers: {
                            Authorization: `Bearer 토큰`
                        }
                    })
                    setMovies(movies);
                }
                getMovies()
            }, []);
        
            return (
                <S.CardList>
                    {movies.data.results.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </S.CardList>
            )
        };
        
        export default MoviesPage;
        
        ```
        
        ![스크린샷 2024-09-12 오후 9.20.24.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/a6679e95-8605-4bf2-a660-b5ed8ab23864/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.20.24.png)
        
        혹시라도, 위와 같은 에러가 발생한다면, 당연한 것이다.
        
        여기서 알아야 할 사실은 state는 비동기라는 것 이다. 처음 화면이 켜지기 전에 동작하는데, 당연히 이 떄의 state는 값이 정의되지 않았기 때문에 undefined 이므로, 정의되지 않은 state에 접근하기에 에러가 발생하는 것 이다.
        
        이를 해결하기 위해 **`Optional Chaining`**을 활용할 수 있다.
        
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        
        ```jsx
        import {MOVIES} from "../../mocks/movies.js";
        import Card from "../../components/Card/card.jsx";
        
        import * as S from './movies.style.js'
        import {useEffect, useState} from "react";
        import axios from "axios";
        
        const MoviesPage = () => {
            const [movies, setMovies] = useState([])
        
            useEffect(() => {
                const getMovies = async () => {
                    const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                        headers: {
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNkYWIyMDkxMzI2Y2Y3NTkwNTAwYjQyODNkNjZkNyIsIm5iZiI6MTcyNjE0MTU3Ny42MDM2ODcsInN1YiI6IjY0MzVmY2Y2NjUxZmNmMDBkM2RhYzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cFPsPRHPidq2OnJ3U-3wHJYhnGajDFqUsM8XJ_a_0bw`
                        }
                    })
                    setMovies(movies);
                }
                getMovies()
            }, []);
        
            return (
                <S.CardList>
                // Optional Chaining 활용
                    {movies.data?.results.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </S.CardList>
            )
        };
        
        export default MoviesPage;
        
        ```
        
- **`useEffect`** **심화**
    
    ### useEffect의 Clean Up Function을 사용하는 이유!
    
    `useEffect`를 활용해봤거나, 기타 다른 글을 찾아보았다면, 클린업 함수라는 것이 존재한다고 들어봤을 수 있다. 일반적으로, 이 클린업 함수는 이벤트를 등록하고, 지울 떄 사용한다고 알려져있다.
    
    ```jsx
    import {useEffect, useState} from "react";
    
    const SearchPage = () => {
        const [counter, setCounter] = useState(0);
    
        const handleClick = () => {
            setCounter(prev => prev + 1);
        }
    
    		// 최초 실행
        useEffect(() => {
            const mouseClickEffectEvent = () => {
                console.log(counter);
            }
    
            window.addEventListener('click', mouseClickEffectEvent)
    
    				// 클린업 함수
    				// 클린업 함수는 다음 렌더링이 끝난 뒤에 실행.
            return () => {
                console.log('클린업 함수 실행!', counter)
                window.removeEventListener('click', mouseClickEffectEvent)
            }
        }, [counter]);
        return (
            <>
                <h1 style={{color: 'white'}}>
                    {counter}
                </h1>
                <button onClick={handleClick}>+</button>
            </>
        );
    };
    
    export default SearchPage;
    ```
    
    `useEffect`가 포함된 위의 컴포넌트를 실행하면 아래와 같은 결과가 콘솔에 찍힙니다.
    
    ![스크린샷 2024-09-13 오후 5.04.44.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/8b7c00bc-aa45-492e-800f-6282e0b0e109/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.04.44.png)
    
     실제로 `처음 mount` 되었을 때 `클린업 함수 실행! 0`  이 실행됩니다. 그 이후에 콘솔에 찍힌 로그를 확인해보면, 항상 이전 counter 값, 이전 state를 참조해서, 실행되는 것을 알 수 있습니다.
    
     즉, **`클린업 함수는, 새로운 값을 기반으로 렌더링 된 뒤에 실행`**되지만, 변경된 값을 읽는 것이 아닌, 함수가 정의됐을 **`당시에 선언됐던 이전 값을 보고 실행`**하는 것 이다.
    
    아직, 잘 이해가 안된다면, 아래 마지막 정리하는 글을 읽어보세요~!
    
    ### **`useEffect`의 기본 흐름**
    
    1. **처음 마운트**될 때, `useEffect` 내부의 콜백 함수가 실행됩니다.
    2. **리렌더링**이 발생하고 의존성 배열의 값이 변경되면, `useEffect`는 다음과 같이 동작합니다:
        - 먼저, **이전의 클린업 함수**가 실행됩니다. (이전 렌더링의 상태나 값을 기준으로 실행)
        - 그 후에, 새로운 사이드 이펙트 콜백이 실행됩니다.
    
    이런 방식은 특히 **이벤트 핸들러**나 **타이머** 등을 설정할 때 유용합니다. 클린업 함수가 없으면 이벤트 핸들러가 여러 번 중복 등록되거나 메모리 누수가 발생할 수 있기 때문입니다. 클린업 함수가 **이전 상태**를 기반으로 실행되면서, 이전에 등록된 이벤트를 정리하고 새로운 이벤트를 추가하는 방식으로 동작을 제어합니다.
    
    ### **클린업 함수와 언마운트와의 차이**
    
    클래스 컴포넌트에서 `componentWillUnmount`는 컴포넌트가 **DOM에서 사라질 때** 호출됩니다. 하지만 함수형 컴포넌트의 클린업 함수는 **리렌더링이 발생할 때마다** 호출되며, 이는 언마운트와 다른 개념입니다. 클린업 함수는 리렌더링 시마다 **이전 상태**를 정리해 주는 역할을 합니다.
    

# 🔥 미션 - 영화 사이트 제작

![스크린샷 2024-09-13 오전 2.03.56.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e52e9543-6861-499a-a5e9-6c107d641aba/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-13_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.03.56.png)

<aside>
💡

Chpater 2 에서는, **`mock-data`**를 활용하여, 영화 컴포넌트를 만들었습니다.

이번에는 위의 실습 내용을 바탕으로, 실제 영화 데이터를 활용해서, **`YONGCHA`** 페이지를 만들어보도록 하겠습니다.

</aside>

- [x]  `Styled-Components`를 활용하여, 스타일링을 진행하겠습니다. 이전에, className 또는 inline-style로 진행했더라면, 해당 내용을 `Styled-Components`로 수정해주세요!
- [x]  먼저, `root-layout`을 잡아주세요
    - [ ]  `navbar`를 최상단에 먼저 배치해주세요.
    - [ ]  `sidebar`와 `Outlet`을 가로축으로 배치해주세요.

### navbar 구현

- [x]  로고를 만들어주세요, 로고를 클릭했을 시, `홈페이지로 ‘/’` 이동하여야 합니다.
- [ ]  로그인과 회원가입 버튼을 만들어주세요.
    - [ ]  버튼이 hover 되었을 시, 색상이 달라지게 UX를 개선해주세요!
    - [ ]  로그인 버튼을 클릭시 `‘/login’` 페이지로 이동합니다.
        
        ![스크린샷 2024-09-13 오전 3.29.31.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/8547e45b-56ad-4957-b275-b4acc43cd8ad/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-13_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.29.31.png)
        
    - [ ]  회원가입 버튼을 클릭시 `‘/signup’` 페이지로 이동합니다.
        
        ![스크린샷 2024-09-13 오전 3.29.41.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5478e2ee-b607-45d7-b855-8d0915ddba4e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-13_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.29.41.png)
        

### sidebar 구현

- [ ]  **`react-icons`** 라이브러리를 활용하여, 비슷한 아이콘을 활용해주세요!
    
    https://react-icons.github.io/react-icons/
    
- [ ]  찾기 버튼 클릭시, `/search` 경로로 이동하며, 아래와 같은 화면을 보이게 해주세요.
    
    ![스크린샷 2024-09-13 오전 3.21.38.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/fa486e15-2078-412b-be67-80001a5963a4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-13_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.21.38.png)
    
- [ ]  영화 버튼 클릭시, 아래와 같은 화면이 보이도록 해주세요! 이미지는, 자유롭게 사용하시면 좋습니다!
    
    ![스크린샷 2024-09-13 오전 3.22.04.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/669c67d0-8544-484c-869e-4bcb0df98479/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-13_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.22.04.png)
    

### 카테고리 페이지

<aside>
💡

실제 해당하는 페이지로 이동한 후, 각각 카테고리에 해당하는, 영화 데이터를 불러오는 실습을 진행 할 예정입니다. 아래 공식문서를 참고해주세요!

</aside>

[The Movie Database (TMDB)](https://www.themoviedb.org/)

- [ ]  현재 상영중인 박스를 클릭하면 `/movies/now-playing 페이지로 이동` 후, 실제 `NowPlaying 영화 데이터`를 불러오기
- [ ]  인기있는 박스를 클릭하면 `/movies/popular 페이지로 이동` 후, `실제 Popular 영화 데이터`를 불러오기
- [ ]  높은 평가를 받은 박스를 클릭하면 `/movies/top-rated 페이지로 이동` 후, 실제 `TopRated 영화 데이터`를 불러오기
- [ ]  개봉 예정중인 박스를 클릭하면 `/movies/up-coming 페이지로 이동` 후, 실제 `UpComing 영화 데이터`를 불러오기
- [ ]  각기 다른, 요소의 영화 데이터들이 아래와 같이 불러와진다면 성공입니다.

![스크린샷 2024-09-13 오전 2.03.56.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e52e9543-6861-499a-a5e9-6c107d641aba/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-13_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.03.56.png)

### 전체적인 체크 사항

- [ ]  **`컴포넌트 재사용`**을 했는가?
- [ ]  이전에 만들었던 영화 카드 컴포넌트에, 영화 제목과, 개봉일을 추가했는가?
- [ ]  **`언어 설정을 한국어`**로 변경했는가?
- [ ]  **`Styled-Component`**를 잘 활용했는가?
- [ ]  **`폴더 구조`**를 명확히 구분하여, 프로젝트를 진행했는가?

# ⚡ 트러블 슈팅

---

<aside>
💡 실습하면서 생긴 문제들 또는 어려웠던 내용에 대해서, **이슈 - 문제 - 해결** 순서로 작성해주세요.

</aside>

- ⚡이슈 No.1 (예시, 서식만 복사하시고 지워주세요.)
    
    **`이슈`**
    
    👉 앱 실행 중에 노래 다음 버튼을 누르니까 앱이 종료되었다.
    
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