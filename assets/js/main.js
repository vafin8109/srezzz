'use strict'

let menuElems = document.querySelectorAll('.menu__elem');

menuElems.forEach(menuElem => {
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu__btn');

    menuElem.addEventListener('mouseenter', function () {
        submenu.classList.add('active')
        btn.classList.add('active')
    })

    menuElem.addEventListener('mouseleave', function () {
        submenu.classList.remove('active')
        btn.classList.remove('active')
    })
})

// end menu


//slider start

"use strict";
let sliderBtn = document.querySelector('.comment-button');
let sliderNav = document.querySelector('.slider__nav');
let sliderImages = document.querySelector('.slider__images');
let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

sliderBtn.addEventListener('click', function (event) {
    let targetArrow = event.target.closest('.slider__arrow');
    if (!targetArrow) return;

    let currentActiveImage = document.querySelector('.slider__item.active');
    let currentActiveIndex = sliderItems.indexOf(currentActiveImage);

    currentActiveImage.classList.remove('active');
    document.querySelector('.slider__dot.active').classList.remove('active');

    changeActive(targetArrow, currentActiveIndex);

    let newActiveImage = document.querySelector('.slider__item.active');
    let newActiveIndex = sliderItems.indexOf(newActiveImage);

    scrollSlider(newActiveIndex);
})
function scrollSlider(index) {
    sliderImages.style.transform = `translateX(${-100 * index}%)`
}
function changeActive(arrow, currentIndex) {
    if (arrow.classList.contains('left')) {
        if (currentIndex == 0) {
            sliderItems.at(-1).classList.add('active');
            sliderDots.at(-1).classList.add('active');
        } else {
            sliderItems[currentIndex - 1].classList.add('active');
            sliderDots[currentIndex - 1].classList.add('active');
        }
    } else {
        if (currentIndex == sliderItems.length - 1) {
            sliderItems[0].classList.add('active');
            sliderDots[0].classList.add('active');
        } else {
            sliderItems[currentIndex + 1].classList.add('active');
            sliderDots[currentIndex + 1].classList.add('active');
        }
    }
}

sliderNav.addEventListener('click', function (event) {
    let targetDot = event.target.closest('.slider__dot');
    if (!targetDot) return;

    if (targetDot.classList.contains('active')) return;

    document.querySelector('.slider__dot.active').classList.remove('active');
    targetDot.classList.add('active');
    document.querySelector('.slider__item.active').classList.remove('active');

    sliderItems[targetDot.dataset.index].classList.add('active');
    scrollSlider(targetDot.dataset.index);
})

//slider end

// TABS start

let tabBtns = document.querySelectorAll('.but')
let tabTexts = document.querySelectorAll('.cards')

tabBtns.forEach((item, index) => {
    item.addEventListener('click', function () {
        document.querySelector('.but.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.cards.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})

// TABS end

// IntersectionObserver start

let phone = document.querySelector(".phone");
let faq = document.querySelector(".faq");

let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                phone.classList.add("show");
            } else {
                phone.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.5,
    }
);

observer.observe(faq);

// IntersectionObserver end
const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card => {
    const btn = card.querySelector('.btn_faq');
    const text = card.querySelector('.card_item p');

    card.addEventListener('click', () => {
        card.classList.toggle('open');
        btn.textContent = card.classList.contains('open') ? '×' : '+';
    });
});


// modal

var modal = document.getElementById("modal");
var span = document.getElementById("closeModal");

function openModal() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

setTimeout(openModal, 3000);