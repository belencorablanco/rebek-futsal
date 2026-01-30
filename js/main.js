// AOS (si está cargado en la página)
if (window.AOS) {
  AOS.init({
    duration: 1000,
    once: true
  });
}

// Swiper (solo si existe el contenedor)
if (window.Swiper && document.querySelector(".cursosSwiper")) {
  new Swiper(".cursosSwiper", {
    slidesPerView: 1,
    loop: false,
    autoHeight: true
  });
}
