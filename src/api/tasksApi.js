const API_URL = import.meta.env.VITE_APP_API_URL;

// Fetch all tasks
export async function fetchTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}

// Create a new task
export async function createTask(task) {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Failed to create your task");
  return res.json();
}

// Update an existing task
export async function updateTask(id, updates, existingTask) {
  const updatedTask = { ...existingTask, ...updates };
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });
  if (!res.ok) throw new Error("Failed to update your task");
  return res.json();
}

// delete a task
export async function deleteTask(id) {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete your task");
  return res.json();
}
