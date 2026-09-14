# 자바스크립트(JavaScript) 기초 문법 다지기 💻

<!-- workspace-readme-learning:start -->
## 파일과 연결한 학습 안내

아래 설명은 이 폴더의 실제 소스와 빌드 설정을 기준으로 정리했습니다. 기존 소개의 기능 설명은 연결된 파일과 함께 확인할 수 있습니다.

### 주요 파일과 역할

| 파일 | 역할과 읽을 내용 |
| --- | --- |
| [01_hello-js.html](<01_hello-js.html>) | JS 화면 |
| [01_script.js](<01_script.js>) | JavaScript 모듈 또는 문법 실습 |
| [02_syntax.js](<02_syntax.js>) | JavaScript 모듈 또는 문법 실습 |
| [03_var.js](<03_var.js>) | JavaScript 모듈 또는 문법 실습 |
| [04_data-types.js](<04_data-types.js>) | JavaScript 모듈 또는 문법 실습 |
| [05_objects-arr.js](<05_objects-arr.js>) | JavaScript 모듈 또는 문법 실습 |
| [06_operator.js](<06_operator.js>) | JavaScript 모듈 또는 문법 실습 — `login`, `session` |
| [07_if.js](<07_if.js>) | JavaScript 모듈 또는 문법 실습 |
| [08_switch.js](<08_switch.js>) | JavaScript 모듈 또는 문법 실습 |
| [09_while.js](<09_while.js>) | JavaScript 모듈 또는 문법 실습 |

### 실행과 설정 확인

- [01_hello-js.html](<01_hello-js.html>)에서 화면을 확인합니다. 모듈·Fetch·외부 API를 사용하는 페이지는 로컬 HTTP 서버에서 열어 요청 실패 여부를 확인합니다.

### 관련 PDF와 보충 설명

- [5/27 강의](<../260629_ex/새 폴더/5-27/README.md>): DOM 요소 선택과 생성·수정·삭제를 화면의 실제 이벤트 처리와 연결합니다.
- [5/29 강의](<../260629_ex/새 폴더/5-29/README.md>): 콜백·Promise·async/await의 실행 순서와 오류 전달을 학습합니다.

이 링크는 구현을 이해하기 위한 관련 기초 자료입니다. 해당 강의가 이 저장소의 모든 기능이나 이후 버전의 API를 설명한다는 뜻은 아닙니다.

### 읽는 순서와 복습

- 화면 요소 선택 → 사용자 입력 → 상태 변경 → 렌더링 순서로 코드를 추적합니다. 없는 요소, 빈 입력, 반복 클릭에서 화면 상태가 의도대로 유지되는지 확인합니다.
- 비동기 작업 생성 → 완료 대기 → 성공·실패 처리 순서로 읽습니다. 실행 순서를 먼저 예측하고 실패한 작업이 어떤 처리기로 전달되는지 설명합니다.

<!-- workspace-readme-learning:end -->

웹페이지에 똑똑한 동작과 생동감을 불어넣어 주는 프로그래밍 언어, 자바스크립트의 첫걸음입니다. 연산, 변수, 자료구조(객체, 배열), 제어문(조건문, 반복문)의 기초 개념을 배웁니다.

---

## 📂 학습 파일 구성 (Files)

- [01_hello-js.html](<01_hello-js.html>) : HTML 문서 안에 자바스크립트 코드를 불러오고 브라우저에서 실행시켜 주는 연결 통로 파일
- [01_script.js](<01_script.js>) : HTML에서 호출하여 브라우저의 알림창이나 개발자 도구 콘솔에 글씨를 출력하는 스크립트 파일
- [02_syntax.js](<02_syntax.js>) : 자바스크립트 문법의 작성 규칙과 주의사항 정리
- [03_var.js](<03_var.js>) : 변할 수 있는 데이터를 담는 변수(`let`)와 한 번 지정하면 바꿀 수 없는 상수(`const`) 기초 실습
- [04_data-types.js](<04_data-types.js>) : 숫자, 글자(문자열), 참/거짓(Boolean), 비어있음(null/undefined) 등 데이터 종류 학습
- [05_objects-arr.js](<05_objects-arr.js>) : 데이터를 하나로 묶어 다루는 객체(Object, `{키:값}`)와 순서대로 보관하는 배열(Array, `[값,값]`) 이해
- [06_operator.js](<06_operator.js>) : 더하기/빼기 연산, 비교 연산, 논리 연산(`&&`, `||`) 등 계산 원리 학습
- [07_if.js](<07_if.js>) / [08_switch.js](<08_switch.js>) : 상황에 따라 다른 코드를 실행시키는 조건문 학습
- [09_while.js](<09_while.js>) : 만족하는 조건 동안 코드를 여러 번 실행하는 반복문(`while`) 실습

---

## 🛠 배운 핵심 개념 (What We Learned)

- **변수의 스코프**: 기존의 `var` 대신 현대 자바스크립트에서는 안전한 코드 작성을 위해 `let`과 `const`를 주로 사용하는 이유를 배웁니다.
- **기초 알고리즘 제어**: 조건문과 반복문을 엮어서 컴퓨터가 조건에 맞게 스스로 반복적인 계산을 처리하도록 시키는 원리를 배웁니다.

