import React, { useState, useEffect } from "react";
import "../styles/Footer.scss";
import logo from "../images/logo-bookmark-footer.svg";
import faceBookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import iconError from "../images/icon-error.svg";

export default function Footer() {
  /* 
    Odliczanie "Already Joined", spadnie do 0 w ciągu 20 sekund od wejścia na stronę
  */
  const [count, setCount] = useState(35000);
  const duration = 20000; // 20 sekund
  const interval = 100; // Interwał aktualizacji (co 0.1 sekundy)

  useEffect(() => {
    const steps = duration / interval; // Liczba kroków
    const stepValue = count / steps; // Wartość każdego kroku

    const intervalId = setInterval(() => {
      setCount((prevCount) => Math.max(prevCount - stepValue, 0));
    }, interval);
    // Czyszczenie interwału po zakończeniu komponentu
    return () => clearInterval(intervalId);
  }, []); // Efekt zależny tylko od montażu komponentu

  /* 
    Walidacja maila
  */

  const [emailError, setEmailError] = useState(true);
  const [emptyForm, setEmptyFrom] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emptyForm && emailError === true) {
      //W przyszłości wysłanie endpointa
      console.log("Wysłano");
    } else {
      setEmailError(false);
    }
  };

  const handleChangeEmail = (e) => {
    let inputValue = e.target.value;

    //Jeśli jest wpisywana wartość do inputa
    if (inputValue.length > 0) {
      setEmptyFrom(false); //gdy coś użytkownik wpisuje input już nie jest pusty
      const emailValidator =
        /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/.test(inputValue); //walidacja
      setEmailError(emailValidator);
    } else {
      //Jeśli jest pusty
      setEmailError(true);
      setEmptyFrom(true);
    }
  };

  return (
    <footer className="footerContainer">
      <div className="newsletterContainer">
        <div className="newsletterInformationContainer">
          <div className="newsletterInformationContainer__joinedInfo">
            <span
              className={`newsletterInformationContainer__counter ${
                count === 0 && "newsletterInformationContainer__counter--reset"
              }`}
            >
              {Math.round(count)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
            <span
              className={`newsletterInformationContainer__joined ${
                count === 0 && "newsletterInformationContainer__joined--reset"
              }`}
            >
              already joinded
            </span>
          </div>
          <h2 className="newsletterInformationContainer__heading">
            Stay up-to-date with what we’re doing
          </h2>
        </div>
        <div className="newsletterFormContainer">
          <form
            className="newsletterFormContainer__form"
            action=""
            onSubmit={handleSubmit}
          >
            <div
              className={`newsletterFormContainer__formGroup ${
                !emailError && "newsletterFormContainer__formGroup--error"
              }`}
            >
              <div
                className={`newsletterFormContainer__formInputContainer ${
                  !emailError &&
                  "newsletterFormContainer__formInputContainer--error"
                }`}
              >
                <label htmlFor="email"></label>
                <input
                  className={`newsletterFormContainer__formInput ${
                    !emailError && "newsletterFormContainer__formInput--error"
                  }`}
                  onChange={handleChangeEmail}
                  placeholder="Enter your email address"
                />
              </div>

              {!emailError && (
                <span className="newsletterFormContainer__error">
                  Whoops, make sure it's an email
                </span>
              )}
            </div>
            <button className="newsletterFormContainer__button" type="submit">
              Contact Us
            </button>
          </form>
        </div>
      </div>
      <div className="footerMenuContainer">
        <div className="logoContainer">
          <a href="#">
            <img src={logo} alt="bookmarklogo" />
          </a>
        </div>
        <div className="linksContainer">
          <ul className="linksContainer__itemList">
            <li className="linksContainer__item">
              <a className="linksContainer__link" href="/">
                Features
              </a>
            </li>
            <li className="linksContainer__item">
              <a className="linksContainer__link" href="/">
                Pricing
              </a>
            </li>
            <li className="linksContainer__item">
              <a className="linksContainer__link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="socialContainer">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socialContainer__icon"
              src={faceBookIcon}
              alt="facebook"
            />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socialContainer__icon"
              src={twitterIcon}
              alt="twitter"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
