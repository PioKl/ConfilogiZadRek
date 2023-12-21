import React, { useEffect, useRef } from "react";
import "../styles/Questions.scss";
import arrowIcon from "../images/icon-arrow.svg";
export default function Questions() {
  const accordionRef = useRef(null);

  const accordions = [
    {
      id: 1,
      title: "What is Bookmark?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, architecto.",
    },
    {
      id: 2,
      title: "How can I request a new browser?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in animi, molestiae optio laudantium, aliquid fugit libero aspernatur architecto qui, dolores debitis ducimus illum dolore? Nam necessitatibus obcaecati facilis harum perspiciatis illo. Vitae repudiandae dolorem corporis saepe consequatur quaerat cumque explicabo molestias eos nostrum. Explicabo ab ea voluptates quos temporibus voluptatibus dignissimos atque tempore velit! Incidunt, reiciendis quis obcaecati possimus suscipit ab, deserunt alias animi aliquam in earum quos eius porro? Maxime nulla asperiores odio! Placeat aut, neque officiis, adipisci quas numquam impedit obcaecati illum, alias possimus pariatur a! Consequatur harum quasi quod dolorum fugit maiores soluta repellendus ipsum aut.",
    },
    {
      id: 3,
      title: "Is there a mobile app?",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iusto, amet!",
    },
    {
      id: 4,
      title: "What about other Chromium browsers?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odionulla possimus obcaecati hic cumque amet totam, labore placeat. Laudantium consequatur expedita nihil ipsam at porro!",
    },
  ];

  const toggleAccordion = (panelToActivate) => {
    const activeButton = panelToActivate.querySelector("button");
    const activePanel = panelToActivate.querySelector(".accordion-content");
    const activePanelIsOpened = activeButton?.getAttribute("aria-expanded");

    const activeTitle = panelToActivate.querySelector(".accordion-title");

    if (activePanelIsOpened === "true") {
      activeButton?.setAttribute("aria-expanded", "false");
      activePanel?.setAttribute("aria-hidden", "true");
      activeTitle?.classList.remove("accordion-title-open");
    } else {
      activeButton?.setAttribute("aria-expanded", "true");
      activePanel?.setAttribute("aria-hidden", "false");
      activeTitle?.classList.add("accordion-title-open");
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;

      // Sprawdź, czy 'target' jest elementem z klasą 'accordion-panel'
      const activePanel = target.closest(".accordion-panel");
      if (!activePanel) return;

      toggleAccordion(activePanel);
    };

    const accordionElement = accordionRef.current;

    if (accordionElement) {
      accordionElement.addEventListener("click", handleClick);
    }

    // Usuń nasłuchiwanie zdarzenia po odmontowaniu komponentu
    return () => {
      if (accordionElement) {
        accordionElement.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <section className="questionsContainer">
      <div className="questionsInfoContainer">
        <h3 className="questionsInfoContainer__heading">
          Frequently Asked Questions
        </h3>
        <p className="questionsInfoContainer__info">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <div className="wrapper">
        <div ref={accordionRef} className="accordion">
          {accordions.map((item, index) => (
            <div key={index} className="accordion-panel">
              <h3 id={`panel${item.id}-title`} className="accordion-title">
                <button
                  className="accordion-trigger"
                  aria-expanded="false"
                  aria-controls={`accordion${item.id}-content`}
                >
                  {item.title}
                </button>
                <img src={arrowIcon} alt="expand" />
              </h3>
              <div
                className="accordion-content"
                role="region"
                aria-labelledby={`panel${item.id}-title`}
                aria-hidden="true"
                id={`panel${item.id}-content`}
              >
                <div>
                  <p>{item.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="questionsButtonContainer">
        <a href="/">
          <button className="questionsButtonContainer__button">
            More Info
          </button>
        </a>
      </div>
    </section>
  );
}