---

## 🚀 실행 및 확인 방법 (How to Run)

**방법 A (브라우저 콘솔 확인)**: [01_hello-js.html](<01_hello-js.html>) 파일을 열고 F12 개발자 도구의 **Console(콘솔)** 탭에서 출력 내용을 확인합니다.
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

<!-- pdf-til-supplement:start -->
## TIL 부연 설명 — PDF와 연결하기

기존 실습 내용을 이해하기 위한 PDF 기반 부연 설명이다. 아래 예시는 개념을 설명하기 위한 것이며, 이 프로젝트에서 실행해 관찰한 결과와는 구분한다. 페이지 번호는 표지를 포함한 PDF 순서다.

함께 읽을 파일: [01_hello-js.html](<01_hello-js.html>) · [01_script.js](<01_script.js>) · [02_syntax.js](<02_syntax.js>)

### HTML 구조가 화면 변경으로 이어지는 과정

브라우저는 HTML을 읽어 DOM 객체 트리를 만든다. querySelector로 얻는 것은 HTML 문자열이 아니라 현재 문서 안의 요소 참조이며, 찾지 못하면 null이다. classList로 상태를 바꾸면 표현 방식은 CSS가 담당하고, textContent로 값을 넣으면 문자열을 HTML 태그로 해석하지 않는다.

**예시로 이해하기:** 카드 목록을 만든다고 가정하면 데이터 배열 → createElement로 요소 생성 → textContent로 제목 지정 → 부모에 append 순서로 생각할 수 있다. 사용자 입력을 그대로 innerHTML에 넣는 방식은 피한다. HTML·CSS 실습에서는 먼저 정적인 구조를 이해한 뒤 이 과정을 동적 화면의 확장으로 읽는다.

근거: 161-1 Document Object Model — [4쪽](<../260629_ex/새 폴더/5-27/161-1_Document_Object_Model.pdf#page=4>) · [6쪽](<../260629_ex/새 폴더/5-27/161-1_Document_Object_Model.pdf#page=6>) · [14쪽](<../260629_ex/새 폴더/5-27/161-1_Document_Object_Model.pdf#page=14>) · [18쪽](<../260629_ex/새 폴더/5-27/161-1_Document_Object_Model.pdf#page=18>)

### 콜백이 곧 비동기는 아니다

콜백은 다른 함수에 전달하는 함수라는 역할을 뜻한다. 배열 순회처럼 지금 호출할 수도 있고 타이머처럼 나중에 호출할 수도 있다. 비동기 콜백은 현재 호출 스택이 끝난 뒤 실행되므로 setTimeout의 지연이 0이어도 바로 다음 줄보다 먼저 실행되지 않는다.

**예시로 이해하기:** “시작 출력 → 0ms 타이머 등록 → 끝 출력”에서는 시작·끝이 먼저 보이고 타이머 출력이 나중에 나타난다. 타이머 등록을 감싼 try/catch는 나중에 실행되는 콜백 내부의 예외를 잡지 못하므로 실제 실패하는 실행 경로에서 처리해야 한다.

근거: 162-1 JavaScript Callback — [8쪽](<../260629_ex/새 폴더/5-29/162-1_JavaScript_Callback.pdf#page=8>) · [9쪽](<../260629_ex/새 폴더/5-29/162-1_JavaScript_Callback.pdf#page=9>) · [12쪽](<../260629_ex/새 폴더/5-29/162-1_JavaScript_Callback.pdf#page=12>) · [21쪽](<../260629_ex/새 폴더/5-29/162-1_JavaScript_Callback.pdf#page=21>) · [26쪽](<../260629_ex/새 폴더/5-29/162-1_JavaScript_Callback.pdf#page=26>)

### Promise로 결과와 실패를 연결하기

Promise는 아직 준비되지 않은 결과를 값처럼 전달하게 해 준다. then에서 다음 비동기 작업의 Promise를 반환해야 뒤 단계가 그 완료를 기다린다. async 함수는 Promise를 반환하며 await는 그 함수의 후속 실행을 늦추지만 브라우저 전체를 멈추지는 않는다.

**예시로 이해하기:** 프로필을 받은 뒤 그 ID로 게시글을 조회하는 작업은 순서가 필요하다. 서로 독립적인 여러 프로필은 Promise.all로 모을 수 있지만 하나가 실패하면 전체 결과가 거절된다. 각 작업의 성공·실패가 모두 필요하면 allSettled의 결과를 각각 확인한다.

근거: 162-2 JavaScript Promise — [6쪽](<../260629_ex/새 폴더/5-29/162-2_JavaScript_Promise.pdf#page=6>) · [11쪽](<../260629_ex/새 폴더/5-29/162-2_JavaScript_Promise.pdf#page=11>) · [14쪽](<../260629_ex/새 폴더/5-29/162-2_JavaScript_Promise.pdf#page=14>) · [19쪽](<../260629_ex/새 폴더/5-29/162-2_JavaScript_Promise.pdf#page=19>) · [21쪽](<../260629_ex/새 폴더/5-29/162-2_JavaScript_Promise.pdf#page=21>)

<!-- pdf-til-supplement:end -->
