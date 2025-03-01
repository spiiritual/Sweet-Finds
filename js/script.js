// swiper
var swiper = new Swiper(".product-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

// takes user to page 2.html
document.getElementById("linkForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let userInput = document.getElementById("userInput").value;

    if (userInput.trim() !== "") {
        window.location.href = "page2.html";
    }
});
