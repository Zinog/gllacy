let buttonSearch = document.querySelector('.user-button-search');
let popoverSearch = document.querySelector('.popover-search');

/*buttonSearch.addEventListener('click', function (evt) {
  popoverSearch.classList.add('popover-open');
});*/
buttonSearch.onclick = function() {
  popoverSearch.classList.add('popover-open');
};

let buttonCatalog = document.querySelector('.navigation-link-svg-arrow');
let popoverCatalog = document.querySelector('.popover-catalog');

buttonCatalog.onclick = function(event) {
  evt.preventDefault();
  popoverCatalog.classList.add('popover-open');
};

let buttonEnter = document.querySelector('.navigation-item-user');
let popoverEnter = document.querySelector('.popover-enter');

buttonEnter.onclick = function() {
  popoverEnter.classList.add('popover-open');
};
