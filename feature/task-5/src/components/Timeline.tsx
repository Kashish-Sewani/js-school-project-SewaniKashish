import type { EventData } from "../types";
import EventMarker from "../components/EventMarker";

interface TimelineProps {
  events: EventData[];
  onSelectEvent: (event: EventData) => void;
}

const Timeline = ({ events, onSelectEvent }: TimelineProps) => {
  return (
    <section id="timeline">
      {events.map((event, index) => (
        <EventMarker key={index} event={event} onClick={() => onSelectEvent(event)} />
      ))}
    </section>
  );
};

export default Timeline;
