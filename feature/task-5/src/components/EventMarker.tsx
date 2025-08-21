import type { EventData } from "../types";

interface EventMarkerProps {
  event: EventData;
  onClick: () => void;
}

const EventMarker = ({ event, onClick }: EventMarkerProps) => {
  return (
    <div className="event" onClick={onClick}>
      <div className="event-year">{event.year}</div>
      <img src={event.imageURL} alt={event.title} />
      <h3>{event.title}</h3>
    </div>
  );
};

export default EventMarker;
