import type { EventData } from "../types";

interface EventModalProps {
  event: EventData;
  onClose: () => void;
}

const EventModal = ({ event, onClose }: EventModalProps) => {
  return (
    <div id="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <h2>{event.title}</h2>
        <img src={event.imageURL} alt={event.title} />
        <p>
          <strong>{event.year}</strong> - {event.description}
        </p>
        <p>
          <em>Category: {event.category}</em>
        </p>
      </div>
    </div>
  );
};

export default EventModal;
