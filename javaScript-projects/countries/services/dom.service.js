import { countries, reset, search } from "./countries.service.js";
import { likedCountries, getData, updateData } from "./localStorage.service.js";

const searchInput = document.getElementById("search");
const cards = document.getElementById("cards");

searchInput.addEventListener("keyup", (event) => {
  reset();
  cards.innerHTML = "";

  if (!event.target.value || event.target.value == "") {
    return creatCardList();
  }

  search(event.target.value);
  creatCardList();
});

const creatCard = (country) => {
  const card = document.createElement("div");
  card.className = "card m-2 col-md-3 col-sm-12 shadow ";

  const cardImg = document.createElement("img");
  cardImg.className = "card-img-top img border rounded shadow mt-3";
  cardImg.src = country.flags.png;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("p");
  cardTitle.className = "card-text";
  cardTitle.textContent = country.name.common;

  const population = document.createElement("h3");
  population.className = "card-title";
  population.textContent = `Population: ${country.population}`;

  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";

  const heart = document.createElement("i");
  heart.addEventListener("click", () => {
    updateData(country.name.common);
    if (heart.classList[heart.classList.length - 1] == "text-dark") {
      heart.className = "fa fa-heart text-danger";
    } else {
      heart.className = "fa fa-heart text-dark";
    }
  });

  let isLiked = false;
  getData();
  if (likedCountries.includes(country.name.common)) {
    isLiked = true;
  }

  heart.className = `fa fa-heart ${isLiked ? "text-danger" : "text-dark"}`;

  card.appendChild(cardImg);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(population);
  card.appendChild(cardBody);
  cardFooter.appendChild(heart);
  card.appendChild(cardFooter);
  cards.appendChild(card);
};

const creatCardList = () => {
  for (const item of countries) {
    creatCard(item);
  }
};

/////////

export { creatCardList };
