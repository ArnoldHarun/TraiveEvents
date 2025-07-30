let slides = document.querySelectorAll('.slide');
let current = 0;
let timer;

function showSlide(idx) {
  slides.forEach((s, i) => s.classList.toggle('active', i === idx));
  current = idx;
}

function nextSlide() {
  showSlide((current + 1) % slides.length);
}

function prevSlide() {
  showSlide((current - 1 + slides.length) % slides.length);
}

document.querySelector('.arrow.right').onclick = () => {
  nextSlide();
  resetTimer();
};
document.querySelector('.arrow.left').onclick = () => {
  prevSlide();
  resetTimer();
};

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 4000);
}

resetTimer();