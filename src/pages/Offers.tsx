import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const Section = ({ 
  title, 
  subtitle,
  className = "",
  children 
}: { 
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <section className={`relative py-12 lg:py-24 overflow-hidden ${className}`} id={title.toLowerCase().replace(/\s+/g, '-')}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 lg:mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          {subtitle || title}
        </h2>
      </motion.div>
      {children}
    </div>
  </section>
);

const Card = ({
  title,
  description,
  delay = 0,
  className = ""
}: {
  title: string;
  description: string;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`group relative p-6 sm:p-8 lg:p-8 rounded-2xl border border-white/10 bg-white/[0.02] ${className} lg:backdrop-blur-sm lg:hover:bg-white/[0.04] lg:transition-all lg:duration-300 h-full`}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-500 rounded-2xl" />
    <div className="relative z-10 flex flex-col h-full">
      <h3 className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-4 sm:mb-6">
        {title}
      </h3>
      <p className="text-lg sm:text-xl text-white/80 leading-relaxed lg:group-hover:text-white lg:transition-colors lg:duration-300 flex-grow">
        {description}
      </p>
    </div>
  </motion.div>
);

const FeatureList = ({
  items,
  delay = 0
}: {
  items: string[];
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="space-y-4 sm:space-y-6"
  >
    {items.map((item, index) => (
      <div 
        key={index}
        className="flex items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-xl border border-white/10 bg-white/[0.02] lg:backdrop-blur-sm lg:hover:bg-white/[0.04] lg:transition-all lg:duration-300 min-h-[5rem]"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0">
          <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-white/70" />
        </div>
        <span className="text-lg sm:text-xl text-white/80 leading-relaxed">{item}</span>
      </div>
    ))}
  </motion.div>
);

const Divider = () => (
  <div className="relative py-8 lg:py-12">
    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  </div>
);

export default function Offers() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {}; // Non-blocking load
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
      <Section 
        title="System Analysis" 
        subtitle="Your Sales Process Is Costing You Money"
      >
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
          <Card
            title="Sales Teams Drowning in Admin"
            description="Your closers spend 70% of their time on tasks that don't generate revenue"
            delay={0.1}
          />
          <Card
            title="Process Chaos"
            description="When your operations rely on humans remembering tasks, things inevitably fall through cracks"
            delay={0.2}
          />
          <Card
            title="Manual Proposals Killing Momentum"
            description="Prospects wait days for quotes that should take minutes"
            delay={0.3}
          />
          <Card
            title="Inconsistent Follow-Up"
            description="Without automation, 63% of interested leads never get proper follow-up"
            delay={0.4}
          />
        </div>
      </Section>

      <Divider />

      <Section title="Automated Systems">
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] lg:backdrop-blur-sm overflow-hidden p-6 sm:p-8 lg:p-12">
          <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
          
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              We don't recommend software. We build complete, powerful systems for you at every step of the sales cycle.
            </p>
          </div>

          <FeatureList
            items={[
              "Done For You: We do the technical stuff so you can focus on 2 things: Selling more & scaling faster",
              "CRM Automation: Transform your CRM from a contact list into an automated sales engine",
              "Intelligent Follow-Up: Every lead gets perfect follow-up timing without manual intervention",
              "Instant Proposals: Generate professional, customized quotes the moment a prospect shows interest",
              "Seamless Onboarding: New clients receive all materials automatically after payment"
            ]}
          />
        </div>
      </Section>

      <Divider />

      <Section title="Revenue Engine">
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] lg:backdrop-blur-sm overflow-hidden p-6 sm:p-8 lg:p-12">
          <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
          
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Transform your manual sales process into a fully automated revenue machine. Your team will close more deals while doing less work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            <FeatureList
              items={[
                "CRM setup with automated tracking",
                "Complete pipeline visibility",
                "AI-powered follow-up sequences"
              ]}
              delay={0.1}
            />
            <FeatureList
              items={[
                "Instant proposal generation",
                "Automated lead qualification",
                "24/7 sales operations"
              ]}
              delay={0.2}
            />
            <FeatureList
              items={[
                "Seamless client onboarding",
                "Automated task management",
                "Real-time performance tracking"
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </Section>

      <Divider />

      <Section 
        title="Contact"
        subtitle="See how we can automate your sales cycle"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Book a 15-minute systems assessment to find out exactly where your sales team is burning leads and leaking profits.
            </p>
          </div>
          
          <iframe
            data-tally-src="https://tally.so/embed/3yzxax?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="542"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="FireLink Contact form"
            className="rounded-xl border border-white/10 bg-white/5 transform-gpu hover:border-white/20 transition-colors duration-300"
          />
        </div>
      </Section>
    </div>
  );
}