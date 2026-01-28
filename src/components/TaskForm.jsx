import { useState } from "react";

function TaskForm({ onCreate }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
  });
  const [sending, setSending] = useState(false);
  //

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  //

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title) return;

    setSending(true);
    try {
      await onCreate(form);
      setForm({
        title: "",
        description: "",
        status: "pending",
        priority: "medium",
      });
    } finally {
      setSending(false);
    }
  }

  //

  return (
    <form onSubmit={handleSubmit} className='p-4 mb-6 rounded'>
      <h2>Create My Task</h2>
      <input
        name='title'
        value={form.title}
        placeholder='Enter task name'
        required
        className='w-full px-3 py-2 mb-2 border rounded'
        onChange={handleChange}
      />
      <textarea
        name='description'
        rows={5}
        value={form.description}
        placeholder='Description...'
        className='w-full h-16 px-4 py-2 text-lg border rounded resize-y'
        onChange={handleChange}
      />

      <div className='flex gap-2 mb-3'>
        <select name='status' id='' className='flex px-3 border rounded 1' value={form.status} onChange={handleChange}>
          <option value='pending'>Pending</option>
          <option value='in-progress'>In Progress</option>
          <option value='done'>Done</option>
        </select>
        <select
          name='priority'
          id=''
          className='flex px-3 border rounded 1'
          value={form.priority}
          onChange={handleChange}
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
      </div>

      <button type='submit' className='px-4 py-2 text-white rounded-lg' disabled={sending}>
        Create
      </button>
    </form>
  );
}

export default TaskForm;
