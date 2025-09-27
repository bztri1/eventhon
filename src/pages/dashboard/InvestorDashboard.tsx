import React from 'react';
import { TrendingUp, Target, Brain, BarChart3, Star, Filter, Eye, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const InvestorDashboard: React.FC = () => {
  const stats = [
    { name: 'Startups Reviewed', value: '156', change: '+23', changeType: 'increase', icon: Target },
    { name: 'Potential Investments', value: '12', change: '+4', changeType: 'increase', icon: Star },
    { name: 'AI Score Average', value: '8.3/10', change: '+0.7', changeType: 'increase', icon: Brain },
    { name: 'Total Deal Value', value: '$2.4M', change: '+$800K', changeType: 'increase', icon: DollarSign },
  ];

  const topStartups = [
    {
      id: 1,
      name: 'HealthAI Diagnostics',
      description: 'AI-powered medical imaging analysis for early disease detection',
      category: 'Healthcare',
      aiScore: 9.4,
      marketScore: 8.9,
      teamScore: 9.1,
      fundingGoal: '$1.5M',
      stage: 'Pre-Seed',
      team: 'Dr. Sarah Chen, Marcus Kim, Alex Thompson',
      tags: ['AI', 'Healthcare', 'Computer Vision'],
    },
    {
      id: 2,
      name: 'GreenLogistics Pro',
      description: 'Sustainable supply chain optimization using machine learning',
      category: 'Logistics',
      aiScore: 8.7,
      marketScore: 9.2,
      teamScore: 8.5,
      fundingGoal: '$800K',
      stage: 'Seed',
      team: 'Emma Rodriguez, John Davis, Lisa Wang',
      tags: ['Sustainability', 'ML', 'Supply Chain'],
    },
    {
      id: 3,
      name: 'FinSecure Analytics',
      description: 'Real-time fraud detection for digital banking platforms',
      category: 'FinTech',
      aiScore: 9.1,
      marketScore: 8.8,
      teamScore: 9.3,
      fundingGoal: '$2.2M',
      stage: 'Series A',
      team: 'Michael Park, Jennifer Liu, David Kumar',
      tags: ['FinTech', 'Security', 'AI'],
    },
  ];

  const aiInsights = [
    {
      type: 'opportunity',
      title: 'High-Potential Healthcare Startups',
      message: 'We\'ve identified 3 healthcare AI startups with 9+ scores that match your investment criteria',
      priority: 'high',
    },
    {
      type: 'market',
      title: 'Growing Trend: Sustainability Tech',
      message: 'Sustainable technology startups have shown 40% higher success rates in the last quarter',
      priority: 'medium',
    },
    {
      type: 'timing',
      title: 'Optimal Investment Window',
      message: 'HealthAI Diagnostics is closing their funding round in 2 weeks - consider accelerating review',
      priority: 'urgent',
    },
  ];

  const marketTrends = [
    { sector: 'AI/ML', growth: '+34%', deals: 23, avgValuation: '$4.2M' },
    { sector: 'FinTech', growth: '+18%', deals: 15, avgValuation: '$3.8M' },
    { sector: 'Healthcare', growth: '+28%', deals: 19, avgValuation: '$5.1M' },
    { sector: 'Sustainability', growth: '+45%', deals: 11, avgValuation: '$2.9M' },
  ];

  const portfolioPerformance = [
    { company: 'Neural Networks Inc.', investment: '$500K', currentValue: '$2.1M', growth: '+320%' },
    { company: 'CleanTech Solutions', investment: '$750K', currentValue: '$1.8M', growth: '+140%' },
    { company: 'DataStream Analytics', investment: '$300K', currentValue: '$680K', growth: '+127%' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Investment Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Discover promising startups with AI-powered investment analysis
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Market Analysis
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
                  {stat.change} this month
                </p>
              </div>
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/20 rounded-xl">
                <stat.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Startups */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Top-Rated Startups
                </h2>
                <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm">
                  View All
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {topStartups.map((startup) => (
                <div key={startup.id} className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {startup.name}
                        </h3>
                        <span className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-md text-xs font-medium">
                          {startup.category}
                        </span>
                        <span className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-md text-xs font-medium">
                          {startup.stage}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {startup.description}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        Team: {startup.team}
                      </p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                        {startup.aiScore}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        AI Score
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {startup.marketScore}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Market
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {startup.teamScore}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Team
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                        {startup.fundingGoal}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Seeking
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {startup.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm">
                        View Details
                      </button>
                      <button className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm">
                        Contact Team
                      </button>
                    </div>
                    <button className="flex items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
                      <Star className="h-4 w-4 mr-1" />
                      Add to Watchlist
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
                  AI Investment Insights
                </h3>
              </div>
              <div className="space-y-3">
                {aiInsights.map((insight, index) => (
                  <div key={index} className={`p-3 rounded-lg text-sm ${
                    insight.priority === 'urgent' 
                      ? 'bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500 text-red-800 dark:text-red-200'
                      : insight.priority === 'high'
                      ? 'bg-orange-100 dark:bg-orange-900/20 border-l-4 border-orange-500 text-orange-800 dark:text-orange-200'
                      : 'bg-blue-100 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-200'
                  }`}>
                    <p className="font-medium mb-1">{insight.title}</p>
                    <p>{insight.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Market Trends */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Market Trends
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {marketTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {trend.sector}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {trend.deals} deals • Avg: {trend.avgValuation}
                      </p>
                    </div>
                    <div className={`text-right font-bold text-sm ${
                      trend.growth.startsWith('+') 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {trend.growth}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Performance */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Portfolio Performance
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {portfolioPerformance.map((company, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {company.company}
                    </p>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>Invested: {company.investment}</span>
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        {company.growth}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1">
                      Current: {company.currentValue}
                    </p>
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

export default InvestorDashboard;