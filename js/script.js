// swiper
var swiper = new Swiper(".product-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay:{
        delay:5000,
        disableOnInteraction: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      530: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      758: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

// redirects user to the products page with the recommendations and products with the best reviews
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let inputField = document.querySelector(".input-box input");
    let link = inputField.value.trim();

    if (link) {
        let encodedLink = encodeURIComponent(link);
            window.location.href = "https://nicolewang1206.github.io/Sweet-Finds/page%202.html";
    }
});
