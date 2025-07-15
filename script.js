document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');

    let currentSlideIndex = 0;

    const autoSlideDelay = 5000;
    let autoSlideInterval;

      @param {number} index 
     
    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active'); 
        });
        dots.forEach(dot => {
            dot.classList.remove('active'); 
        });

        currentSlideIndex = (index + slides.length) % slides.length;

        slides[currentSlideIndex].classList.add('active'); 
        dots[currentSlideIndex].classList.add('active'); 
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            const nextIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(nextIndex);
        }, autoSlideDelay);
    }

    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval); 
    }
    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideTo = parseInt(event.target.dataset.slideTo) - 1;
            showSlide(slideTo); 
            stopAutoSlide(); 
            startAutoSlide(); 
        });
    });

    const sliderContainer = document.querySelector('.hero-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    showSlide(currentSlideIndex);
    startAutoSlide();
});

