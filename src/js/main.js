$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        dots: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

const change_theme = document.querySelector(".change_theme");

change_theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
