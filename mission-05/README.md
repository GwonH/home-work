# 🦁멋쟁이사자처럼 프론트엔드스쿨 6기 
## 💎 Mission-05 Sprite 활용
</br>

![misison-05](https://github.com/GwonH/home-work/assets/130988491/7451bb83-15c9-4a94-a98b-d8190293b07d)

</br>

# 📑 HTML
- section으로 전체 container를 잡았음.
- h2로 제목 지정.
- ol 태그로 인기 사이트의 의미있는 리스트 작성.
- a태그에 img태그를 넣어 함께 클릭될 수 있도록 작성.
</br>

# 🔖 CSS
- grid container .favorite에 gird 속성 적용.
- ol태그에 grid-area 속성으로 레이아웃 배치.
- li태그에 공통으로 주었던 .sprite 클래스에 background로 이미지 처리.
- 각 li의 고유한 class를 주고 sprite 이미지에 맞는 background-position 값을 주어 배치.
- counter-increment 속성으로 li 요소마다 일련 번호를 붙이고, favoriteRank__list::before의 속성 content: counter(number)에 그 값을 받아서 사용.