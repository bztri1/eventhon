import React from 'react';
import { Check, X, Sparkles, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      icon: Sparkles,
      price: '$0',
      period: 'forever',
      description: 'Perfect for participants and small events',
      features: [
        'Join unlimited hackathons',
        'AI team matching',
        'Basic AI mentor support',
        'Project submission & tracking',
        'Community access',
        'Mobile app access',
      ],
      limitations: [
        'Limited AI mentor queries (50/month)',
        'Basic analytics only',
        'Community support',
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Pro',
      icon: Crown,
      price: '$29',
      period: 'per month',
      description: 'For serious organizers and mentors',
      features: [
        'Everything in Free',
        'Organize unlimited events',
        'Advanced AI analytics',
        'Unlimited AI mentor queries',
        'Priority support',
        'Custom branding',
        'Advanced team insights',
        'Judge management tools',
        'Investor networking',
        'API access',
      ],
      limitations: [
        'Up to 500 participants per event',
      ],
      cta: 'Start Pro Trial',
      popular: true,
      color: 'from-indigo-600 to-purple-600',
    },
    {
      name: 'Enterprise',
      icon: Zap,
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations and institutions',
      features: [
        'Everything in Pro',
        'Unlimited participants',
        'Dedicated AI models',
        'White-label solution',
        'Custom integrations',
        'Dedicated support team',
        'SLA guarantees',
        'Advanced security',
        'On-premise deployment',
        'Custom features',
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-emerald-600 to-teal-600',
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.',
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 30 days after cancellation. You can export all your data or reactivate your account during this period.',
    },
    {
      question: 'Do you offer discounts for students or nonprofits?',
      answer: 'Yes! We offer 50% discounts for students and educational institutions, and special pricing for nonprofit organizations. Contact us for details.',
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'Yes, we offer a 14-day free trial for all paid plans. No credit card required, and you can cancel anytime during the trial.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'Free users get community support, Pro users get email support with 24-hour response time, and Enterprise customers get dedicated support with SLA.',
    },
  ];

  const addOns = [
    {
      name: 'Additional AI Compute',
      description: 'Extra AI processing power for large events',
      price: '$0.10 per query',
    },
    {
      name: 'Premium Mentors',
      description: 'Access to industry expert mentors',
      price: '$99/month',
    },
    {
      name: 'Advanced Analytics',
      description: 'Deep insights and custom reports',
      price: '$49/month',
    },
    {
      name: 'API Access',
      description: 'Integrate with your existing tools',
      price: '$199/month',
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
              Simple,{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Choose the perfect plan for your hackathon needs. Start free and scale as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-indigo-500 scale-105' : 'hover:ring-1 hover:ring-gray-200 dark:hover:ring-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${plan.color} rounded-xl mb-4`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-center">
                      <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-500 dark:text-gray-400">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/register'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:shadow-lg'
                      : 'bg-gray-100 dark:bg-slate-600 hover:bg-gray-200 dark:hover:bg-slate-500 text-gray-900 dark:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Add-ons
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Enhance your plan with additional features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {addon.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {addon.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {addon.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
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
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6"
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of innovators building the future with AI-powered hackathons
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;