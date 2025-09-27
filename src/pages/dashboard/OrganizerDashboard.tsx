import React from 'react';
import { Calendar, Users, TrendingUp, Brain, Plus, BarChart3, Settings, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const OrganizerDashboard: React.FC = () => {
  const stats = [
    { name: 'Active Events', value: '5', change: '+2', changeType: 'increase', icon: Calendar },
    { name: 'Total Participants', value: '1,247', change: '+156', changeType: 'increase', icon: Users },
    { name: 'Avg. Engagement', value: '84%', change: '+12%', changeType: 'increase', icon: TrendingUp },
    { name: 'AI Insights Generated', value: '89', change: '+23', changeType: 'increase', icon: Brain },
  ];

  const events = [
    {
      id: 1,
      name: 'AI Innovation Challenge 2024',
      participants: 234,
      status: 'Live',
      endDate: '2024-03-20',
      engagement: 92,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 2,
      name: 'Sustainable Tech Hackathon',
      participants: 178,
      status: 'Registration',
      endDate: '2024-03-25',
      engagement: 78,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 3,
      name: 'FinTech Revolution',
      participants: 156,
      status: 'Planning',
      endDate: '2024-04-01',
      engagement: 65,
      color: 'from-purple-500 to-violet-600',
    },
  ];

  const aiInsights = [
    {
      type: 'success',
      message: 'Team formation rate is 23% higher than average - great job on the matching algorithm!',
    },
    {
      type: 'warning',
      message: 'Consider adding more mentors to the AI Innovation Challenge - current ratio is 1:15',
    },
    {
      type: 'info',
      message: 'Participants are requesting more workshops on machine learning fundamentals',
    },
  ];

  const topProjects = [
    {
      name: 'AI-Powered Healthcare Assistant',
      team: 'MedTech Innovators',
      score: 94,
      category: 'Healthcare',
    },
    {
      name: 'Smart City Traffic Optimizer',
      team: 'Urban Solutions',
      score: 91,
      category: 'Smart Cities',
    },
    {
      name: 'Sustainable Supply Chain Tracker',
      team: 'Green Logistics',
      score: 88,
      category: 'Sustainability',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Organizer Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage your hackathon events with AI-powered insights
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </button>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Create Event
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
        {/* Events List */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Your Events
                </h2>
                <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm">
                  View All
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {events.map((event) => (
                <div key={event.id} className="border border-gray-200 dark:border-slate-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {event.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {event.participants} participants
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Ends {event.endDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'Live' 
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                          : event.status === 'Registration'
                          ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {event.status}
                      </span>
                      <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Engagement</span>
                      <span>{event.engagement}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${event.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${event.engagement}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm">
                        Manage
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-sm">
                        Analytics
                      </button>
                    </div>
                    <button className="flex items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
                      <BarChart3 className="h-4 w-4 mr-1" />
                      View Stats
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Insights */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                  AI Insights
                </h3>
              </div>
              <div className="space-y-3">
                {aiInsights.map((insight, index) => (
                  <div key={index} className={`p-3 rounded-lg text-sm ${
                    insight.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                      : insight.type === 'warning'
                      ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200'
                      : 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200'
                  }`}>
                    {insight.message}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Projects */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Top Projects This Month
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {project.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {project.team} • {project.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-indigo-600 dark:text-indigo-400">
                        {project.score}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Score
                      </p>
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

export default OrganizerDashboard;