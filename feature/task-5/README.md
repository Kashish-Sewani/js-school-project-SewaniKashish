# Stage 5 - React + TypeScript Timeline App  

## Description  
This project rebuilds the **Timeline UI** as a React application using **Vite** with the **React + TypeScript template**. It is component-driven and demonstrates reusable UI patterns and state management with React hooks.  

## Features   
- Modular component structure for better reusability  
- Light/Dark theme toggle  
- Interactive **Timeline** with clickable events  
- **Event modal** for detailed event information    

## Components  
- **`<Header>`** → Displays the logo and theme switch  
- **`<Timeline>`** → Maps over event data and renders `<EventMarker>`  
- **`<EventMarker>`** → Represents each event (year/title) and handles click to open modal 
- **`<EventModal>`** → Shows event details  
 

## State Management  
- **`useState`** for managing:  
  - Active theme (light/dark)  
  - Selected event  
  - Modal visibility  
- **`useEffect`** to load data and update UI based on user actions  


