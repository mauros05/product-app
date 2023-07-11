import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["menu"]

  openMenu() {
    this.menuTarget.classList.remove("hidden")
    this.menuTarget.classList.add("animate-slideIn")
  }

  closeMenu() {
    this.menuTarget.classList.remove("animate-slideIn")
    this.menuTarget.classList.add("animate-slideOut")
    setTimeout(() => {
      this.menuTarget.classList.add("hidden")
      this.menuTarget.classList.remove("animate-slideOut")
    }, 300) // Ajusta el valor según la duración de la animación en milisegundos
  }
}
