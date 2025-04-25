

// Sidebar aç/kapa
document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    document.body.classList.add('sidebar-open');
});

document.querySelector('.sidebar-close').addEventListener('click', function() {
    document.body.classList.remove('sidebar-open');
});

document.querySelector('.sidebar-overlay').addEventListener('click', function() {
    document.body.classList.remove('sidebar-open');
});





// Slider Fonksiyonları
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Dot'lara tıklama eventi
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Otomatik geçiş
setInterval(nextSlide, 4000);

// İlk slide'ı göster
showSlide(0);



// Aktif sayfayı vurgula (script.js'nin en altına ekle)
document.querySelectorAll('.navbar-center a, .sidebar-menu a').forEach(link => {
    if(link.href === window.location.href) {
        link.classList.add('active');
    }
});

// SEKME DEĞİŞTİRME FONKSİYONU
function openTab(evt, tabName) {
    // Tüm tab içeriklerini gizle
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Tüm butonlardan active classını kaldır
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Seçilen tabı göster ve butonu aktif yap
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}