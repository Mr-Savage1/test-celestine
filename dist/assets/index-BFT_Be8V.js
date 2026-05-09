(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s=document.querySelector("#app");s.innerHTML=`
  <div class="container">
    <h1>Celestine Hosting</h1>
    <p>Premium Web Hosting Solution</p>
    <p class="tagline">Built with Vite | Deployed on Celestine Hosting</p>
    <button id="counter">Interactive Demo - Click count: 0</button>
    <div class="info">
      <p>This sample app showcases the performance of Celestine Hosting infrastructure.</p>
    </div>
  </div>
`;let i=0;document.querySelector("#counter").addEventListener("click",()=>{i++,document.querySelector("#counter").textContent=`Click count: ${i}`});
