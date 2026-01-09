import { initSwiper } from "../js/swiper/swiper.js";

export async function loadPage(url, push = true) {
  const app = document.getElementById("app")

  const res = await fetch(url)
  const html = await res.text()

  app.innerHTML = html

  if (push) history.pushState({ url }, "", "#!" + url)

  // 🔥 SOLO HOME
  if (url.includes("home")) {
    initSwiper()
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