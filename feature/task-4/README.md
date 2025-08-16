# Timeline App

## Stage 4: Static Typing & Modular Code with TypeScript

This stage builds on the HTML/CSS and JavaScript functionality from earlier stages by introducing **TypeScript**, **ES modules**, and a cleaner, more maintainable project structure.

### Features & Functionality Goals
- **Static Typing** for safer and more predictable code using TypeScript.
- **Interfaces & Types** defined for event data (year, title, description, imageURL, category).
- **Modular Code Structure** separating logic into:
  - `fetcher.ts` → Handles fetching `events.json` data.
  - `renderer.ts` → Dynamically renders event markers into the timeline.
  - `modal.ts` → Manages modal opening, closing, and content population.
  - `types.ts` → Stores TypeScript interfaces and types for reuse.
- **ES Modules** used for importing and exporting functions/types.
- **Strict Mode** enabled in `tsconfig.json` for best practices and fewer runtime errors.
- Set up a **build process** so `src/` TypeScript files are compiled into `dist/` JavaScript files.
- Updated the HTML to load the compiled JS from `dist/`.

