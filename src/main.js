import './style.css'

const app = document.querySelector('#app')
app.innerHTML = `
  <div class="container">
    <h1>Celestine Hosting</h1>
    <p>Premium Web Hosting Solution</p>
    <p class="tagline">Built with Vite | Deployed on Celestine Hosting</p>
    <button id="counter">Interactive Demo - Click count: 0</button>
    <div class="info">
      <p>This sample app showcases the performance of Celestine Hosting infrastructure.</p>
    </div>
  </div>
`

let count = 0
document.querySelector('#counter').addEventListener('click', () => {
  count++
  document.querySelector('#counter').textContent = `Click count: ${count}`
})