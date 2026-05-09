import './style.css'

const app = document.querySelector('#app')
app.innerHTML = `
  <div class="container">
    <h1>Sample Vite App</h1>
    <p>This is a minimal Vite application for testing and deployment.</p>
    <button id="counter">Click count: 0</button>
  </div>
`

let count = 0
document.querySelector('#counter').addEventListener('click', () => {
  count++
  document.querySelector('#counter').textContent = `Click count: ${count}`
})