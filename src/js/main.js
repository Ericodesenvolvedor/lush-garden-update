import Navigation from "./Navigation.js"

const menu = document.querySelector("[data-menu]");

const {handleHamburguer, handleWindow} = Navigation(menu);

document.querySelector("[data-hamburguer]").addEventListener("click", handleHamburguer);
window.addEventListener("resize", handleWindow)