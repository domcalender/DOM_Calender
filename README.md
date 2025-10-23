Department Calendar Application Integration Guide

This document provides essential information for integrating and maintaining the Department Calendar application on the college website.
1. Project Overview

This is a dynamic, fully responsive calendar component designed to display departmental events, workshops, and seminars.

Key Technologies:

    Frontend: React (v18) and TypeScript

    Styling: Tailwind CSS (utility-first framework)

    Build Tool: Vite

    Future Data Source: The project includes a dependency for @supabase/supabase-js, indicating an architecture ready for live data integration.

2. Core File Structure

The application's logic is primarily contained within the src/ directory.

    index.html: Application Mount Point. Contains the <div id="root"></div>. This element is where the entire React application is injected.

    src/App.tsx: Core Logic & Data Layer. This is the main file. It contains all component logic, UI, state, utilities, and the hardcoded event data.

    src/main.tsx: Application Bootstrapper. Initializes React and mounts the main <App /> component.

    src/index.css: Global Styles. Imports the required Tailwind CSS layers.

    package.json: Dependencies. Lists all necessary libraries (React, Supabase, Tailwind).

    tailwind.config.js: Styling Configuration. Tailwind configuration file.

3. How to Update Events (Hardcoded Source)

Currently, the event data is embedded directly into the main application component, src/App.tsx. This is the easiest place for the team to make quick updates before transitioning to a live database.
Step 1: Open src/App.tsx

Locate the file and look for the Event interface definition and the events array within the App() function.

// Located near the top of src/App.tsx
interface Event {
  id: number;
  title: string;
  date: string; // The display date (e.g., "16th September 2025")
  time: string; // The display time (e.g., "6:00 PM to 7:00 PM")
  venue: string;
  speaker?: string; // Optional field
  posterUrl: string; // URL or imported asset path
  category: string;
  startDateTime: string; // Crucial: ISO 8601 format (YYYY-MM-DDTHH:MM:SS)
  endDateTime: string;   // Crucial: ISO 8601 format
}

// ... (The hardcoded data array below the interface)
const events: Event[] = [
    // Existing event objects...
];

Step 2: Add or Modify an Event Object

To add a new event, append a new object to the events array. Pay close attention to the date formats required for each field:

    id: Unique identifier (must be unique). Example: 6

    title: Event name. Example: "Departmental Open House"

    date: Display format for the date. Example: "10th November 2025"

    time: Display format for the time range. Example: "2:00 PM to 4:00 PM"

    venue: Location. Example: "Innovation Center, Room B"

    posterUrl: Path to the event image. Example: eventImage2 (or a direct URL)

    category: Used for filtering/displaying. Example: "Student Life"

    startDateTime: ISO 8601 format (Crucial for Calendar link logic). Example: "2025-11-10T14:00:00"

    endDateTime: ISO 8601 format (Crucial for Calendar link logic). Example: "2025-11-10T16:00:00"

Step 3: Handling Assets (Images/Video)

If you add a new event with a new poster, the team must place the image file into the src/assets/ directory and import it at the top of src/App.tsx using the same pattern as the existing assets:

import newEventImage from './assets/new_poster_name.jpg';

Then, use the imported variable (newEventImage) for the posterUrl value in your new event object.
