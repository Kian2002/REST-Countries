import "./home.css";
import openInfo from "./countryInfo";

const countries = () => {
  const countries = document.getElementById("countries");

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((d) => {
        const div = document.createElement("div");
        div.classList.add("country-item");

        div.onclick = () => {
          openInfo(d);
        };

        div.innerHTML = `
      <div class="image-container">
        <img src="${d.flags.svg}">
      </div>
      <div class="country-wrapper">
        <h1>${d.name.common}</h1>
        <div class="country-info">
          <p>Population: ${d.population}</p>
          <p>Region: ${d.region}</p>
          <p>Capital: ${d.capital}</p>
        </div>
      </div>`;

        countries.appendChild(div);
      });
    })
    .catch((err) => {
      console.log(err);
    });

  return countries;
};

export default countries;
