import { updateTask } from "../api/tasksApi";

function TaskItem({ task, onUpdate, onDelete }) {
  console.log(task);

  return (
    <li className='flex items-center justify-between gap-12 p-4 mb-3 border rounded'>
      <h3 className='text-lg font-semibold'>{task.title}</h3>

      {/* status */}
      <select
        value={task.status}
        onChange={(e) => onUpdate(task.id, { ...task, status: e.target.value })}
        className='p-0.5 rounded'
      >
        <option value='pending'>Pending</option>
        <option value='in-progress'>In Progress</option>
        <option value='done'>Done</option>
      </select>

      {/* priority */}
      <select
        value={task.priority}
        onChange={(e) => updateTask(task.id, { ...task, priority: e.target.value })}
        className='p-0.5 rounded'
      >
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>

      {/* delete button */}
      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this task?")) onDelete(task.id);
        }}
        className='ml-4 text-xs text-red-600'
      >
        Delete Task
      </button>
    </li>
  );
}

export default TaskItem;
