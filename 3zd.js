// Получение ссылки на необходимые элементы DOM
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideIndicator = document.getElementById('slideIndicator');

// Начальные значения
let currentIndex = 0;
const totalSlides = slides.length;

/**
 * Обновление отображение слайдера: показывает текущее изображение
 * и обновляет индикатор
 * @param {number} index - Индекс текущего слайда
 */
function updateSlide(index) {
  // Прячем все изображения
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Показываем текущее изображение
  slides[index].classList.add('active');

  // Обновляем индикатор
  slideIndicator.textContent = `Изображение ${index + 1} из ${totalSlides}`;
}

/**
 * Переключение на предыдущий слайд с зацикливанием
 */
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  updateSlide(currentIndex);
}

/**
 * Переключение на следующий слайд с зацикливанием
 */
function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSlide(currentIndex);
}

// Добавление обработчика событий на кнопки навигации
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Отображение первого слайда при загрузке страницы
updateSlide(currentIndex);
