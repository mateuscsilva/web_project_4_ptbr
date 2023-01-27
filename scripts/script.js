const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

function initializeCards(initialCards){
  const cardsContainer = document.querySelector('.cards');
  const cardTemplate = document.querySelector("#cards__template").content;
  initialCards.forEach(function(initialCard){
    const newCard = cardTemplate.querySelector('.cards__item').cloneNode(true);
    newCard.querySelector('.cards__picture').src = initialCard.link;
    newCard.querySelector('.cards__picture').alt = initialCard.name;
    newCard.querySelector('.cards__text').textContent = initialCard.name;
    cardsContainer.append(newCard);
  });
  
}

initializeCards(initialCards);

const page = document.querySelector('.page');
const likeButtons = document.querySelectorAll('.cards__like-button');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-edit-button');
const closeButtonAdd = document.querySelector('.popup__close-add-button');
const popupWindow = document.querySelector('.popup-edit');
const popupAddWindow = document.querySelector('.popup-add');
const formElement = document.querySelector('.popup__form');
const deleteButtons = document.querySelectorAll('.cards__delete-button');

function clickLikeButton(){
  this.classList.toggle("cards__like-button-clicked");
}

function clickDeleteButton(evt){
  evt.target.closest('.cards__item').remove();
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

function openAddPopupWindow(){
  page.classList.add('page__semitransparent');
  popupAddWindow.classList.add('popup__opened');
}

function closePopupWindow(){
  popupWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}

function closeAddPopupWindow(){
  popupAddWindow.classList.remove('popup__opened');
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
  page.classList.remove('page__semitransparent');
}

likeButtons.forEach(element => {
  element.addEventListener("click", clickLikeButton);
});

deleteButtons.forEach(element => {
  element.addEventListener("click", clickDeleteButton);
});

editButton.addEventListener("click", openPopupWindow);
addButton.addEventListener("click", openAddPopupWindow);
closeButton.addEventListener("click", closePopupWindow);
closeButtonAdd.addEventListener("click", closeAddPopupWindow);
formElement.addEventListener("submit", handleProfileFormSubmit); 
