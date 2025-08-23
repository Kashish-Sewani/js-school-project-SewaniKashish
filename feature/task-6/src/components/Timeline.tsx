import type { EventData } from "../types";
import EventMarker from "../components/EventMarker";

interface TimelineProps {
  events: EventData[];
  onSelectEvent: (event: EventData) => void;
}

const Timeline = ({ events, onSelectEvent }: TimelineProps) => {
  return (
    <ul id="timeline" role="list" aria-label="Timeline of events">
      {events.map((event, index) => (
        <EventMarker key={index} event={event} onClick={() => onSelectEvent(event)}
        isActive={index === 0} />
      ))}
    </ul>
  );
};

export default Timeline;
