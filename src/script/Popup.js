export default class Popup{
  constructor(selector){
    this._selector = selector;
    this._container = document.querySelector(selector);
    this._page = document.querySelector('.page');
    this._closeButton = document.querySelector(selector).children[0];
  }

  open(){
    setTimeout(() => { 
      this._page.classList.add('page__semitransparent');
      this._container.classList.add('popup__opened');
    }, 50);
  }

  close(){ 
    this._page.classList.remove('page__semitransparent');
    this._container.classList.remove('popup__opened');
  }
  
  _handleEscClose(e){
    if(e.key === "Escape"){
      this.close();
    }
  }

  setEventListeners(){
    this._closeButton.addEventListener("click", (e) => {
      const isClosest = e.target.closest(this._selector);
      if (isClosest) {
        this.close();
      }
    });
    document.addEventListener("click", (e) => {
      const isClosest = e.target.closest(this._selector);
      if (!isClosest) {
        this.close();
      }
    });
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }
}