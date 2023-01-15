let likeButtons = document.querySelectorAll('.cards__like-button');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popupWindow = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');

function clickLikeButton(){
  this.classList.add("cards__like-button-clicked");
}

function openPopupWindow(){
  popupWindow.classList.add('popup__opened');
  let nameInput = document.querySelector('.popup__name');  
  let jobInput = document.querySelector('.popup__about');
  let name = document.querySelector('.profile__name');
  let job = document.querySelector('.profile__work');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function closePopupWindow(){
  popupWindow.classList.remove('popup__opened');
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.popup__name');  
  let jobInput = document.querySelector('.popup__about');
  let name = document.querySelector('.profile__name');
  let job = document.querySelector('.profile__work');
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupWindow.classList.remove('popup__opened');
}

for(var i = 0; i < likeButtons.length; i++){
  likeButtons[i].addEventListener("click", clickLikeButton);
}

editButton.addEventListener("click", openPopupWindow);
closeButton.addEventListener("click", closePopupWindow);
formElement.addEventListener("submit", handleProfileFormSubmit); 