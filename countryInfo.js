const openInfo = (e) => {
  console.log(e);
  const countries = document.getElementById("countries");
  countries.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("country-item");

  div.innerHTML = `
        <div class="image-container">
          <img src="${e.flags.svg}">
        </div>
        <div class="country-wrapper">
          <h1>${e.name.common}</h1>
          <div class="country-info">
            <p>Population: ${e.population}</p>
            <p>Region: ${e.region}</p>
            <p>Capital: ${e.capital}</p>
          </div>
        </div>`;

  countries.appendChild(div);
};

export default openInfo;
