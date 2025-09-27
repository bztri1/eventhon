import React from 'react';
import { Users, Calendar, Shield, BarChart3, AlertTriangle, CheckCircle, Settings, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard: React.FC = () => {
  const stats = [
    { name: 'Total Users', value: '12,847', change: '+324', changeType: 'increase', icon: Users },
    { name: 'Active Events', value: '47', change: '+8', changeType: 'increase', icon: Calendar },
    { name: 'Reports Resolved', value: '156', change: '+23', changeType: 'increase', icon: Shield },
    { name: 'System Uptime', value: '99.97%', change: '+0.02%', changeType: 'increase', icon: BarChart3 },
  ];

  const userGrowth = [
    { role: 'Participants', count: 8234, growth: '+18%', color: 'bg-blue-500' },
    { role: 'Organizers', count: 1245, growth: '+12%', color: 'bg-green-500' },
    { role: 'Mentors', count: 567, growth: '+25%', color: 'bg-purple-500' },
    { role: 'Judges', count: 234, growth: '+8%', color: 'bg-orange-500' },
    { role: 'Investors', count: 123, growth: '+35%', color: 'bg-pink-500' },
  ];

  const recentEvents = [
    {
      id: 1,
      name: 'AI Innovation Challenge 2024',
      organizer: 'TechCorp',
      participants: 456,
      status: 'Live',
      flagged: false,
    },
    {
      id: 2,
      name: 'Sustainable Tech Hackathon',
      organizer: 'GreenTech Inc',
      participants: 234,
      status: 'Registration',
      flagged: false,
    },
    {
      id: 3,
      name: 'Blockchain Builders Summit',
      organizer: 'CryptoStart',
      participants: 189,
      status: 'Under Review',
      flagged: true,
    },
  ];

  const moderationQueue = [
    {
      id: 1,
      type: 'Content Report',
      item: 'Project submission by TeamAI',
      reporter: 'user_234',
      priority: 'high',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      type: 'User Report',
      item: 'Inappropriate behavior by mentor_567',
      reporter: 'user_890',
      priority: 'medium',
      timestamp: '4 hours ago',
    },
    {
      id: 3,
      type: 'Event Flag',
      item: 'Blockchain Builders Summit',
      reporter: 'system',
      priority: 'low',
      timestamp: '6 hours ago',
    },
  ];

  const systemAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'High server load detected on AI processing nodes',
      timestamp: '1 hour ago',
    },
    {
      id: 2,
      type: 'info',
      message: 'Scheduled maintenance completed successfully',
      timestamp: '3 hours ago',
    },
    {
      id: 3,
      type: 'success',
      message: 'New AI model deployment successful',
      timestamp: '5 hours ago',
    },
  ];

  const topPerformers = [
    { name: 'Dr. Sarah Chen', role: 'Mentor', score: 9.8, events: 23 },
    { name: 'TechCorp Events', role: 'Organizer', score: 9.6, events: 15 },
    { name: 'AI Pioneers Team', role: 'Participant', score: 9.4, events: 8 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Monitor platform health, manage users, and oversee system operations
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            System Settings
          </button>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center">
            <UserPlus className="h-5 w-5 mr-2" />
            Add Admin User
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {stat.value}
                </p>
                <p className={`text-sm mt-2 ${
                  stat.changeType === 'increase' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/20 rounded-xl">
                <stat.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Management */}
        <div className="lg:col-span-2 space-y-6">
          {/* User Growth */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                User Growth by Role
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {userGrowth.map((user, index) => (
                  <div key={user.role} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${user.color}`}></div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {user.role}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {user.count.toLocaleString()}
                      </span>
                      <span className="text-green-600 dark:text-green-400 font-medium text-sm">
                        {user.growth}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Events */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Recent Events
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-700 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {event.name}
                        </h3>
                        {event.flagged && (
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {event.organizer} • {event.participants} participants
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'Live' 
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                          : event.status === 'Registration'
                          ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {event.status}
                      </span>
                      <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm">
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* System Alerts */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                System Alerts
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className={`p-3 rounded-lg text-sm ${
                    alert.type === 'warning' 
                      ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200'
                      : alert.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                      : 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200'
                  }`}>
                    <p className="font-medium mb-1">{alert.message}</p>
                    <p className="text-xs opacity-75">{alert.timestamp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Moderation Queue */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Moderation Queue
                </h3>
                <span className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-2 py-1 rounded-full text-xs font-medium">
                  {moderationQueue.length} pending
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {moderationQueue.map((item) => (
                  <div key={item.id} className={`p-3 rounded-lg border-l-4 ${
                    item.priority === 'high' 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : item.priority === 'medium'
                      ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                      : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white text-sm">
                        {item.type}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {item.item}
                    </p>
                    <div className="flex space-x-2">
                      <button className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-xs">
                        Approve
                      </button>
                      <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium text-xs">
                        Reject
                      </button>
                      <button className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-xs">
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Top Performers
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {performer.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {performer.role} • {performer.events} events
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="font-bold text-gray-900 dark:text-white">
                          {performer.score}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;