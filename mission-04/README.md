# 🦁멋쟁이사자처럼 프론트엔드스쿨 6기 
## 💎 Mission-04 Grid 활용
</br>

![mission-04](https://github.com/GwonH/home-work/assets/130988491/63967c72-a8d7-4f6d-ba8a-515f6a0336dd)

</br>

# 📑 HTML

- section을 grid container로 사용.
- h2 태그로 제목 지정.
- div.class="moreInfo"안의 img태그와 a태그를 이용해 페이지 이동 설정.
- div.class="fakeLine"에 height 1px줘서 선처럼 사용.
- div.class="article"로 figure, div="articleTxt"를 묶음.
  
</br>

# 🔖 CSS
- 전역 속성으로 font-size 설정.
- gird container에 display:gird 적용
- gird-template-columns:repeat(12, 1fr) => 12개의 열을 동일한 너비로 생성.
- grid-template-rows: auto => 유연하게 행 설정.
- .newsHeading 클래스에 margin: 0으로 h2의 user agent style제거 후, grid-area: 1 / 1 / 2 / 3;으로 위치 지정.
- .moreInfo에 display:flex로 plus아이콘과 위치 정렬. 
- .article은 flex를 이용, justify-content: space-between으로 간격 유지하여 정렬.
- .articleSubTxt 문단 정렬 위해 text-align: justify 사용.