import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const getStatusBadge = (status) => {
    const badges = {
      pending: 'badge badge-pending',
      'in-progress': 'badge badge-in-progress',
      completed: 'badge badge-completed',
    };
    return badges[status] || 'badge';
  };

  const getPriorityBadge = (priority) => {
    const badges = {
      low: 'badge badge-low',
      medium: 'badge badge-medium',
      high: 'badge badge-high',
    };
    return badges[priority] || 'badge';
  };

  const formatDate = (date) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">{task.title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(task)}
            className="text-primary-600 hover:text-primary-700"
            title="Edit"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="text-red-600 hover:text-red-700"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      </div>

      {task.description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{task.description}</p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={getStatusBadge(task.status)}>
          {task.status.replace('-', ' ')}
        </span>
        <span className={getPriorityBadge(task.priority)}>
          {task.priority}
        </span>
      </div>

      {task.dueDate && (
        <div className="text-sm text-gray-500 flex items-center">
          <span className="mr-1">📅</span>
          Due: {formatDate(task.dueDate)}
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
        Created: {formatDate(task.createdAt)}
      </div>
    </div>
  );
};

export default TaskCard;