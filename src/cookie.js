import { COOKIE_CONSENT } from './app';

export default class CookieConsent {
  constructor(selector) {
    this.el = document.querySelector(selector);
    if (localStorage.getItem(COOKIE_CONSENT) !== "true" && this.el) {
      this.acceptBtn = this.el.querySelector('.cookie-consent__button');
      this.acceptBtn?.addEventListener('click', this.onAccept.bind(this));
    } else {
      this.el.classList.add('hide');
    }
  }
  accept() {
    localStorage.setItem(COOKIE_CONSENT, 'true');
    this.el.classList.add('hide');
    this.acceptBtn?.removeEventListener('click', this.onAccept.bind(this));
  }
}

