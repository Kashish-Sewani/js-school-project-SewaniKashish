import { useEffect, useRef } from "react";
import type { EventData } from "../types";

interface EventModalProps {
  event: EventData;
  onClose: () => void;
}

const EventModal = ({ event, onClose }: EventModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab" && modalRef.current) {
        const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div id="modal" role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
    >
      <div className="modal-content">
        <button className="close" onClick={onClose}
          aria-label="Close dialog"
          ref={closeButtonRef}
        >
          &times;
        </button>
        <h2 id="modal-title">{event.title}</h2>
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