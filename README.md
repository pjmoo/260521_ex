# 자바스크립트(JavaScript) 기초 문법 다지기 💻

웹페이지에 똑똑한 동작과 생동감을 불어넣어 주는 프로그래밍 언어, 자바스크립트의 첫걸음입니다. 연산, 변수, 자료구조(객체, 배열), 제어문(조건문, 반복문)의 기초 개념을 배웁니다.

---

## 📂 학습 파일 구성 (Files)

- [01_hello-js.html](file:///C:/workspace/260521_ex/01_hello-js.html) : HTML 문서 안에 자바스크립트 코드를 불러오고 브라우저에서 실행시켜 주는 연결 통로 파일
- [01_script.js](file:///C:/workspace/260521_ex/01_script.js) : HTML에서 호출하여 브라우저의 알림창이나 개발자 도구 콘솔에 글씨를 출력하는 스크립트 파일
- [02_syntax.js](file:///C:/workspace/260521_ex/02_syntax.js) : 자바스크립트 문법의 작성 규칙과 주의사항 정리
- [03_var.js](file:///C:/workspace/260521_ex/03_var.js) : 변할 수 있는 데이터를 담는 변수(`let`)와 한 번 지정하면 바꿀 수 없는 상수(`const`) 기초 실습
- [04_data-types.js](file:///C:/workspace/260521_ex/04_data-types.js) : 숫자, 글자(문자열), 참/거짓(Boolean), 비어있음(null/undefined) 등 데이터 종류 학습
- [05_objects-arr.js](file:///C:/workspace/260521_ex/05_objects-arr.js) : 데이터를 하나로 묶어 다루는 객체(Object, `{키:값}`)와 순서대로 보관하는 배열(Array, `[값,값]`) 이해
- [06_operator.js](file:///C:/workspace/260521_ex/06_operator.js) : 더하기/빼기 연산, 비교 연산, 논리 연산(`&&`, `||`) 등 계산 원리 학습
- [07_if.js](file:///C:/workspace/260521_ex/07_if.js) / [08_switch.js](file:///C:/workspace/260521_ex/08_switch.js) : 상황에 따라 다른 코드를 실행시키는 조건문 학습
- [09_while.js](file:///C:/workspace/260521_ex/09_while.js) : 만족하는 조건 동안 코드를 여러 번 실행하는 반복문(`while`) 실습

---

## 🛠 배운 핵심 개념 (What We Learned)

- **변수의 스코프**: 기존의 `var` 대신 현대 자바스크립트에서는 안전한 코드 작성을 위해 `let`과 `const`를 주로 사용하는 이유를 배웁니다.
- **기초 알고리즘 제어**: 조건문과 반복문을 엮어서 컴퓨터가 조건에 맞게 스스로 반복적인 계산을 처리하도록 시키는 원리를 배웁니다.

---

## 🚀 실행 및 확인 방법 (How to Run)

**방법 A (브라우저 콘솔 확인)**: [01_hello-js.html](file:///C:/workspace/260521_ex/01_hello-js.html) 파일을 열고 F12 개발자 도구의 **Console(콘솔)** 탭에서 출력 내용을 확인합니다.
**방법 B (Node.js 실행)**: 컴퓨터에 Node.js가 설치되어 있다면 터미널에서 `node 파일명.js` (예: `node 03_var.js`)를 쳐서 바로 실행 결과를 출력해 볼 수 있습니다.

---

## PDF 기반 보충 정리

- JavaScript는 브라우저의 `<script>` 태그뿐 아니라 Node.js 런타임에서도 실행할 수 있다. 브라우저에서는 DOM을 조작할 수 있고, Node.js에서는 파일·서버 같은 환경 기능을 사용할 수 있다.
- 변수는 기본적으로 `const`를 사용하고, 재할당이 필요할 때만 `let`을 사용한다. `var`는 함수 스코프와 호이스팅 특성 때문에 새 코드에서는 피한다.
- 원시 값과 달리 객체·배열은 참조로 다뤄진다. `===`로 비교할 때 객체는 내용이 같아도 서로 다른 객체면 `false`가 될 수 있다.
- 조건문은 Truthy/Falsy를 이해하면 간결하게 작성할 수 있지만, `0`, 빈 문자열, `null`, `undefined`를 서로 구별해야 할 때는 명시적으로 비교한다.

## TIL

- `const`는 객체 내부를 불변으로 만들지는 않는다. 재할당만 막으므로 객체 속성은 별도로 변경될 수 있다.
- `switch`에서 `break`를 빼면 다음 case까지 실행되는 fall-through가 발생한다.
