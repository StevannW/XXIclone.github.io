fetch('upcoming.json')
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
    });
  });

let search = () => {
  var searchValue = document.getElementById('search-item');
  var items = document.getElementsByClassName('card-title');
  for (var i = 0; i < items.length; i++) {
    items[i].parentNode.parentNode.parentNode.style.display = 'grid';
    if (!items[i].innerHTML.toLowerCase().includes(searchValue.value.toLowerCase())) {
      items[i].parentNode.parentNode.parentNode.style.display = 'none';
    }
  }
};
