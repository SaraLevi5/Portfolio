// import { getCountries } from "./services/countries.service.js";
import { countries } from "./services/countries.service.js";
import { creatCardList } from "./services/dom.service.js";

creatCardList();

const array = () => {
  const populationArray = countries.map((country) => country.population);
  console.log(populationArray);
  populationArray.sort();
};

window.select = () => {
  const select = document.getElementById("select").value;

  switch (select) {
    case "favorites":
      creatCard;
      cards.innerHTML = ``;
      break;

    case "population":
      cards.innerHTML = ``;
      break;

    case "byContinent":
      cards.innerHTML = ``;
      break;

    default:
      creatCardList();
      break;
  }
};
