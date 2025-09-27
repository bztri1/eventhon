import React from 'react';
import { Users, MessageCircle, Video, Brain, Calendar, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const MentorDashboard: React.FC = () => {
  const stats = [
    { name: 'Active Teams', value: '8', change: '+2', changeType: 'increase', icon: Users },
    { name: 'Sessions This Week', value: '12', change: '+3', changeType: 'increase', icon: Video },
    { name: 'Messages Exchanged', value: '94', change: '+21', changeType: 'increase', icon: MessageCircle },
    { name: 'AI Recommendations', value: '15', change: '+5', changeType: 'increase', icon: Brain },
  ];

  const myTeams = [
    {
      id: 1,
      name: 'AI Healthcare Pioneers',
      event: 'AI Innovation Challenge 2024',
      members: 4,
      progress: 78,
      lastContact: '2 hours ago',
      status: 'active',
      priority: 'high',
    },
    {
      id: 2,
      name: 'Green Tech Innovators',
      event: 'Sustainable Tech Hackathon',
      members: 3,
      progress: 45,
      lastContact: '1 day ago',
      status: 'needs_attention',
      priority: 'medium',
    },
    {
      id: 3,
      name: 'FinTech Disruptors',
      event: 'FinTech Revolution',
      members: 5,
      progress: 92,
      lastContact: '3 hours ago',
      status: 'active',
      priority: 'low',
    },
  ];

  const upcomingSessions = [
    {
      id: 1,
      team: 'AI Healthcare Pioneers',
      time: '2:00 PM Today',
      type: 'Video Call',
      topic: 'Code Review & Architecture Discussion',
    },
    {
      id: 2,
      team: 'Green Tech Innovators',
      time: '10:00 AM Tomorrow',
      type: 'Chat Session',
      topic: 'Project Planning & Milestone Setup',
    },
  ];

  const aiRecommendations = [
    {
      team: 'AI Healthcare Pioneers',
      recommendation: 'Team is struggling with API integration - consider scheduling a technical deep-dive session',
      priority: 'high',
    },
    {
      team: 'Green Tech Innovators',
      recommendation: 'Great progress on UI/UX - suggest focusing on backend optimization next',
      priority: 'medium',
    },
    {
      team: 'FinTech Disruptors',
      recommendation: 'Team is ahead of schedule - they might benefit from advanced security best practices',
      priority: 'low',
    },
  ];

  const recentMessages = [
    {
      id: 1,
      team: 'AI Healthcare Pioneers',
      member: 'Sarah',
      message: 'Thanks for the feedback on our ML model! We\'ve implemented your suggestions.',
      time: '30 min ago',
      unread: true,
    },
    {
      id: 2,
      team: 'Green Tech Innovators',
      member: 'Mike',
      message: 'Could you review our database schema when you have a chance?',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 3,
      team: 'FinTech Disruptors',
      member: 'Alex',
      message: 'Great session yesterday! The deployment strategy is much clearer now.',
      time: '1 day ago',
      unread: false,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Mentor Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Guide and support your hackathon teams with AI-powered insights
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            Community Chat
          </button>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Schedule Session
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
                  {stat.change} from last week
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
        {/* My Teams */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                My Teams
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {myTeams.map((team) => (
                <div key={team.id} className="border border-gray-200 dark:border-slate-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {team.name}
                        </h3>
                        <span className={`w-2 h-2 rounded-full ${
                          team.priority === 'high' ? 'bg-red-500' :
                          team.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {team.event}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {team.members} members
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {team.lastContact}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      team.status === 'active' 
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                        : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {team.status === 'active' ? 'Active' : 'Needs Attention'}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{team.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          team.progress >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                          team.progress >= 50 ? 'bg-gradient-to-r from-blue-500 to-indigo-600' :
                          'bg-gradient-to-r from-yellow-500 to-orange-600'
                        }`}
                        style={{ width: `${team.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm">
                        Chat
                      </button>
                      <button className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm">
                        Video Call
                      </button>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-sm">
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
          {/* AI Recommendations */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                  AI Recommendations
                </h3>
              </div>
              <div className="space-y-3">
                {aiRecommendations.map((rec, index) => (
                  <div key={index} className={`p-3 rounded-lg text-sm ${
                    rec.priority === 'high' 
                      ? 'bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500 text-red-800 dark:text-red-200'
                      : rec.priority === 'medium'
                      ? 'bg-yellow-100 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200'
                      : 'bg-green-100 dark:bg-green-900/20 border-l-4 border-green-500 text-green-800 dark:text-green-200'
                  }`}>
                    <p className="font-medium mb-1">{rec.team}</p>
                    <p>{rec.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Upcoming Sessions
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="border-l-4 border-indigo-500 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {session.team}
                      </p>
                      <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                        {session.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {session.time}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {session.topic}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm">
                View All Sessions
              </button>
            </div>
          </div>

          {/* Recent Messages */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Messages
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className={`p-3 rounded-lg ${
                    message.unread 
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700' 
                      : 'bg-gray-50 dark:bg-slate-700'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {message.team}
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      <span className="font-medium">{message.member}:</span> {message.message}
                    </p>
                    {message.unread && (
                      <div className="flex items-center text-xs text-indigo-600 dark:text-indigo-400">
                        <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-1" />
                        Unread
                      </div>
                    )}
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

export default MentorDashboard;