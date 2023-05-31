import React, { useState } from 'react';

function TaskItem({ title, completed, task, setEditTask, onTaskStatusChange, onTaskDelete, handleEditTask }) {
  const [checked, setChecked] = useState(completed);
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleStatusChange = () => {
    const updatedStatus = !checked;
    setChecked(updatedStatus);
    onTaskStatusChange(task._id, updatedStatus);
    handleSave();
  };

  const handleDelete = () => {
    onTaskDelete(task._id);
  };

  const handleEdit = () => {
    setEditTask(task);
    setEditing(true);
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleSave = async () => {
    setEditing(false);
    const editedTask = { ...task, title: editedTitle };
    await handleEditTask(editedTask); 
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedTitle(task.title);
  };

  return (
    <div className="flex items-center justify-between py-2 px-4 border-b text-black">
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleStatusChange}
          className="mr-2"
        />
        {editing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            className="border-b focus:outline-none bg-white px-2 py-1 text-[15px] rounded-md"
          />
        ) : (
          <span className={checked ? 'line-through' : ''}>{title}</span>
        )}
      </div>
      <div>
        {editing ? (
          <div>
            <button
              onClick={handleSave}
              className="md:mx-2 mx-1 my-2 bg-green-500 text-white rounded-md px-2 py-1 hover:bg-green-600 hover:text-green-600 focus:outline-none"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 text-white rounded-md px-2 py-1 hover:bg-red-700 hover:text-red-600 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleEdit}
              className="md:mx-2 md:ml-0 ml-4 my-2 bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-700 hover:text-blue-600 focus:outline-none"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 md:ml-0 ml-4 text-white rounded-md px-2 py-1 hover:bg-red-700 hover:text-red-600 focus:outline-none"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskItem;