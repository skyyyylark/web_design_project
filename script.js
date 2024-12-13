// Слайдер
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const carousel = document.querySelector('.carousel');

    const slideWidth = slides[0].offsetWidth; // Учитываем текущую ширину слайда

    carousel.style.transform = `translateX(-${index * slideWidth}px)`;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function resizeCarousel() {
    showSlide(currentSlide); // Обновляем слайды при изменении размера окна
}

// Событие для обновления карусели при изменении ширины окна
window.addEventListener('resize', resizeCarousel);

// Инициализация карусели
showSlide(currentSlide);
setInterval(nextSlide, 8000); // Автопереключение


document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); 
        const dropdown = button.parentElement;
        const content = dropdown.querySelector('.dropdown-content');
        const isOpen = dropdown.classList.contains('open');

        document.querySelectorAll('.dropdown.open').forEach(openDropdown => {
            openDropdown.classList.remove('open');
            const openContent = openDropdown.querySelector('.dropdown-content');
            closeDropdownContent(openContent);
            resetButtonStyles(openDropdown.querySelector('.dropdown-button'));
        });

        if (!isOpen) {
            dropdown.classList.add('open');
            openDropdownContent(content);
            // Применяем стили для кнопки
            setButtonStyles(button);
        }
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(openDropdown => {
        openDropdown.classList.remove('open');
        const openContent = openDropdown.querySelector('.dropdown-content');
        closeDropdownContent(openContent);
        resetButtonStyles(openDropdown.querySelector('.dropdown-button'));
    });
});

function openDropdownContent(content) {
    content.style.display = 'block'; 
    let height = 0;
    const targetHeight = content.scrollHeight; 

    function animateOpen() {
        height += 10; 
        content.style.height = height + 'px';
        if (height < targetHeight) {
            requestAnimationFrame(animateOpen);
        } else {
            content.style.height = 'auto'; 
            content.style.opacity = '1'; 
        }
    }

    animateOpen();
}

function closeDropdownContent(content) {
    let height = content.scrollHeight;

    function animateClose() {
        height -= 10; 
        content.style.height = height + 'px';
        if (height > 0) {
            requestAnimationFrame(animateClose);
        } else {
            content.style.display = 'none'; 
            content.style.height = '0'; 
        }
    }

    animateClose();
}

function setButtonStyles(button) {
    button.style.borderRadius = '25px';
    button.style.padding = '5px';
    button.style.backgroundColor = '#ff7373';
}

function resetButtonStyles(button) {
    button.style.borderRadius = '';
    button.style.padding = '';
    button.style.backgroundColor = '';
}


var modal = document.getElementById("signUpModal");
var btn = document.querySelector(".sign-up");
var closeBtn = document.querySelector(".close-btn");
var backBtn = document.querySelector(".back-to-website");
var carouselControls = document.querySelector(".carousel-controls");
var burgerContainer = document.querySelector(".burger-container");

btn.onclick = function() {
  modal.style.display = "block";
  carouselControls.style.visibility = "hidden";
  burgerContainer.style.visibility = "hidden";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
  carouselControls.style.visibility = "visible";
  burgerContainer.style.visibility = "visible";
}

backBtn.onclick = function() {
  modal.style.display = "none";
  carouselControls.style.visibility = "visible";
  burgerContainer.style.visibility = "visible";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    carouselControls.style.visibility = "visible";
    burgerContainer.style.visibility = "visible";
  }
}



document.getElementById('burger-menu').addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('menu').classList.toggle('open');
});

document.querySelectorAll('.menu button').forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById('burger-menu').classList.remove('open');
    document.getElementById('menu').classList.remove('open');

  });
});
