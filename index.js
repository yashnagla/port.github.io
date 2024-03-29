// ===============================================
// Creating a portfolio tabbed component
// ===============================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll("p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", function (e) {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => {
    curElem.classList.remove("p-btn-active");
  });

  p_btn_clicked.classList.add("p-btn-active");

  // To find the number in data attribute
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

// Swiper JS Code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// ===============================================
// Creating a Scroll To Top Section
// ===============================================

const navbar = document.querySelector(".navbar");

const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
  navbar.scrollIntoView({behavior: "smooth"});
};

scrollElement.addEventListener("click", scrollTop) 



// ===============================================
// Animate Number Section
// ===============================================

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);

    const intialNum = parseInt(curElem.innerText);
    // console.log(intialNum);

    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);

    if(intialNum < targetNumber) {
      curElem.innerText = intialNum + incrementNumber;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});