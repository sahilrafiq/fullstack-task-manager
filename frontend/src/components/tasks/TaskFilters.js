import React from 'react';

const TaskFilters = ({ filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-wrap gap-3">
      {/* Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={filters.search}
        onChange={(e) => handleFilterChange('search', e.target.value)}
        className="input-field max-w-xs"
      />

      {/* Status Filter */}
      <select
        value={filters.status}
        onChange={(e) => handleFilterChange('status', e.target.value)}
        className="input-field max-w-[150px]"
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Priority Filter */}
      <select
        value={filters.priority}
        onChange={(e) => handleFilterChange('priority', e.target.value)}
        className="input-field max-w-[150px]"
      >
        <option value="">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      {/* Clear Filters */}
      {(filters.search || filters.status || filters.priority) && (
        <button
          onClick={() => setFilters({ status: '', priority: '', search: '' })}
          className="btn-secondary"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default TaskFilters;