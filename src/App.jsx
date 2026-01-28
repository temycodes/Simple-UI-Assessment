import { useEffect, useState } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api/tasksApi";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch tasks on initial render
  useEffect(() => {
    fetchTasks()
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // create a new task
  const handleCreate = (task) => {
    createTask(task).then(() =>
      fetchTasks()
        .then(setTasks)
        .catch((err) => setError(err.message)),
    );
  };

  // update task by id with updates
  const handleUpdate = (id, updates) => {
    updateTask(id, updates).then(() =>
      fetchTasks()
        .then(setTasks)
        .catch((err) => setError(err.message)),
    );
  };

  // delete by task by id
  const handleDelete = (id) => {
    deleteTask(id)
      .then(() => setTasks((prev) => prev.filter((task) => task._id !== id)))
      .catch((err) => setError(err.message));
  };

  return (
    <div className='max-w-4xl p-6 mx-auto'>
      <h1 className='mb-4 text-3xl font-bold text center'>My Tasks</h1>

      <TaskForm onCreate={handleCreate} />

      {loading && <p>Loading tasks…</p>}
      {error && <p>{error}</p>}

      {!loading && <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />}
    </div>
  );
}

export default App;
