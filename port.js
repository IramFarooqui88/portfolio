var typed = new Typed(".text",{
    strings:["frontend developer","Algorithmic Ploblem Solver","Web Developer"],
    typeSpeed:70,
    backSpeed:70,
    backDelay:999,
    loop:true
})
const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
);

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    );
};

// Function to move to the next slide
const nextSlide = () => {
    counter++;
    if (counter < slides.length) {
        slideImage();
    } else {
        // Move to the first image without going through all the previous images
        slides.forEach((slide) => {
            slide.style.transition = "none";
            slide.style.transform = "translateX(0)";
        });

        // Force a reflow to apply the changes without animation
        void slides[0].offsetWidth;

        // Restore transitions for the next slides
        slides.forEach((slide) => {
            slide.style.transition = "";
        });

        counter = 1;
        slideImage();
    }
};

// Set interval to move to the next slide every 3 seconds (adjust the duration as needed)
setInterval(nextSlide, 3000);






document.addEventListener("DOMContentLoaded", function () {
    const softSkillItems = document.querySelectorAll('.softskill-item');

    softSkillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, 300 * index);
    });
});
