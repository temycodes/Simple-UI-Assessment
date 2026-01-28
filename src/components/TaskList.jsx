import TaskItem from "./TaskItem";

function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <ul className='pt-3 space-y-2 border-t'>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
