import Card from "./card.js";
import FormValidator from "./FormValidator.js";

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

const page = document.querySelector('.page');
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

function initializeCards(initialCards){
  const cardsContainer = document.querySelector('.cards');
  initialCards.forEach(function(initialCard){
    const newCard = new Card(initialCard, ".cards__item");
    const cardElement = newCard.generateCard();
    cardsContainer.append(cardElement);
  });
}

function initalizeFormValidation(){
  const data = {
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "form__input_type_error",
    buttonInactiveClass: "button__inactive",
    errorClass: "form__error_visible",
    inputErrorClassActive: "form__input-error_active"
  } ;
  const editForm = new FormValidator(data,".popup__form-edit")
  editForm.enableValidation();
  const addForm = new FormValidator(data,".popup__form-add")
  addForm.enableValidation();
}


initializeCards(initialCards);
initalizeFormValidation()
