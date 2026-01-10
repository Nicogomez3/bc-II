import { initSwiper } from "../js/swiper/swiper.js";
import { initGsap } from "../js/gsap/gsap.js";

console.log("router cargado")

export async function loadPage(url, push = true) {
  console.log("loadPage:", url)
  const app = document.getElementById("app")
  console.log("app:", app)

  const res = await fetch(url)
  console.log("fetch status:", res.status)
  const html = await res.text()
  console.log("html length:", html.length)

  app.replaceChildren()
  app.innerHTML = html
  

  if (push) history.pushState({ url }, "", "#!" + url)

  // 🔥 SOLO HOME
  // if (url.includes("home")) {
  //   initSwiper()
  // }
  if (url.includes("home")) {
  requestAnimationFrame(() => initSwiper())
  }

  if (url.includes("eventos")) {
  requestAnimationFrame(() => initGsap())
  }
}



document.addEventListener("click", e => {
  const link = e.target.closest("a[data-link]")
  if (!link) return

  e.preventDefault()
  loadPage(link.getAttribute("href"))
})

window.addEventListener("popstate", e => {
  if (e.state?.url) {
    loadPage(e.state.url, false)
  }
})