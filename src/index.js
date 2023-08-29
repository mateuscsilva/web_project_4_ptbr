import "./page/index.css";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section";
import UserInfo from "./components/UserInfo";
import PopupWithForm from "./components/PopupWithForm";

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
const popupImage = document.querySelector('.popup-image');

const cardsContainer = new Section({
  item: initialCards, 
  renderer: (item)=>{
    const newCard = new Card(item, ".cards__item");
    const cardElement = newCard.generateCard();
    cardsContainer.addItem(cardElement);
  }},
  '.cards');
cardsContainer.renderer();


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

initalizeFormValidation()

let userInfo = new UserInfo({
  nameSelector: '.profile__name', 
  aboutSelector: '.profile__work'
});


const addForm = new PopupWithForm({
  formSelector: '.popup-add', 
  handleFormSubmit: (formData) => {
    const card = new Card(formData,
      ".cards__item");
    const cardElement = card.generateCard();
    cardsContainer.addItem(cardElement);
  }
});
addForm.setEventListeners();

const editForm = new PopupWithForm({
  formSelector: '.popup-edit', 
  handleFormSubmit: (formData) => {
    const name = document.querySelector('.popup__name');
    const about = document.querySelector('.popup__about');
    userInfo.setUserInfo({name: name.value, about: about.value});
  }
});
editForm.setEventListeners();


function openPopupWindow(){
  editForm._setInputValues(userInfo.getUserInfo());
  editForm.open();
}


function openAddPopupWindow(){
  addForm.open();
}


editButton.addEventListener("click", openPopupWindow);
addButton.addEventListener("click", openAddPopupWindow);