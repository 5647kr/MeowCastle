# MeowCastle



## 0. 목차

1.  [프로젝트 소개](#1-프로젝트-소개)
2.  [기술 및 개발환경](#2-기술-및-개발환경)
3.  [기술 스택](#3-기술-스택)
4.  [코딩 컨벤션](#4-코딩-컨벤션)
5.  [미래 개선 방향](#5-미래래-개선-방향)
6.  [성과 및 느낀 점](#6-성과-및-느낀-점)
<br>

## 1. 프로젝트 소개
> - MeowCastle, 반려묘를 위한 맞춤 제작 캣타워 판매 웹페이지입니다.
> - 모바일, 태블릿, 노트북, pc등 다양한 플랫폼에서 유연하게 동작하는 반응형을 제공합니다.
<br>배포 URL: https://5647kr.github.io/MeowCastle/
<br>

## 2. 기술 개발 구현

### 1. 상품 이미지 무한 슬라이드
<br>
상품 이미지를 좌측 방향 또는 우측 방향으로 무한히 슬라이드 하여 다양한 제품을 보여줍니다.
<br>

```
  productEvent(targetEl, direction) {
    const target = this.productSection.querySelector(targetEl);
    const firstLi = target.querySelector("li");
    let slideWidth = 0;
    
    if (window.innerWidth < 481) {
      slideWidth = firstLi.offsetWidth + 20;
    } else if (481 <= window.innerWidth && window.innerWidth <= 768) {
      slideWidth = firstLi.offsetWidth + 40;
    } else if (769 <= window.innerWidth && window.innerWidth <= 1024) {
      slideWidth = firstLi.offsetWidth + 40;
    } else if (1025 <= window.innerWidth && window.innerWidth <= 1460) {
      slideWidth = firstLi.offsetWidth + 60;
    } else {
      slideWidth = firstLi.offsetWidth + 60;
    }

    const animation = target.animate([
      {left: direction === "left" ? `-${slideWidth}px` : `${slideWidth}px`}
    ], {
      duration: 4000,
      easing: "linear"

    })

    animation.onfinish = () => {
      if(direction === "left") {
        target.appendChild(firstLi)
      } else {
        const lastLi = target.querySelector("li:last-child");
        target.insertBefore(lastLi, target.firstChild);
      }
      this.productEvent(targetEl, direction);
    }
  }
```
<br>

### 2. 컨텐츠 등장 이벤트
<br>
요즘 웹페이지에서 보이는 컨텐츠 등장시 나타나는 이벤트를 IntersectionOberserver를 통해 기능구현 하였습니다.
<br>

```
  makeObserver = new IntersectionObserver((e) => {
    e.forEach((li) => {
      if(li.isIntersecting) {
        li.target.style.opacity = 1;
        li.target.style.transform = "translateX(0)";
      } else {
        li.target.style.opacity = 0;
        li.target.style.transform = "translateX(-50px)";
      }
    })
  })
```
<br>

## 4. 기술 스택

<table>
  <tr>
    <td align="center" width="100px">사용 기술</td>
    <td width="800px">
      <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">&nbsp  
      <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">&nbsp 
      <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> &nbsp
    </td>
  </tr>
  <tr>
    <td align="center">기술 도구</td>
    <td>
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
      <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
    </td>
  <tr>
    <td align="center">디자인</td>
    <td>
      <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
    </td>
  </tr>
  <tr>
    <td align="center">IDE</td>
    <td>
      <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
  </tr>
</table>

<br>

## 5. 코딩 컨벤션

<br>

<detail>
  <table>
    <tr>
      <th>커밋 유형</th>
      <th>커밋 메세지</th>
      <th>의미</th>
    </tr>
    <tr>
      <td>✨</td>
      <td>Feat</td>
      <td>새로운 기능 추가</td>
    </tr>
    <tr>
      <td>🐛</td>
      <td>Fix</td>
      <td>버그 & 에러 수정</td>
    </tr>
    <tr>
      <td>📝</td>
      <td>File</td>
      <td>리드미 등 문서 수정, 라이브러리 설치</td>
    </tr>
    <tr>
      <td>🎨</td>
      <td>Style</td>
      <td>코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우</td>
    </tr>
    <tr>
      <td>🖌</td>
      <td>Design</td>
      <td>UI 디자인 변경</td>
    </tr>
    <tr>
      <td>🔨</td>
      <td>Refactor</td>
      <td>코드 리팩토링</td>
    </tr>
    <tr>
      <td>🤔</td>
      <td>Test</td>
      <td>테스트 코드, 리팩토링 테스트 코드 추가</td>
    </tr>
    <tr>
      <td>⚙</td>
      <td>Chore</td>
      <td>빌드 업무 수정, 패키지 매니저 수정</td>
    </tr>
    <tr>
      <td>🗒</td>
      <td>Rename</td>
      <td>파일명 혹은 폴더명 수정, 위치 옮기기</td>
    </tr>
    <tr>
      <td>🔥</td>
      <td>Remove</td>
      <td>파일 삭제</td>
    </tr>
  </table>
</detail>

<br>

## 6. 미래 개선 방향

<br>

### 1. 상세페이지
메인 페이지만 있기에 상세 페이지도 디자인하여 실제 캣타워 맞춤제작 판매사이트처럼 만들 계획을 하고 있습니다.

### 2. 코드 개선
기능 구현에 있어 조금 더 코드를 개선하고 싶은 마음이 있습니다. 반복되는 코드와 불필요한 코드를 개선하여 성능 최적화를 끌어올리고 싶다는 생각을 하고 있습니다.

<br>

## 7. 성과 및 느낀 점

<br>
해당 요소가 화면에 보이는 애니메이션을 추가해보는 프로젝트였다. 이로써 웹사이트에 생동감이 생길 수 있게 되었다. 다음엔 좀 더 다양한 이벤트를 추가할 계획을 가지고 있다.
