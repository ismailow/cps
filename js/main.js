const brands = document.querySelectorAll('.brands__item');
const brandsMoreBtn = document.querySelector('.brands__more');
let winwodWidth = window.innerWidth;

if (winwodWidth < 768) {
    const swiper = new Swiper('.swiper', {
        width: 245,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            595: {
                // slidesPerView: 2,
                slidesPerGroup: 2
            }
        },
    });
}

if (winwodWidth > 767 && winwodWidth < 1119) {
    for (let i = 0; i < brands.length; i++) {
        if (i > 5) {
            brands[i].classList.add('brands__item--hidden')
        }
    }
} else {
    for (let i = 0; i < brands.length; i++) {
        if (i > 7) {
            brands[i].classList.add('brands__item--hidden')
        }
    }
}

brandsMoreBtn.addEventListener('click', () => {
    brands.forEach(item => {
        item.classList.remove('brands__item--hidden');
        brandsMoreBtn.style.display = 'none';
    })
})