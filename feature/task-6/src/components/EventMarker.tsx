import type { EventData } from "../types";

interface EventMarkerProps {
  event: EventData;
  onClick: () => void;
  isActive?: boolean;
}

const EventMarker = ({ event, onClick, isActive }: EventMarkerProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <li className="event"  role="listitem"
      tabIndex={0}
      aria-current={isActive ? "true" : undefined} onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <div className="event-year">{event.year}</div>
      <img src={event.imageURL} alt={event.title} />
      <h3>{event.title}</h3>
    </li>
  );
};


export default EventMarker;