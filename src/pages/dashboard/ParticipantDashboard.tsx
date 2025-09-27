import React from 'react';
import { Brain, Users, Calendar, Trophy, MessageCircle, TrendingUp, Plus, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ParticipantDashboard: React.FC = () => {
  const stats = [
    { name: 'Active Events', value: '3', change: '+1', changeType: 'increase', icon: Calendar },
    { name: 'Teams Joined', value: '2', change: '+1', changeType: 'increase', icon: Users },
    { name: 'Projects Completed', value: '5', change: '+2', changeType: 'increase', icon: Trophy },
    { name: 'AI Sessions', value: '24', change: '+8', changeType: 'increase', icon: Brain },
  ];

  const activeEvents = [
    {
      id: 1,
      name: 'AI Innovation Challenge 2024',
      status: 'In Progress',
      deadline: '3 days left',
      progress: 75,
      team: 'AI Pioneers',
      mentor: 'Dr. Sarah Chen',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 2,
      name: 'Sustainable Tech Hackathon',
      status: 'Team Formation',
      deadline: '5 days left',
      progress: 25,
      team: 'Looking for team',
      mentor: 'Marcus Rodriguez',
      color: 'from-green-500 to-emerald-600',
    },
  ];

  const recentActivities = [
    { id: 1, text: 'AI Mentor suggested code optimization', time: '2 hours ago', type: 'ai' },
    { id: 2, text: 'New team member joined "AI Pioneers"', time: '4 hours ago', type: 'team' },
    { id: 3, text: 'Submitted project milestone', time: '1 day ago', type: 'project' },
    { id: 4, text: 'Received feedback from mentor', time: '2 days ago', type: 'mentor' },
  ];

  const aiSuggestions = [
    'Consider adding error handling to your authentication module',
    'Your team could benefit from a UX designer for the upcoming presentation',
    'The project timeline suggests scheduling a code review session',
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Here's what's happening with your hackathon journey
          </p>
        </div>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Join Event
        </button>
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
        {/* Active Events */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Active Events
              </h2>
            </div>
            <div className="p-6 space-y-6">
              {activeEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 dark:border-slate-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {event.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.deadline}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {event.team}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'In Progress' 
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{event.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${event.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${event.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Mentor: {event.mentor}
                    </span>
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Suggestions */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                  AI Suggestions
                </h3>
              </div>
              <div className="space-y-3">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-3 text-sm text-gray-700 dark:text-gray-300">
                    {suggestion}
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat with AI Mentor
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Activity
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'ai' ? 'bg-purple-500' :
                      activity.type === 'team' ? 'bg-blue-500' :
                      activity.type === 'project' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        {activity.text}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm flex items-center justify-center">
                View All Activity
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDashboard;