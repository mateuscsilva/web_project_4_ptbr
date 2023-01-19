const page = document.querySelector('.page');
const likeButtons = document.querySelectorAll('.cards__like-button');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popupWindow = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');

function clickLikeButton(){
  this.classList.add("cards__like-button-clicked");
}

function openPopupWindow(){
  page.classList.add('page__semitransparent');
  popupWindow.classList.add('popup__opened');
  const nameInput = document.querySelector('.popup__name');  
  const jobInput = document.querySelector('.popup__about');
  const name = document.querySelector('.profile__name');
  const job = document.querySelector('.profile__work');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function closePopupWindow(){
  popupWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector('.popup__name');  
  const jobInput = document.querySelector('.popup__about');
  const name = document.querySelector('.profile__name');
  const job = document.querySelector('.profile__work');
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupWindow.classList.remove('popup__opened');
}

likeButtons.forEach(element => {
  element.addEventListener("click", clickLikeButton);
});

editButton.addEventListener("click", openPopupWindow);
closeButton.addEventListener("click", closePopupWindow);
formElement.addEventListener("submit", handleProfileFormSubmit); 