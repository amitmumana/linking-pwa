document.addEventListener("DOMContentLoaded", () => {
   const menu = document.querySelector(".sidenav")
   M.Sidenav.init(menu, {edge: "right"})
})

if ("serviceWorker" in navigator) {
   navigator.serviceWorker
     .register("/sw.js")
     .then((reg) => console.log("service worker registered", reg))
     .catch((err) => console.log("service worker not registered", err))
 }