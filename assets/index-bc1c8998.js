(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}})();const l=()=>{const e=document.createElement("div");e.id="options";const t=document.createElement("input");t.type="text",t.name="search",t.id="search",t.placeholder="Search for a country...",t.value-"",t.oninput=n=>{let c=n.target.value;document.getElementById("countries").remove(),s(`https://restcountries.com/v3.1/name/${c}`)};const o=document.createElement("select");o.id="filter",o.name="region";const i=document.createElement("option");i.value="all",i.textContent="Filter by Region",i.setAttribute("hidden","hidden"),o.appendChild(i),o.appendChild(r("Africa")),o.appendChild(r("America")),o.appendChild(r("Asia")),o.appendChild(r("Europe")),o.appendChild(r("Oceania")),o.onchange=()=>{document.getElementById("countries").remove(),s(`https://restcountries.com/v3.1/region/${o.value}`)},e.appendChild(t),e.appendChild(o),document.getElementById("main").appendChild(e)},r=e=>{const t=document.createElement("option");return t.value=e,t.textContent=e,t},u=()=>{document.getElementById("options").innerHTML="",document.getElementById("countries").innerHTML=""},p=e=>{const t=[];return Object.values(e).forEach(o=>{t.push(` ${o}`)}),t},m=e=>{fetch(`https://restcountries.com/v3.1/alpha/${e}`).then(t=>t.json()).then(t=>a(t[0])).catch(t=>{console.log(t)})},h=e=>{const t=[];Object.values(e).forEach(n=>{t.push(n)});const o=document.createElement("div");o.classList.add("border");const i=document.createElement("div");i.innerHTML="<p>Border Countries:</p>",i.classList.add("border-items"),o.appendChild(i),document.querySelector(".info-wrapper").appendChild(o),t.forEach(n=>{console.log(n);const c=document.createElement("button");c.textContent=n,c.classList.add("border-btn"),c.onclick=()=>{m(n)},i.appendChild(c)})},g=e=>{const t=document.createElement("div");return t.classList.add("info-section"),t.innerHTML=`
  <div class="info-image">
    <img src="${e.flags.svg||flags.svg}" alt="image of country flag">
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
        <p>Languages: ${p(e.languages)}</p>
      </div>
    </div>
  </div>
   `,t},f=()=>{const e=document.createElement("button");return e.textContent="Back",e.classList.add("back-button"),e.onclick=()=>{document.getElementById("options").remove(),document.getElementById("countries").remove(),l(),s()},e},a=e=>{console.log(e),u(),document.getElementById("options").appendChild(f()),document.getElementById("countries").appendChild(g(e)),h(e.borders)},s=e=>{const t=document.getElementById("main"),o=document.createElement("div");return o.id="countries",t.appendChild(o),e||(e="https://restcountries.com/v3.1/all"),fetch(e).then(i=>i.json()).then(i=>{i.forEach(n=>{const c=document.createElement("div");c.classList.add("country-item"),c.onclick=()=>{a(n)},c.innerHTML=`
      <div class="image-container">
        <img src="${n.flags.svg}">
      </div>
      <div class="country-wrapper">
        <h1>${n.name.common}</h1>
        <div class="country-info">
          <p>Population: ${n.population}</p>
          <p>Region: ${n.region}</p>
          <p>Capital: ${n.capital}</p>
        </div>
      </div>`,o.appendChild(c)})}).catch(i=>{console.log(i),o.textContent="Error Not Found",o.classList.add("error")}),o},v=()=>{const e=document.body.style,t=document.getElementById("mode");t.textContent=="Dark Mode"?(e.setProperty("--elements","hsl(0, 0%, 100%)"),e.setProperty("--background","hsl(0, 0%, 90%)"),e.setProperty("--text","hsl(200, 15%, 8%)"),t.textContent="Light Mode"):(e.setProperty("--elements","hsl(209, 23%, 22%)"),e.setProperty("--background","hsl(207, 26%, 17%)"),e.setProperty("--text","hsl(0, 0%, 100%)"),t.textContent="Dark Mode")};document.addEventListener("DOMContentLoaded",()=>{l(),s(),document.getElementById("mode").onclick=v});
