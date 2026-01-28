# Simple Tasks UI

A simple React (Vite) frontend that consumes a Tasks API and supports basic CRUD operations  
(Create, Read, Update, Delete) for tasks.

The app was built to work with a mock API during development and can easily be switched to a real backend by changing the API base URL.

### Prerequisites
- Node.js (v18 or later recommended)
- npm (npm install)


### Run the App
npm run dev

### Switching from Mock to Real Api
- Update VITE_APP_API_URL to point to the real API.
- Restart the dev server.

# Application Structure
### App.jsx
- Root component
- Fetches tasks on page load
- Manages global state (tasks, loading, error)
- Passes handlers to child components

### TaskForm.jsx
- Form for creating new tasks
-Fields:
title (required)
description (optional)
status (pending, in-progress, done)
priority (low, medium, high)
Calls the create task API and refreshes the list on success

### TaskList.jsx
- Displays a list of all tasks
- Renders each task using TaskItem

### TaskItem.jsx
- Displays a single task
- Allows updating:
status
priority

- Sends full task updates upward (PUT semantics)

- Includes a delete button with confirmation

### UX Features

- Loading state while fetching tasks

- Error message when API calls fail

Disabled buttons during requests

Simple confirmation before deleting tasks
