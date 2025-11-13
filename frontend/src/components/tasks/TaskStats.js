import React from 'react';

const TaskStats = ({ stats }) => {
  const statCards = [
    {
      title: 'Total Tasks',
      value: stats.total,
      color: 'bg-blue-500',
      icon: '📊',
    },
    {
      title: 'Pending',
      value: stats.pending,
      color: 'bg-yellow-500',
      icon: '⏳',
    },
    {
      title: 'In Progress',
      value: stats['in-progress'],
      color: 'bg-purple-500',
      icon: '🚀',
    },
    {
      title: 'Completed',
      value: stats.completed,
      color: 'bg-green-500',
      icon: '✅',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statCards.map((stat, index) => (
        <div key={index} className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskStats;