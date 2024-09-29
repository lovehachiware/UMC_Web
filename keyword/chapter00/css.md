- border vs outline의 차이점 🍠
    
    
    ![스크린샷 2024-09-24 오후 9.12.17.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/cbd95514-f925-4cfb-b0ef-0dee52c7f73b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.12.17.png)
    
    위에 나온 코드를 보면, box1은 border을 10픽셀 쓰고, box2는 outline을 10픽셀 쓰는데,
    
    해당 코드를 라이브서버로 돌려보면 다음과 같이 박스 두개가 출력된다.
    
    ![스크린샷 2024-09-24 오후 9.14.35.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/687fc07b-831f-47b2-aed7-2e8cd1499d3d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.14.35.png)
    
    이 두 박스를 각자 개발자도구로 사이즈를 보도록 하자.
    
    ![스크린샷 2024-09-24 오후 9.15.39.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/3e3bc9c4-51b7-49a9-bbb6-29d56d9af0d7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.15.39.png)
    
    box 1은 우리가 `box-sizing: border-box;`가 적용되어 있어 100*100으로 설정된 width와 height안에 가로 합 20 세로 합 20의 border이 맞춰서 들어간다.
    
    우리가 박스의 크기를 아래와 같이 설정해둔 이상 border의 크기가 아무리 커져도 박스의 총 넓이는 정해져있다.
    
    ```css
    width: 100px; height: 100px;
    ```
    
    ![스크린샷 2024-09-24 오후 9.23.36.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/b2f53747-3394-40dc-9c23-0c3ecdc50836/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.23.36.png)
    
    `outline` 은 요소의 크기에는 영향을 주지 않고, 바깥쪽에 빨간 `outline`이 표시되지만, **실제 크기는 변하지 않는다.** 
    
    따라서 해당 박스도 100*100으로 box 1과 요소의 크기는 같지만, 시각적으로는 box2가 outline때문에 더 크게 보인다.
    
    - 참고

| **특성** | **`border`** | **`outline`** |
| --- | --- | --- |
| **위치** | 요소의 **내부**에 위치하며, 테두리 박스 안에 포함됨. | 요소의 **외부**에 위치하며, 테두리 박스 밖에 있음. |
| **크기 변화** | 요소의 크기에 **영향을 줌** (너비와 높이를 증가시킴). | 요소의 크기에 **영향을 주지 않음**. |
| **레이아웃 영향** | 요소의 레이아웃에 **영향을 줌**. | 요소의 레이아웃에 **영향을 주지 않음**. |
| **개별 면 설정** | 각 면(위, 오른쪽, 아래, 왼쪽)을 **따로 설정 가능**. | 모든 면에 **동시에 적용**되며, 개별 설정 불가. |
| **곡선 처리** | `border-radius`를 통해 **둥근 모서리** 설정 가능. | 모서리를 **둥글게 할 수 없음**, 항상 직선. |
| **브라우저 상호작용** | 주로 시각적 테두리로 레이아웃에 사용. | **포커스 시각화** 및 **접근성**을 위해 주로 사용됨. |
| **적용 방식** | 요소의 **크기와 레이아웃에 포함**. | 요소의 크기와 레이아웃과는 **독립적으로 표시**됨. 

<aside>
💡 Q: 그럼, 한번 여러분들이 이번에는 위의 이미지 상태에서 고구마 상자를 아래와 같은 이미지 처럼 이동시켜 주세요. 

Hint: `bottom`과 `right` 속성을 활용해서 진행해주세요. 필요시 고구마 상자 글씨 태그에 class 명을 부여해도 좋습니다.

⭐️ 꼭 양수만 사용할 수 있는 것은 아닙니다! ⭐️

</aside>

![스크린샷 2024-07-18 오후 6.57.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/fd7e2bc8-0597-4eff-a26b-0ffbffe17e43/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.57.43.png)

- 코드를 첨부해주세요 🍠
    
    ```html
    position: relative;
    top: 이동하고싶은 px;
    left: 이동하고싶은 px;
    ```
    

위와 같이 코드를 입력하면 원하는 만큼 상자를 이동시킬 수 있다.

또한, 코드를 통해 이동했기에 개발자도구를 통해 보면 현재 아래와 오른쪽의 position이 -50임을 볼 수 있다.

따라서 다음과 같이 코드를 수정해주어 문제를 해결할 수 있었다.
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: purple;
      color: white;
      box-sizing: border-box;
      position: relative;
      top: 150px;
    }
  </style>
</head>

<body>
  <div class="box">BOX</div>
  <h1>고구마 상자</h1>
</body>

</html>


- **`position: absolute`**를 활용하여 본인의 힘으로, 아래와 같은 이미지로 BOX2를 이동시켜보세요! 🍠
    
    ![스크린샷 2024-07-18 오후 7.13.52.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5a810066-8c42-4e8a-a2ac-fe8757085432/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.13.52.png)
    
    ### 코드는 아래에 첨부해주세요!
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        /** 전체 선택자 기본적으로 설정된 마진을 없앰. */
        * {
          margin: 0;
          box-sizing: border-box;
        }
    
        .box1 {
          width: 500px;
          height: 500px;
          background-color: purple;
          color: white;
          position: relative;
        }
    
        .box2 {
          width: 200px;
          height: 200px;
          background-color: yellow;
          position: absolute;
          top: 0px;
          right: 1010px;
        }
      </style>
    </head>
    
    <body>
      <div class="box1">BOX1</div>
      <h1 class="box2">BOX2</h1>
    </body>
    
    </html>
    ```
    

위와 같은 코드로 상단에서 0px, 오른쪽에서 1010px 떨어진 위치에 배치하여 문제를 해결했다.


### 키워드 정리 🍠

- text-align
    
    텍스트의 **정렬 방향**을 지정하는 속성이다. 
    
    주로 텍스트를 **가운데**, **왼쪽**, **오른쪽**으로 정렬할 때 사용됩니다.
    
    - **`left`**: 왼쪽 정렬
    - **`right`**: 오른쪽 정렬
    - **`center`**: 가운데 정렬
    - **`justify`**: 양쪽 정렬, 텍스트를 양쪽에 맞춰 정렬
    
    ```css
    .text-center {
      text-align: center;
    }
    ```
    
- margin
    
    기본적으로 b**lock 태그는 text-align의 영향을 받지 않는다. 따라서 block 태그** 자체를 중앙정렬하기 위해서는 바로 해당 요소에 **`margin:0 auto`** 를 하면 된다.
    
    margin이라는 css는 값을 작성할 때 2개를 작성하면
    
    왼쪽에 작성한 값은 대상태그의 위 아래 부분에 적용되며
    
    오른쪽에 작성한 값은 대상태그의 왼쪽 오른쪽에 적용이 되는 css이다.
    
    그러면 `margin: 0 auto`를 해석해보자.
    
    `auto` = 대상태그를 양쪽 끝지점을 기준으로 정확히 중앙으로
    
    올 수 있도록 값을 자동으로 계산해서 태그를 이동시켜주는 특수한 값
    
    `margin: 0 auto` 라는 css는 대상태그를 중앙으로 보내는 역할이다.
    
    하지만 대상태그를 감싸주고 있는 태그가 있다면, 감싸주고 있는 태그안에서 중앙정렬이 된다
    
    ======================================================
    
    **요소의 외부 여백**을 지정하는 속성이다. `margin: auto`를 사용하면 **수평 가운데 정렬**이 가능합니다.
    
    - **`margin-top`**: 상단 여백
    - **`margin-bottom`**: 하단 여백
    - **`margin-left`**: 왼쪽 여백
    - **`margin-right`**: 오른쪽 여백
    - **`margin: auto`**: 여백을 자동으로 계산하여 **가운데 정렬**
    
    ```css
    .center-box {
      width: 200px;
      margin: 0 auto; /* 수평 가운데 정렬 */
    }
    ```
    

- flex
    
    외부 요소에 `display: flex`와 `center`에 관련된 속성들을 넣고, 내부 요소에는 `margin`을 `auto`로 주면 간편하게 중앙 정렬이 가능하다.
    
    **Flexbox**는 요소를 **수평 및 수직**으로 쉽게 정렬할 수 있게 도와준다.
    
    - **`display: flex`**: Flex 컨테이너 설정
    - **`justify-content`**: **수평 정렬**을 결정
    - **`align-items`**: **수직 정렬**을 결정
    - **`flex-direction`**: 정렬의 방향을 설정 (예: `row`, `column`)
    
    ```css
    .flex-center {
      display: flex;
      justify-content: center; /* 수평 가운데 정렬 */
      align-items: center;     /* 수직 가운데 정렬 */
      height: 100vh;
    }
    ```
    
- translate
    
    `translate`는 **변환(Transform)** 속성을 사용하여 요소를 중앙에 배치하는 방식이다.
    
    `position`과 **`transform`** 속성을 함께 사용하여 요소를 **정확히 중앙**에 배치할 수 있다.
    
    - **`position: relative`**: 부모 요소 설정
    - **`position: absolute`**: 자식 요소 설정
    - **`transform: translate(-50%, -50%)`**: 요소의 중심을 이동
    
    ```css
    .absolute-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); /* 요소의 중심을 이동 */
    }
    ```
    
- grid
    
    **CSS Grid**를 사용하면 **수평 및 수직 중앙 정렬**을 매우 쉽게 할 수 있다.
    
    CSS Grid는 Flexbox와 유사한 방식으로 작동하지만, Grid는 2차원인 Flexbox와 달리 다차원이라는 추가적인 이점이 있다.
    
    CSS Grid로 이미지를 중앙 정렬하려면, 중앙 정렬하고 싶은 이미지를 감싸는 컨테이너 `div` 요소를 생성한 후, 컨테이너 `div` 요소의 `display` 속성값을 `grid`로 설정한다. 그리고 컨테이너 `div`요소의`place-items`속성값을 `center`로 지정하면 이미지가 중앙 정렬된다.
    
    ---
    
    **CSS Grid**는 **이차원 레이아웃**을 구축하는 데 매우 유용한 방법이다. `grid`를 사용하면 복잡한 레이아웃을 쉽게 만들 수 있습니다.
    
    - **`display: grid`**: 그리드 컨테이너 설정
    - **`place-items: center`**: **수평 및 수직 모두** 중앙 정렬
    - **`grid-template-columns`**: 열의 레이아웃을 정의
    - **`grid-template-rows`**: 행의 레이아웃을 정의


### 위의 키워드를 각각 활용해서 가운데 정렬을 해주세요! 🍠

<aside>
💡 html 요소는 여러분들이 직접 만드셔서, 가운데 정렬을 한 영상과 코드만 남겨주시면 됩니다.
향후 학습에 있어서, 매우 중요한 부분이니, 많은 실습 부탁드립니다!

</aside>

- text-align
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Align Center</title>
    <style>
    .text-center {
    text-align: center; /* 텍스트를 수평 가운데 정렬 */
    font-size: 24px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    </style>
    </head>
    <body>
    <div class="text-center">하치와레</div>
    </body>
    </html>
    ```
    
- margin
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Margin Auto Center</title>
    <style>
    .box {
    width: 200px;
    height: 50px;
    background-color: lightgray;
    margin: 0 auto; /* 수평 가운데 정렬 */
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }
    </style>
    </head>
    <body>
    <div class="box">하치와레</div>
    </body>
    </html>
    ```
    
- flex
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Center</title>
    <style>
    .flex-center {
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center;     /* 수직 가운데 정렬 */
    height: 100vh;
    font-size: 24px;
    }
    </style>
    </head>
    <body>
    <div class="flex-center">하치와레</div>
    </body>
    </html>
    ```
    
- translate
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Translate Center</title>
    <style>
    .translate-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 요소를 중앙으로 이동 */
    font-size: 24px;
    }
    </style>
    </head>
    <body>
    <div class="translate-center">하치와레</div>
    </body>
    </html>
    ```
    
- grid
    
    ```css
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Grid Center Example</title>
      <style>
        .container {
          display: grid;
          place-items: center; /* 수평 및 수직 중앙 정렬 */
          height: 100vh; /* 화면의 전체 높이를 차지 */
          background-color: lightblue;
        }
    
        .text {
          font-size: 24px;
          background-color: white;
          padding: 20px;
          border: 2px solid black;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="text">하치와레</div>
      </div>
    </body>
    </html>
    ```
    
- 반응형 background 🍠
    - background-image
        
        배경 이미지를 설정하는 속성이고, 이미지를 URL 경로나 파일 경로를 통해 설정할 수 있다.
        
        ```css
        body {
        background-image: url('이미지 경로/image.jpg');
        }
        ```
        
    - background-repeat
        
        배경 이미지의 반복 여부를 제어하는 속성이다.
        
        `repeat`: 기본값으로, 배경 이미지가 수평 및 수직으로 반복된다.
        `no-repeat`: 배경 이미지를 반복하지 않음.
        `repeat-x`: 수평 방향으로만 반복.
        `repeat-y`: 수직 방향으로만 반복.
        
        ```css
        body {
        background-image: url('이미지 경로/image.jpg');
        background-repeat: no-repeat; /* 이미지를 반복하지 않음 */
        }
        ```
        
    - background-position
        
        배경 이미지의 위치를 설정하는 속성이다.
        
        이는 키워드, 픽셀(px) 또는 퍼센트(%) 단위를 사용하여 위치를 설정할 수 있다.
        
        `left, center, right`: 수평 위치 설정.
        `top, center, bottom`: 수직 위치 설정.
        
        ```css
        body {
        background-image: url('path/to/image.jpg');
        background-position: center center; /* 중앙에 배경 이미지 위치 */
        }
        ```
        
    - background-size
        
        배경 이미지의 크기를 설정하는 속성이다.
        
        `cover`: 배경 이미지를 요소의 크기에 맞춰 완전히 덮음. 이미지가 잘릴 수 있음.
        `contain`: 배경 이미지를 요소 크기에 맞게 축소 또는 확대하여 전체 이미지를 보여줌.
         또한, 픽셀 값이나 퍼센트를 사용해 크기를 지정할 수도 있다.
        
        ```css
        body {
        background-image: url('이미지 경로/image.jpg');
        background-size: cover; /* 요소 크기에 맞춰 배경 이미지를 덮음 */
        }
        ```
        
    - 축약형- transform 🍠
    
    ### transform 🍠
    
    CSS transform 속성으로, 요소에 회전 크기 조절, 기울이기, 이동 효과를 부여할 수 있습니다. `transform`은 CSS [시각적 서식 모델](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)의 좌표 공간을 변경합니다.
    
    <aside>
    💡  아래 키워드를 실습한 사진과 코드를 남겨주세요!
    
    </aside>
    
    - translate
        
        `translate` 속성은 요소를 **X, Y 좌표를 기준으로 이동**시키는 데 사용된다. `translateX`, `translateY`, `translateZ` 등으로 축을 기준으로 이동할 수 있으며, 값을 `px`, `%` 또는 다른 단위로 지정할 수 있다.
        
        ```css
        /* 예제: 요소를 50px 오른쪽, 30px 아래로 이동 */
        .box-translate {
          width: 100px;
          height: 100px;
          background-color: skyblue;
          transform: translate(50px, 30px); /* X축으로 50px, Y축으로 30px 이동 */
        }
        ```
        
    - scale
        
        `scale` 속성은 요소의 **크기를 조정**하는 데 사용된다. `scaleX`와 `scaleY`를 사용하여 X축과 Y축의 크기를 각각 조정하거나, `scale`을 사용하여 전체 크기를 변경할 수 있다. 값은 배수로 지정되며, 1보다 큰 값은 확대, 1보다 작은 값은 축소를 의미한다.
        
        ```css
        /* 예제: 요소의 크기를 가로로 2배, 세로로 1.5배 확대 */
        .box-scale {
          width: 100px;
          height: 100px;
          background-color: lightcoral;
          transform: scale(2, 1.5); /* 가로 2배, 세로 1.5배 확대 */
        }
        ```
        
    - rotate
        
        `rotate` 속성은 요소를 **지정된 각도만큼 회전**시키는 데 사용된다. 값은 `deg`(도)를 단위로 하며, 양수는 시계 방향, 음수는 반시계 방향 회전을 의미한다.
        
        ```css
        /* 예제: 요소를 45도 시계 방향으로 회전 */
        .box-rotate {
          width: 100px;
          height: 100px;
          background-color: mediumseagreen;
          transform: rotate(45deg); /* 45도 시계 방향으로 회전 */
        }
        ```
        
    - skew
        
        `skew` 속성은 요소를 **기울이는(왜곡하는) 효과**를 부여한다. `skewX`와 `skewY`로 X축, Y축에 대해 기울기 각도를 지정할 수 있으며, 두 축을 동시에 기울이려면 `skew`를 사용한다.
        
        ```css
        /* 예제: 요소를 X축으로 20도, Y축으로 10도 기울임 */
        .box-skew {
          width: 100px;
          height: 100px;
          background-color: gold;
          transform: skew(20deg, 10deg); /* X축 20도, Y축 10도 기울기 */
        }
        ```
        
    - matrix
        
        `matrix` 속성은 `translate`, `scale`, `rotate`, `skew` 속성을 **조합하여 요소를 변형**할 수 있는 함수이다. `matrix(a, b, c, d, e, f)`의 6가지 인자를 사용하여 변형을 정의한다.
        
        - `a`와 `d`: X축과 Y축의 크기 조정.
        - `b`와 `c`: 기울기.
        - `e`와 `f`: X축, Y축의 위치 이동.
        
        ```css
        /* 예제: 요소를 조합된 변형(회전, 크기 조절, 이동)으로 변형 */
        .box-matrix {
          width: 100px;
          height: 100px;
          background-color: tomato;
          transform: matrix(1, 0.5, -0.5, 1, 30, 30); /* 크기 조정, 기울기, 위치 이동 적용 */
        }
        ```
        
    
    [transform - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
    
- transition 🍠
    
    ### transition  🍠
    
    <aside>
    💡 아래 키워드에 대해 학습한 후, 실습을 진행해주시고, 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    `transition`은 CSS에서 요소의 상태 변화(예: 크기, 색상, 위치 등)를 **부드럽게 애니메이션 효과**로 표현할 수 있게 해주는 속성이다. 
    
    이와 관련된 속성들을 이용하면 사용자가 요소와 상호 작용할 때 더욱 자연스러운 시각적 효과를 줄 수 있다.
    
    - transition-property
        
        `transition-property`는 어떤 CSS 속성에 대해 애니메이션을 적용할지 결정하는 속성이다. 예를 들어, `background-color`, `color`, `width` 등 특정 속성을 지정하면 해당 속성의 값이 변경될 때 부드럽게 애니메이션 효과가 적용된다. 여러 속성을 동시에 애니메이션화하고 싶다면 쉼표(,)로 구분하여 나열할 수도 있고, `all`을 사용해 모든 속성에 애니메이션을 적용할 수도 있다.
        
        ```css
        /* 배경색과 너비 속성에 애니메이션 효과를 적용 */
        transition-property: background-color, width;
        ```
        
    - transition-duration
        
        `transition-duration` 속성은 애니메이션이 얼마나 오래 걸릴지를 초(`s`)나 밀리초(`ms`) 단위로 지정한다. 애니메이션의 지속 시간을 길게 설정하면 변환이 천천히 이루어져 부드러운 효과를 줄 수 있고, 짧게 설정하면 빠른 전환 효과를 줄 수 있다.
        
        ```css
        /* 애니메이션이 2초 동안 지속되도록 설정 */
        transition-duration: 2s;
        ```
        
    - transition-timingfunction
        
        `transition-timing-function`은 애니메이션의 속도 변화 곡선을 정의하는 속성이다. 애니메이션이 어떤 속도로 시작하고, 진행되며, 끝나는지를 설정할 수 있다. `ease`를 사용하면 부드럽게 시작하고 끝나는 효과를 줄 수 있으며, `linear`를 사용하면 일정한 속도로 움직이는 효과를 줄 수 있다. `ease-in`, `ease-out`, `ease-in-out` 등을 사용하여 다양한 애니메이션 속도 변화를 줄 수 있으며, `cubic-bezier`를 사용하면 사용자 정의 속도 곡선을 직접 지정할 수도 있다.
        
        ```css
        /* 애니메이션이 천천히 시작하고 끝나도록 설정 */
        transition-timing-function: ease-in-out;
        ```
        
    - transition-delay
        
        `transition-delay`는 애니메이션이 시작되기 전에 얼마나 지연될지를 설정하는 속성이다. 초(`s`) 또는 밀리초(`ms`) 단위로 값을 설정하면, 지연 시간이 지난 후에 애니메이션이 시작된다. 애니메이션이 바로 시작되는 대신, 특정 시간 동안 기다리도록 하여 사용자에게 기대감을 줄 수 있다.
        
        ```css
        /* 애니메이션이 0.5초 후에 시작되도록 설정 */
        transition-delay: 0.5s;
        ```
        
    - transition-behavior
        
        `transition-behavior` CSS 속성은 애니메이션 동작이 불연속적(discrete)인 속성들에 대해 **전환(transition)이 시작될지 여부**를 지정한다.
        
        **`allow-discrete`**:
        
        불연속적으로 애니메이션되는 속성들에 대해 요소에서 전환이 시작되도록 허용한다.
        
        **`normal`**:
        
        불연속적으로 애니메이션되는 속성들에 대해 요소에서 전환이 시작되지 않도록 한다.
        
        여러 background 속성들을 하나의 선언으로 축약할 수 있다.
        
        선언 순서는 `background-color, background-image, background-repeat, background-position, background-size` 순으로 사용된다.


        ### 실습  🍠

**`transition`** 키워드를 학습한 후, 해당 키워드와, **`transform에서 배운 특정 키워드를 활용`**하여, 아래와 같은 영상과 비슷하게 만들어주세요! (똑같을 필요는 없고, 기능만 같으면 됩니다.)

단, **`transition 축약형`**을 사용해주세요!

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diamond Shapes</title>
  <style>
    /* 전체 화면 중앙 정렬 */
    body, html {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      background-color: #f5f5f5;
    }

    /* 마름모 모양들을 감싸는 컨테이너 */
    .container {
      display: flex;
      flex-direction: column; /* 세로 방향으로 배치 */
      align-items: center; /* 자식 요소를 가운데 정렬 */
    }

    /* 마름모 모양 기본 스타일 */
    .diamond {
      width: 150px;
      height: 150px;
      background-color: pink; /* 마름모 색상 */
      transform: rotate(45deg); /* 45도 회전하여 마름모 모양 만들기 */
      margin: 35px 35px; /* 위아래 간격 설정 */
    }
     /* 마름모에 커서를 올렸을 때 색상이 보라색으로 변경되도록 설정 */
     .diamond:hover {
      background-color:purple; /* 커서를 올렸을 때 색상: 보라색 */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="diamond"></div>
    <div class="diamond"></div>
    <div class="diamond"></div>
  </div>
</body>
</html>

### animation 🍠

<aside>
💡 아래 키워드에 대해 학습한 후, 실습을 진행하시고 코드와 실행 영상을 남겨주세요!

</aside>

- animation-name
    
    `animation-name`은 애니메이션의 이름을 지정하는 속성이다. `@keyframes` 규칙을 사용하여 지정한 애니메이션의 이름과 일치해야 애니메이션이 동작한다. 이 이름을 통해 어떤 애니메이션이 요소에 적용될지를 결정한다.
    
    ```css
    animation-name: bounce; /* @keyframes에 정의된 애니메이션 이름을 지정 */
    ```
    
- animation-duration
    
    `animation-duration`은 애니메이션이 **얼마나 오래 지속되는지**를 지정하는 속성이다. `s`(초)나 `ms`(밀리초) 단위로 설정한다.
    
    ```css
    animation-duration: 2s; /* 애니메이션이 2초 동안 지속 */
    ```
    
- animation-delay
    
    `animation-delay`는 애니메이션이 **시작되기 전의 지연 시간**을 지정하는 속성이다. `0.5s`, `1s`와 같이 초 단위나 밀리초 단위로 설정할 수 있다.
    
    ```css
    animation-delay: 1s; /* 애니메이션이 1초 후에 시작 */
    ```
    
- animation-direction
    
    `animation-direction`은 애니메이션이 **어떤 방향으로 재생될지**를 설정한다. 다음과 같은 값들을 사용할 수 있다:
    
    - `normal`: 애니메이션이 처음부터 끝까지 한 방향으로 재생.
    - `reverse`: 애니메이션이 끝에서 시작으로 반대 방향으로 재생.
    - `alternate`: 애니메이션이 번갈아가며 정방향, 역방향으로 재생.
    - `alternate-reverse`: 애니메이션이 번갈아가며 역방향, 정방향으로 재생.
    
    ```css
    animation-direction: alternate; /* 애니메이션이 번갈아가며 정방향, 역방향으로 재생 */
    ```
    
- animation-iteration-count
    
    `animation-iteration-count`는 애니메이션이 **몇 번 반복될지**를 설정하는 속성이다. 숫자로 반복 횟수를 설정하거나, `infinite`로 무한 반복되도록 설정할 수 있다.
    
    ```css
    animation-iteration-count: infinite; /* 애니메이션을 무한 반복 */
    ```
    
- animation-play-state
    
    `animation-play-state`는 애니메이션의 **재생 여부**를 제어한다. `running`으로 설정하면 애니메이션이 재생되고, `paused`로 설정하면 애니메이션이 일시정지된다.
    
    ```css
    animation-play-state: paused; /* 애니메이션 일시정지 */
    ```
    
- animation-timing-function
    
    `animation-timing-function`은 애니메이션의 **속도 변화 곡선**을 설정하는 속성이다. `transition-timing-function`과 동일하게 `ease`, `linear`, `ease-in`, `ease-out`, `cubic-bezier` 등을 사용할 수 있다.
    
    ```css
    animation-timing-function: ease-in-out; /* 애니메이션의 속도가 천천히 시작하고 끝남 */
    ```
    
- animation-fill-mode
    
    `animation-fill-mode`는 애니메이션이 **시작 전이나 종료 후에 어떤 스타일을 적용할지**를 설정한다. 다음과 같은 값들을 사용할 수 있다:
    
    - `none`: 기본값으로, 애니메이션이 끝나면 스타일이 원래 상태로 돌아감.
    - `forwards`: 애니메이션이 끝난 후 마지막 스타일을 유지.
    - `backwards`: 애니메이션이 시작되기 전에 첫 번째 스타일을 적용.
    - `both`: 애니메이션이 시작 전과 종료 후 모두 `backwards`와 `forwards`의 스타일을 적용.
    
    ```css
    animation-fill-mode: forwards; /* 애니메이션 종료 후 마지막 스타일을 유지 */
    ```
    
- @keyframes
    
    `@keyframes`는 애니메이션의 **중간 단계를 정의**하는 규칙이다. 애니메이션의 각 단계에서 요소가 어떤 스타일을 가질지를 지정하며, 각 단계는 `%` 값으로 표현된다.
    
    ```css
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-50px); /* 위로 50px 이동 */
      }
      100% {
        transform: translateY(0); /* 원래 위치로 돌아옴 */
      }
    }
    ```
    
- 축약형
    
    축약형은 `animation` 관련 속성들을 한 번에 지정할 수 있는 방식이다. 다음과 같은 순서로 속성들을 설정한다:
    
    ```css
    animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode animation-play-state;
    ```
    
    예를 들어, 아래와 같은 방식으로 축약형을 사용할 수 있다:
    
    ```css
    animation: bounce 2s ease-in-out 1s infinite alternate both running;
    ```


    ### 실습  🍠

 **`animation 키워드`**를 학습한 후, 아래와 비슷한 영상을 만들어주세요!

단, **`animation 축약형`**을 사용해주세요!

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bouncing Ball Animation</title>
  <style>
    /* 전체 화면에 중앙 정렬 */
    body, html {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      background-color: white;
    }

    /* 애니메이션이 적용된 원 스타일 */
    .ball {
      width: 150px; /* 원의 너비 */
      height: 150px; /* 원의 높이 */
      background-color: purple; /* 원의 배경색 */
      border-radius: 50%; /* 원 모양을 만들기 위해 반지름 설정 */
      position: relative; /* 위치 설정을 위해 relative 사용 */
      bottom: 0; /* 원을 화면 바닥에 위치시키기 */
      animation: bounce 0.5s ease-in-out infinite alternate; /* 축약형 사용: 튀는 애니메이션 */
    }

    /* 애니메이션의 키프레임 정의 */
    @keyframes bounce {
      0% {
        transform: translateY(0); /* 바닥에 위치 */
      }
      100% {
        transform: translateY(-300px); /* 위로 300px 이동 */
      }
    }
  </style>
</head>
<body>
  <div class="ball"></div> <!-- 애니메이션이 적용된 원 -->
</body>
</html>

<!-- 살짝 퍼지는 건 어떻게 해야하나요?? -->