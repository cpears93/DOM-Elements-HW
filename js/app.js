document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const favouriteSportsStarsItem = createfavouriteSportsStarsItem(event.target);
  const favouriteSportsStars = document.querySelector('#favourite-sports-stars');
  favouriteSportsStars.appendChild(readingListItem);

  event.target.reset();
}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  favouriteSportsStarsItem.classList.add('favourite-sports-star-item');

  const name = document.createElement('h2');
  title.textContent = form.name.value;
  favouriteSportsStarsItem.appendChild(name);

  const age = document.createElement('h3');
  author.textContent = form.age.value;
  favouriteSportsStarsItem.appendChild(age);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  readingListItem.appendChild(sport);

  return favouriteSportsStarsItem;
}

const handleDeleteAllClick = function (event) {
  const favouriteSportsStars = document.querySelector('#favourite-sports-stars-list');
  favouriteSportsStars.innerHTML = '';
}
