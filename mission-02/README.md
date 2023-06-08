# 🦁멋쟁이사자처럼 프론트엔드스쿨 6기 
## 💎 Mission-02 로그인 박스 만들기

![mission-02](https://github.com/GwonH/home-work/assets/130988491/99e08e73-0c6f-4400-9d92-51783e47daab)

<br>
<br>

## 📑
```html
<div class="login">
  <h1>로그인</h1>
  <div class="login__innerBox">
    <form class="loginForm" action="/">
      <fieldset>
        <legend>로그인 폼</legend>

```

- 모든 로그인 요소를 담을 div(class="login")를 만들고 거기에 box-shadow를 주었습니다.
- legend 요소는 화면상에 출력되지 않도록 했습니다. 


- div(class="login")내부에 div(class="login__innerBox")를 만들어 margin-top으로 h1과 간격을 조절하고, form과 div(class="loginForm__lower")를 묶는 용도로 사용했습니다.
  
<br>


```css
  .loginForm__upper {
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  position: relative;
}

.idpw__box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}
```


- form내부에 아이디와 비밀번호를 묶는 div(class="idpw")와 button 요소를 div(class="loginForm__upper")로 묶어서 각각 flexible box로 배치 방향을 조정하였습니다.  
<br>

```css
  .loginForm__upper::after {
  content: "";
  position: absolute;
  width: 204px;
  border-top: 1px solid #ccc;
  top: 69px;
}
```
- 가상 요소 선택자를 이용해 박스 밑에 밑줄을 만들고 top으로 위치값을 조정했습니다.

