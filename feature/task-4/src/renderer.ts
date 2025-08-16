import { EventData } from "./types.js";
import { openModal } from "./modal.js";

export function renderEvents(events: EventData[], container: HTMLElement): void {
  container.innerHTML = "";

  events.forEach(event => {
    const eventEl = document.createElement("div");
    eventEl.className = "event";
    eventEl.innerHTML = `
      <div class="event-year">${event.year}</div>
      <img src="${event.imageURL}" alt="${event.title}">
      <h3>${event.title}</h3>
    `;

    eventEl.addEventListener("click", () => openModal(event));
    container.appendChild(eventEl);
  });
}
