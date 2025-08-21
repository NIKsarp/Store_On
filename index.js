// -------------------------------------
// createElement() Function Start

const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  element.className = className;

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

// createElement() Function End
// --------------------------------------------
// Card Start

const main = document.getElementsByClassName(`main`);

const card = (
  src = `src/shop_icon.png`,
  alt = `shopping-bag`,
  title = `shopping-bag`,
  price = `0`,
  text = `shopping-bag`
) => {
  const card = createElement(`article`, `card`);
  const figure = createElement(`figure`, `figure`, ` `);

  const figureImg = createElement(`img`, `figure-img card-img-top`);
  figureImg.src = src;
  figureImg.alt = alt;
  figureImg.title = title;

  const cardBody = createElement(`div`, `card__body`);
  const cardTitle = createElement(`h2`, `card__title`, title);

  const cardPrice = createElement(
    `small`,
    `card-price`,
    `₹ ${Number(price).toLocaleString()}`
  );

  const headingContent = createElement(`div`, `heading-content`);
  const cardText = createElement(`p`, `card__text`, text);
  const btn = createElement(`button`, `card-btn btn`, `buy`);
  const btn2 = createElement(`button`, `card-btn btn`, `add to cart`);
  // const //btnGroup = createElement('div', 'btn-group', [btn, btn2])
  const btnGroup = createElement(`div`, `btn-group`);

  // --------------------------------------------
  // Append elements
  main[0].appendChild(card);
  card.append(figure, cardBody);
  figure.appendChild(figureImg);
  cardBody.append(headingContent, cardText, btnGroup);
  headingContent.append(cardTitle, cardPrice);
  btnGroup.append(btn, btn2);

  return card;
};

// Card End
// -------------------------------------
// Card-group Start

card(
  `${String(`src/iphone15.png`)}`,
  `iphone15`,
  `iphone15`,
  71290,
  `iphone 15 and iPhone 15 Plus. Dynamic Island. 48MP Main camera with 2x Telephoto.`
);
card(
  `src/iphone14.png`,
  `iphone14`,
  `iphone14`,
  58999,
  `experience the future with the APPLE iPhone 14 in stunning Blue with 128 GB storage.`
);
card(
  `src/iphone13.png`,
  `iphone13`,
  `iphone13`,
  49300,
  `iphone 13. Super Retina XDR display; 15.4 cm / 6.1″ (diagonal) all‑screen OLED display;`
);
card(
  `src/camera.png`,
  `camera`,
  `camera`,
  10000,
  `a camera is an instrument used to capture and store images and videos.`
);
card(
  `src/headphone.png`,
  `headphone`,
  `headphone`,
  2300,
  `headphones const a single user listen to an audio source privately, in contrast to a loudspeaker.`
);
card(
  `src/watch.png`,
  `watch`,
  `watch`,
  999,
  `a watch is a portable timepiece intended to be carried or worn by a person.`
);
card(
  `src/plain-light-blue-t-shirt-mockup-template-with-view-front-and-back-isolated-on-transparent-background-generative-ai-png.png`,
  `shirt`,
  `blue shirt`,
  300,
  `a good t-shirt product description will help your sales process.`
);
card(`src/shop_icon.png`, `shopping-bag`, `title`, 360, `text`);
card();

// Card-group End
// -------------------------------------
// addBtn() Function Start

const addBtn = document.getElementById(`add`);

addBtn.addEventListener(`click`, (e) => {
  card();
});

// addBtn() Function End
// -------------------------------------
// btn click event Start

{
  const btn = document.getElementById(`btn`);

  btn.addEventListener(
    `click`,
    (e) => {
      window.scrollTo({
        top: 0,
        behavior: `smooth`,
      });
    },
    false
  );
}

window.addEventListener(`scroll`, () => {
  if (window.scrollY > 100) {
    btn.style.display = `block`;
    // let a = createElement('span', 'btn', '^')
  } else {
    btn.style.display = `none`;
  }
});

// btn click event End
// -------------------------------------

// // -------------------------------------
// // currentYear
// {
//   const currentYear = new Date().getFullYear();
//   document
//     .getElementById(`currentYear`)
//     .appendChild(document.createTextNode(currentYear));
// }
// // currentYear
// --------------------------------------------
// Intersection Observer Start

const observeElements = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // ✅ Element is visible in viewport
      entry.target.classList.add("show");
    } else {
      // ❌ Element is outside viewport
      entry.target.classList.remove("show");
    }
  });
};

const observer = new IntersectionObserver(observeElements, {});
const elementsToObserve = Array.from(document.getElementsByClassName("card"));

// Start observing each element
elementsToObserve.forEach((element) => observer.observe(element));

// Intersection Observer End
// --------------------------------------------
// currentYear Start
// Display the Current Year

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById(`currentYear`);
yearElement.appendChild(document.createTextNode(currentYear));

// currentYear End
// --------------------------------------------
