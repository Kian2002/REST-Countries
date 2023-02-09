import "./info.css";

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

const createInfo = (data) => {
  const div = document.createElement("div");
  div.classList.add("info-section");

  div.innerHTML = `
  <div class="info-image">
    <img src="${data.flags.svg}">
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

    <div class="border">
        <p id="border">Border Countries: </p>
    </div>
  
  </div>
   `;

  return div;
};

const openInfo = (data) => {
  emptyMain();

  document.getElementById("countries").appendChild(createInfo(data));
};

export default openInfo;
