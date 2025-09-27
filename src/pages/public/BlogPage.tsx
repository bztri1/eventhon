import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPage: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of AI-Powered Hackathons: What to Expect in 2024',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we approach hackathons, from intelligent team matching to automated project evaluation.',
    author: 'Sarah Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    tags: ['AI', 'Innovation', 'Future Tech'],
  };

  const posts = [
    {
      id: 2,
      title: 'How AI Mentorship is Changing Developer Education',
      excerpt: 'Discover how our AI mentor has helped over 10,000 developers improve their coding skills and project outcomes.',
      author: 'Marcus Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      tags: ['Education', 'AI Mentorship'],
    },
    {
      id: 3,
      title: 'Building Successful Remote Hackathon Teams',
      excerpt: 'Best practices for organizing and participating in virtual hackathons, with insights from our global community.',
      author: 'Dr. Emily Watson',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      date: 'March 8, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop',
      tags: ['Remote Work', 'Team Building'],
    },
    {
      id: 4,
      title: 'Investment Trends in Hackathon-Born Startups',
      excerpt: 'Analysis of $50M+ in funding raised by startups that began as hackathon projects on our platform.',
      author: 'Alex Thompson',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      date: 'March 5, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop',
      tags: ['Investment', 'Startups'],
    },
    {
      id: 5,
      title: 'The Science Behind Smart Team Matching',
      excerpt: 'Deep dive into the machine learning algorithms that power our team compatibility scoring system.',
      author: 'Sarah Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      date: 'March 2, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['Machine Learning', 'Algorithms'],
    },
    {
      id: 6,
      title: 'Community Spotlight: Most Innovative Projects of 2024',
      excerpt: 'Showcasing the most creative and impactful projects built on Eventhon this year.',
      author: 'Marcus Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      date: 'February 28, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
      tags: ['Community', 'Showcase'],
    },
    {
      id: 7,
      title: 'Getting Started: Your First Hackathon with AI Support',
      excerpt: 'A complete guide for newcomers on how to make the most of AI-powered features in your first hackathon.',
      author: 'Dr. Emily Watson',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      date: 'February 25, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      tags: ['Beginner Guide', 'AI Tools'],
    },
  ];

  const categories = [
    { name: 'AI & Machine Learning', count: 12 },
    { name: 'Community', count: 8 },
    { name: 'Education', count: 6 },
    { name: 'Investment', count: 4 },
    { name: 'Product Updates', count: 9 },
    { name: 'Best Practices', count: 7 },
  ];

  const tags = ['AI', 'Hackathons', 'Innovation', 'Startups', 'Machine Learning', 'Community', 'Education', 'Investment', 'Remote Work'];

  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Eventhon{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Insights, stories, and updates from the world of AI-powered hackathons. 
              Learn from experts, discover new trends, and stay ahead of the curve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Article</h2>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={featuredPost.authorAvatar}
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {featuredPost.author}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Posts</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {post.author}
                            </p>
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                              <Calendar className="h-3 w-3 mr-1" />
                              {post.date}
                              <span className="mx-1">•</span>
                              <Clock className="h-3 w-3 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
                  Load More Posts
                </button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80">
              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white mb-8"
              >
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-indigo-100 text-sm mb-4">
                  Get the latest insights and updates delivered to your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 text-sm focus:outline-none"
                  />
                  <button className="bg-white text-indigo-600 px-4 py-2 rounded-r-lg hover:bg-gray-100 transition-colors font-medium text-sm">
                    Subscribe
                  </button>
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm mb-8"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <Link
                        to={`/blog/category/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {category.name}
                      </Link>
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        ({category.count})
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog/tag/${tag.toLowerCase()}`}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;