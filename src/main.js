import './app.css'
import "./app.scss";
import App from './App.svelte'

const app = new App({
  // target: document.getElementById('app')
  target: document.querySelector('section div')
})

export default app
