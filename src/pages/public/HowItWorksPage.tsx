import React from 'react';
import { ArrowRight, CheckCircle, Brain, Users, Trophy, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Sign up and tell us about your skills, experience, and interests. Our AI analyzes your profile to understand your strengths.',
      features: ['Skill assessment', 'Interest matching', 'Experience level detection'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
    },
    {
      number: '02',
      title: 'Find Your Perfect Team',
      description: 'Our AI-powered matching system connects you with teammates who complement your skills and share your passion.',
      features: ['Smart compatibility scoring', 'Role optimization', 'Team chemistry analysis'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop',
    },
    {
      number: '03',
      title: 'Build with AI Guidance',
      description: 'Get 24/7 mentorship from our AI assistant, plus access to expert mentors who provide personalized feedback.',
      features: ['Real-time code analysis', 'Architecture suggestions', 'Best practice recommendations'],
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop',
    },
    {
      number: '04',
      title: 'Present & Get Discovered',
      description: 'Showcase your project to judges and investors. Our AI helps optimize your presentation for maximum impact.',
      features: ['Presentation coaching', 'Pitch optimization', 'Investor matching'],
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&h=300&fit=crop',
    },
  ];

  const userJourneys = [
    {
      icon: Users,
      title: 'For Participants',
      description: 'Join hackathons, find teammates, and build amazing projects with AI assistance.',
      journey: [
        'Browse events and register',
        'Complete AI-powered team matching',
        'Access 24/7 AI mentor support',
        'Submit and present your project',
        'Get feedback and recognition',
      ],
    },
    {
      icon: Brain,
      title: 'For Mentors',
      description: 'Guide teams with AI insights and make meaningful impacts on innovation.',
      journey: [
        'Join as an expert mentor',
        'Get matched with relevant teams',
        'Access AI-powered team analytics',
        'Provide guidance through chat/video',
        'See your mentees succeed',
      ],
    },
    {
      icon: Trophy,
      title: 'For Judges',
      description: 'Evaluate projects efficiently with AI-powered analysis and scoring tools.',
      journey: [
        'Receive judge invitation',
        'Review AI-generated project summaries',
        'Use intelligent scoring interfaces',
        'Access comparative analytics',
        'Select winning projects',
      ],
    },
    {
      icon: TrendingUp,
      title: 'For Investors',
      description: 'Discover promising startups with AI-powered market analysis and scoring.',
      journey: [
        'Browse AI-scored startup projects',
        'Access detailed market analysis',
        'Connect with founding teams',
        'Review investment recommendations',
        'Make informed investment decisions',
      ],
    },
  ];

  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/20 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              How Eventhon{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover how our AI-powered platform transforms the way hackathons are organized, 
              participated in, and judged. From intelligent team matching to automated project analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Journey to Innovation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Follow these simple steps to join the future of hackathons
            </p>
          </motion.div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full rounded-2xl shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journeys */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tailored for Every Role
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Whether you're a participant, mentor, judge, or investor - we've got you covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userJourneys.map((journey, index) => (
              <motion.div
                key={journey.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl">
                    <journey.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {journey.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {journey.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {journey.journey.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center">
                      <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                          {stepIndex + 1}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              See It in Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Watch how our AI-powered features work in real hackathon scenarios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Team Matching',
                description: 'See how our algorithm finds perfect teammates',
                thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
              },
              {
                title: 'Real-time Mentoring',
                description: 'Experience 24/7 AI guidance in action',
                thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop',
              },
              {
                title: 'Smart Project Analysis',
                description: 'Discover how AI evaluates and scores projects',
                thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
              },
            ].map((demo, index) => (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={demo.thumbnail}
                    alt={demo.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {demo.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {demo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about getting started
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How does the AI team matching work?',
                answer: 'Our AI analyzes your skills, experience level, interests, and working style to find teammates who complement your strengths and share compatible goals. The algorithm considers technical skills, soft skills, and project preferences.',
              },
              {
                question: 'Is the AI mentor available 24/7?',
                answer: 'Yes! Our AI mentor is available around the clock to help with coding questions, project guidance, architecture decisions, and presentation tips. It learns from millions of successful projects to provide personalized advice.',
              },
              {
                question: 'How accurate is the AI project evaluation?',
                answer: 'Our AI evaluation system has achieved 95% accuracy compared to human judges. It analyzes code quality, innovation, presentation effectiveness, and market potential using advanced machine learning models.',
              },
              {
                question: 'Do I need to pay to participate?',
                answer: 'Basic participation is free and includes access to team matching and AI mentoring. Premium features for organizers and advanced analytics require a subscription, but participants always have free access to core features.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;