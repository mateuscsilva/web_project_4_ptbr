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
    newCard.querySelector('.cards__picture-button').addEventListener("click", openPicture);
    cardsContainer.append(newCard);
  });
}

function addCard(card){
  const cardsContainer = document.querySelector('.cards');
  const cardTemplate = document.querySelector("#cards__template").content;
  const newCard = cardTemplate.querySelector('.cards__item').cloneNode(true);
  newCard.querySelector('.cards__picture').src = card.link;
  newCard.querySelector('.cards__picture').alt = card.name;
  newCard.querySelector('.cards__text').textContent = card.name;
  newCard.querySelector('.cards__delete-button').addEventListener("click", clickDeleteButton);
  newCard.querySelector('.cards__picture-button').addEventListener("click", openPicture);
  cardsContainer.prepend(newCard);

}


initializeCards(initialCards);

const page = document.querySelector('.page');
const likeButtons = document.querySelectorAll('.cards__like-button');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-edit-button');
const closeButtonAdd = document.querySelector('.popup__close-add-button');
const closeButtonImage = document.querySelector('.popup__close-image-button');
const popupWindow = document.querySelector('.popup-edit');
const popupAddWindow = document.querySelector('.popup-add');
const popupImage = document.querySelector('.popup-image');
const formElement = document.querySelector('.popup__form');
const formAddElement = document.querySelector('.popup__form-add');
const deleteButtons = document.querySelectorAll('.cards__delete-button');


function clickLikeButton(){
  this.classList.toggle("cards__like-button-clicked");
}

function clickDeleteButton(evt){
  evt.target.closest('.cards__item').remove();
}

function openPopupWindow(){
  setTimeout(() => {
    page.classList.add('page__semitransparent');
    popupWindow.classList.add('popup__opened');
    const nameInput = document.querySelector('.popup__name');  
    const jobInput = document.querySelector('.popup__about');
    const name = document.querySelector('.profile__name');
    const job = document.querySelector('.profile__work');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
  }, 250);
  
}

function openAddPopupWindow(){
  setTimeout(() => {
    page.classList.add('page__semitransparent');
    popupAddWindow.classList.add('popup__opened');
  }, 250);
  
}

function openPicture(evt){
  let displayImage = document.querySelector('.popup__display-image');
  let popupText = document.querySelector('.popup__text');
  popupText.textContent = evt.target.alt;
  displayImage.src = evt.target.src;
  displayImage.alt = evt.target.alt;
  page.classList.add('page__semitransparent');
  popupImage.classList.add('popup__opened');
}

function closePopupWindow(){
  popupWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}

function closeAddPopupWindow(){
  popupAddWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}

function closePopupImage(){
  popupImage.classList.remove('popup__opened');
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

function handleLocationFormSubmit(evt) {
  
  evt.preventDefault();
  const titleInput = document.querySelector('.popup__location');
  const linkInput = document.querySelector('.popup__link');
  addCard({name: titleInput.value, link: linkInput.value});
  popupAddWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}

likeButtons.forEach(element => {
  element.addEventListener("click", clickLikeButton);
});

deleteButtons.forEach(element => {
  element.addEventListener("click", clickDeleteButton);
});

document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(".popup");
  const popupEdit = document.querySelector(".popup-edit")
  const popupAdd = document.querySelector(".popup-add")
  if (!isClosest && popupEdit.classList.contains("popup__opened")) {
    popupEdit.classList.remove("popup__opened");
    page.classList.remove('page__semitransparent');
  }
  if (!isClosest && popupAdd.classList.contains("popup__opened")) {
    popupAdd.classList.remove("popup__opened");
    page.classList.remove('page__semitransparent');
  }
});

editButton.addEventListener("click", openPopupWindow);
addButton.addEventListener("click", openAddPopupWindow);
closeButton.addEventListener("click", closePopupWindow);
closeButtonAdd.addEventListener("click", closeAddPopupWindow);
formElement.addEventListener("submit", handleProfileFormSubmit);
formAddElement.addEventListener("submit", handleLocationFormSubmit);
closeButtonImage.addEventListener("click", closePopupImage);