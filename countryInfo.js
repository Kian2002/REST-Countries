import "./info.css";

const openInfo = (e) => {
  const languages = [];
  Object.values(e.languages).forEach((language) => {
    languages.push(` ${language}`);
  });

  const options = (document.getElementById("options").innerHTML = "");
  const countries = document.getElementById("countries");
  countries.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("info-section");

  div.innerHTML = `
  <div class="info-image">
    <img src="${e.flags.svg}">
  </div>

  <div class="info-wrapper">
    <h1>${e.name.common}</h1>
  
    <div class="info-items">
      
      <div class="info-item">
        <p>Native Name: ${Object.values(e.name.nativeName)[0].common}</p>
        <p>Population: ${e.population}</p>
        <p>Region: ${e.region}</p>
        <p>Sub Region: ${e.subregion}</p>
        <p>Capital: ${e.capital}</p>
      </div>
    
      <div class="info-item">
        <p>Top Level Domain: ${e.tld}</p>
        <p>Currencies: ${Object.values(e.currencies)[0].name}</p>
        <p>Languages: ${languages.toString()}</p>
      </div>
        
    </div>

    <div class="border">
        <p id="border">Border Countries: </p>
    </div>
  
  </div>
   `;

  countries.appendChild(div);
};

export default openInfo;
