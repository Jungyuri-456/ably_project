window.onload = function () {
    var swiper = new Swiper(".addSwiper", {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 0,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper(".myPicks", {
        loop: true, // 무한 루프
        slidesPerView: 4, // 한 번에 보여줄 슬라이드 수
        spaceBetween:4, // 슬라이드 간 여백
        slidesPerGroup: 2,
        centeredSlides: true, // 중앙 정렬
        pagination: {
          el: ".swiper-pagination", // 페이지네이션 요소
          clickable: true, // 페이지네이션 클릭 가능
        },
        navigation: {
          nextEl: ".swiper-button-next", // 다음 버튼 클래스
          prevEl: ".swiper-button-prev", // 이전 버튼 클래스
        },

      });
    
  };
  