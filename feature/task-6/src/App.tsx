import { useState, useEffect } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import eventsData from "./data/events.json";
import type { EventData } from "../src/types";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />

      <Timeline events={eventsData} onSelectEvent={setSelectedEvent} />

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default App;
