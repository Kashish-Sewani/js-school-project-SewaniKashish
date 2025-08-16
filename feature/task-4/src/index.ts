import { fetchEvents } from "./fetcher.js";
import { renderEvents } from "./renderer.js";

document.addEventListener("DOMContentLoaded", async () => {
  const timeline = document.getElementById("timeline") as HTMLElement;

  try {
    const events = await fetchEvents();
    renderEvents(events, timeline);
  } catch (error) {
    console.error(error);
  }
});
