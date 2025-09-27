import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Users,
  Calendar,
  Trophy,
  MessageCircle,
  TrendingUp,
  Settings,
  Brain,
  Video,
  Target,
  Shield,
  BarChart3,
  UserCheck
} from 'lucide-react';

const DashboardSidebar: React.FC = () => {
  const { user } = useAuth();

  const getNavItems = () => {
    const baseItems = [
      { name: 'Overview', icon: Home, href: `/dashboard/${user?.role}` },
    ];

    switch (user?.role) {
      case 'participant':
        return [
          ...baseItems,
          { name: 'My Teams', icon: Users, href: '/dashboard/participant/teams' },
          { name: 'Events', icon: Calendar, href: '/dashboard/participant/events' },
          { name: 'Projects', icon: Trophy, href: '/dashboard/participant/projects' },
          { name: 'AI Mentor', icon: Brain, href: '/dashboard/participant/ai-mentor' },
          { name: 'Messages', icon: MessageCircle, href: '/dashboard/participant/messages' },
        ];
      
      case 'organizer':
        return [
          ...baseItems,
          { name: 'My Events', icon: Calendar, href: '/dashboard/organizer/events' },
          { name: 'Teams', icon: Users, href: '/dashboard/organizer/teams' },
          { name: 'Analytics', icon: TrendingUp, href: '/dashboard/organizer/analytics' },
          { name: 'AI Insights', icon: Brain, href: '/dashboard/organizer/ai-insights' },
          { name: 'Settings', icon: Settings, href: '/dashboard/organizer/settings' },
        ];
      
      case 'mentor':
        return [
          ...baseItems,
          { name: 'My Teams', icon: Users, href: '/dashboard/mentor/teams' },
          { name: 'Sessions', icon: Video, href: '/dashboard/mentor/sessions' },
          { name: 'Community', icon: MessageCircle, href: '/dashboard/mentor/community' },
          { name: 'AI Assistant', icon: Brain, href: '/dashboard/mentor/ai-assistant' },
        ];
      
      case 'investor':
        return [
          ...baseItems,
          { name: 'Startups', icon: Target, href: '/dashboard/investor/startups' },
          { name: 'Portfolio', icon: TrendingUp, href: '/dashboard/investor/portfolio' },
          { name: 'AI Analysis', icon: Brain, href: '/dashboard/investor/ai-analysis' },
          { name: 'Messages', icon: MessageCircle, href: '/dashboard/investor/messages' },
        ];
      
      case 'admin':
        return [
          ...baseItems,
          { name: 'Users', icon: UserCheck, href: '/dashboard/admin/users' },
          { name: 'Events', icon: Calendar, href: '/dashboard/admin/events' },
          { name: 'Analytics', icon: BarChart3, href: '/dashboard/admin/analytics' },
          { name: 'Moderation', icon: Shield, href: '/dashboard/admin/moderation' },
          { name: 'System', icon: Settings, href: '/dashboard/admin/system' },
        ];
      
      default:
        return baseItems;
    }
  };

  const navItems = getNavItems();

  return (
    <nav className="w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 min-h-[calc(100vh-73px)]">
      <div className="p-4">
        <div className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-r-2 border-indigo-600 dark:border-indigo-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700/50 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* AI Chat Widget */}
      <div className="p-4 mt-8">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
          <div className="flex items-center space-x-2 mb-2">
            <Brain className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span className="font-medium text-sm text-indigo-900 dark:text-indigo-100">
              AI Assistant
            </span>
          </div>
          <p className="text-xs text-indigo-600 dark:text-indigo-300 mb-3">
            Need help? Ask me anything!
          </p>
          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-medium py-2 rounded-md transition-all duration-200">
            Chat Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardSidebar;