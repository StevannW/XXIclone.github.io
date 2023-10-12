//Navbar hamburger
const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const close = document.querySelector('.nav-links i');
menu.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
close.addEventListener('click', function () {
  nav.classList.remove('slide');
});
//Slider gambar
const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  loop: true,
});
//Mengambil data film dari json
fetch('film.json')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((film) => {
      const films = `<div class="col">
       <div class="card h-100">
        <img src="${film.poster_url}" class="card-img-top" alt="..." />
       <div class="card-body">
           <h5 class="card-title"><strong>${film.title}</strong></h5>
           <div class ="info-container h-100">
           <p><strong>2D</strong></p>
           <p><strong>${film.age_rating}</strong></p>
           </div>
         </div>
       </div>
     </div>`;
      document.querySelector('.row').insertAdjacentHTML('beforeend', films);

      const button = document.querySelectorAll('card-img-top');
      button.forEach((btn) => {
        btn.addEventListener('click', function () {
          console.log(this);
        });
      });
    });
  });
