(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const s=()=>{const e=document.createElement("div");e.id="options";const t=document.createElement("input");t.type="text",t.name="search",t.id="search",t.placeholder="Search for a country...";const o=document.createElement("button");o.type="button",o.id="filter",o.textContent="Filter by Region",e.appendChild(t),e.appendChild(o),document.getElementById("main").appendChild(e)},a=()=>{document.getElementById("options").innerHTML="",document.getElementById("countries").innerHTML=""},u=e=>{const t=[];return Object.values(e).forEach(o=>{t.push(` ${o}`)}),t},p=e=>{fetch(`https://restcountries.com/v3.1/alpha/${e}`).then(t=>t.json()).then(t=>l(t[0])).catch(t=>{console.log(t)})},m=e=>{const t=[];Object.values(e).forEach(n=>{t.push(n)});const o=document.createElement("div");o.classList.add("border");const c=document.createElement("div");c.innerHTML="<p>Border Countries:</p>",c.classList.add("border-items"),o.appendChild(c),document.querySelector(".info-wrapper").appendChild(o),t.forEach(n=>{console.log(n);const i=document.createElement("button");i.textContent=n,i.classList.add("border-btn"),i.onclick=()=>{p(n)},c.appendChild(i)})},f=e=>{const t=document.createElement("div");return t.classList.add("info-section"),t.innerHTML=`
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
   `,t},g=()=>{const e=document.createElement("button");return e.textContent="Back",e.classList.add("back-button"),e.onclick=()=>{document.getElementById("options").remove(),document.getElementById("countries").remove(),s(),d()},e},l=e=>{console.log(e),a(),document.getElementById("options").appendChild(g()),document.getElementById("countries").appendChild(f(e)),m(e.borders)},d=()=>{const e=document.getElementById("main"),t=document.createElement("div");return t.id="countries",e.appendChild(t),fetch("https://restcountries.com/v3.1/all").then(o=>o.json()).then(o=>{o.forEach(c=>{const n=document.createElement("div");n.classList.add("country-item"),n.onclick=()=>{l(c)},n.innerHTML=`
      <div class="image-container">
        <img src="${c.flags.svg}">
      </div>
      <div class="country-wrapper">
        <h1>${c.name.common}</h1>
        <div class="country-info">
          <p>Population: ${c.population}</p>
          <p>Region: ${c.region}</p>
          <p>Capital: ${c.capital}</p>
        </div>
      </div>`,t.appendChild(n)})}).catch(o=>{console.log(o)}),t};document.addEventListener("DOMContentLoaded",()=>{s(),d()});
