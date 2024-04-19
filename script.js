// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')

})

// Typing Effect

let typed = new Typed('.auto-input',{
    strings:['Graphic Designer', 'Freelancer!', 'UI/UX Designer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
})


//Certificate effect
$(document).ready(function () {
    $(".slider-img").on("click", function () {
      $(".slider-img").not(this).removeClass("active");
      $(this).toggleClass("active");
    });
  });


//Active Link State On Scrool

let navLinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')
window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});


//Carousel

const container = document.querySelector(".card_container");
const cards = document.querySelectorAll(".card");

document.getElementById("left").addEventListener("click", function() {
  toPrevious()
})

document.getElementById("right").addEventListener("click", function() {
  toNext()
})

let current = 0;
let prev = 1;
let next = 2;

const toPrevious = () => {

  if (current > 0) {
    toSlide(current - 1)
  } else {
    toSlide(cards.length - 1)
  }
}

const toNext = () => {

  if (current < cards.length - 1) {
    toSlide(current + 1)
  } else {
    toSlide(0)
  }
}

const toSlide = number => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (const element of cards) {
    element.classList.remove("active");
    element.classList.remove("prev");
    element.classList.remove("next");
  }

  if (next == cards.length) {
    next = 0;
  }

  if (prev == -1) {
    prev = cards.length - 1;
  }

  cards[current].classList.add("active");
  cards[prev].classList.add("prev");
  cards[next].classList.add("next");
}

