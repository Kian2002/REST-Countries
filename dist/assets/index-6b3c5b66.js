(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const l=()=>{const e=document.createElement("div");e.id="options";const n=document.createElement("input");n.type="text",n.name="search",n.id="search",n.placeholder="Search for a country...",n.value-"",n.oninput=c=>{let t=c.target.value;document.getElementById("countries").remove(),s(t)};const i=document.createElement("button");i.type="button",i.id="filter",i.textContent="Filter by Region",e.appendChild(n),e.appendChild(i),document.getElementById("main").appendChild(e)},a=()=>{document.getElementById("options").innerHTML="",document.getElementById("countries").innerHTML=""},u=e=>{const n=[];return Object.values(e).forEach(i=>{n.push(` ${i}`)}),n},p=e=>{fetch(`https://restcountries.com/v3.1/alpha/${e}`).then(n=>n.json()).then(n=>d(n[0])).catch(n=>{console.log(n)})},m=e=>{const n=[];Object.values(e).forEach(t=>{n.push(t)});const i=document.createElement("div");i.classList.add("border");const c=document.createElement("div");c.innerHTML="<p>Border Countries:</p>",c.classList.add("border-items"),i.appendChild(c),document.querySelector(".info-wrapper").appendChild(i),n.forEach(t=>{console.log(t);const o=document.createElement("button");o.textContent=t,o.classList.add("border-btn"),o.onclick=()=>{p(t)},c.appendChild(o)})},g=e=>{const n=document.createElement("div");return n.classList.add("info-section"),n.innerHTML=`
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
        <p>Languages: ${u(e.languages)}</p>
      </div>
    </div>
  </div>
   `,n},f=()=>{const e=document.createElement("button");return e.textContent="Back",e.classList.add("back-button"),e.onclick=()=>{document.getElementById("options").remove(),document.getElementById("countries").remove(),l(),s()},e},d=e=>{console.log(e),a(),document.getElementById("options").appendChild(f()),document.getElementById("countries").appendChild(g(e)),m(e.borders)},s=e=>{const n=document.getElementById("main"),i=document.createElement("div");return i.id="countries",n.appendChild(i),fetch(e?`https://restcountries.com/v3.1/name/${e}`:"https://restcountries.com/v3.1/all").then(c=>c.json()).then(c=>{c.forEach(t=>{const o=document.createElement("div");o.classList.add("country-item"),o.onclick=()=>{d(t)},o.innerHTML=`
      <div class="image-container">
        <img src="${t.flags.svg}">
      </div>
      <div class="country-wrapper">
        <h1>${t.name.common}</h1>
        <div class="country-info">
          <p>Population: ${t.population}</p>
          <p>Region: ${t.region}</p>
          <p>Capital: ${t.capital}</p>
        </div>
      </div>`,i.appendChild(o)})}).catch(c=>{console.log(c),i.textContent="Error Not Found",i.classList.add("error")}),i};document.addEventListener("DOMContentLoaded",()=>{l(),s()});
