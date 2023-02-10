import "./info.css";
import countries from "./data";

const emptyMain = () => {
  document.getElementById("options").innerHTML = "";
  document.getElementById("countries").innerHTML = "";
};

const languages = (data) => {
  const languages = [];
  Object.values(data).forEach((language) => {
    languages.push(` ${language}`);
  });
  return languages;
};

const loadBorderCountry = (country) => {
  fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    .then((response) => response.json())
    .then((data) => openInfo(data[0]))
    .catch((err) => {
      console.log(err);
    });
};

const borderCountries = (data) => {
  const borderCountries = [];
  Object.values(data).forEach((border) => {
    borderCountries.push(border);
  });

  const borderDiv = document.createElement("div");
  borderDiv.classList.add("border");

  const borderInnerDiv = document.createElement("div");
  borderInnerDiv.innerHTML = `<p>Border Countries:</p>`;
  borderInnerDiv.classList.add("border-items");

  borderDiv.appendChild(borderInnerDiv);

  document.querySelector(".info-wrapper").appendChild(borderDiv);

  borderCountries.forEach((border) => {
    console.log(border);
    const button = document.createElement("button");
    button.textContent = border;
    button.classList.add("border-btn");
    button.onclick = () => {
      loadBorderCountry(border);
    };

    borderInnerDiv.appendChild(button);
  });
};

const createInfo = (data) => {
  const div = document.createElement("div");
  div.classList.add("info-section");

  div.innerHTML = `
  <div class="info-image">
    <img src="${data.flags.svg || flags.svg}" alt="image of country flag">
  </div>

  <div class="info-wrapper">
    <h1>${data.name.common}</h1>
  
    <div class="info-items">
      
      <div class="info-item">
        <p>Native Name: ${Object.values(data.name.nativeName)[0].common}</p>
        <p>Population: ${data.population}</p>
        <p>Region: ${data.region}</p>
        <p>Sub Region: ${data.subregion}</p>
        <p>Capital: ${data.capital}</p>
      </div>
    
      <div class="info-item">
        <p>Top Level Domain: ${data.tld}</p>
        <p>Currencies: ${Object.values(data.currencies)[0].name}</p>
        <p>Languages: ${languages(data.languages)}</p>
      </div>
    </div>
  </div>
   `;

  return div;
};

const backButton = () => {
  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  backButton.classList.add("back-button");

  backButton.onclick = () => {
    countries();
    emptyMain();
  };

  return backButton;
};

const openInfo = (data) => {
  console.log(data);
  emptyMain();
  document.getElementById("options").appendChild(backButton());

  document.getElementById("countries").appendChild(createInfo(data));

  borderCountries(data.borders);
};

export default openInfo;
