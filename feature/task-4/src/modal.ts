import { EventData } from "./types.js";

const modal = document.getElementById("modal") as HTMLElement;
const modalContent = modal.querySelector(".modal-content") as HTMLElement;

export function openModal(event: EventData): void {
  modalContent.innerHTML = `
    <button class="close">&times;</button>
    <h2>${event.title}</h2>
    <img src="${event.imageURL}" alt="${event.title}">
    <p><strong>${event.year}</strong> - ${event.description}</p>
  `;

  modal.removeAttribute("hidden");

  const closeBtn = modalContent.querySelector(".close") as HTMLElement;
  closeBtn.addEventListener("click", closeModal);
}

export function closeModal(): void {
  modal.setAttribute("hidden", "true");
}
