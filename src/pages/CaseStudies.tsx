import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  client: string;
  title: string;
  founder: string;
  website?: string;
  result: string;
  description: {
    before: string[];
    implemented: string[];
    after: string[];
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "Outreach Insider",
    title: "Giving the Founder Time Back",
    founder: "Caiden",
    result: "More personal freedom, streamlined operations",
    description: {
      before: [
        "Caiden spent most of his time managing operations",
        "Limited focus on growth due to operational demands"
      ],
      implemented: [
        "Built a fully automated backend in Close.com",
        "Automated client onboarding, campaign tracking, and reporting"
      ],
      after: [
        "80% reduction in operational workload within 3 months",
        "Caiden stepped away from daily operations",
        "Took a vacation while the agency ran smoothly"
      ]
    }
  },
  {
    id: 2,
    client: "The Deal Lab",
    title: "Scaling to $400K/Month Seamlessly",
    founder: "Kellen",
    result: "Scalable systems, 6-month revenue growth",
    description: {
      before: [
        "Internal operations slowed growth significantly",
        "Manual client onboarding and fulfillment processes"
      ],
      implemented: [
        "Built a customized operational framework in HubSpot",
        "Automated client onboarding and streamlined fulfillment",
        "Improved team coordination with automated workflows"
      ],
      after: [
        "Scaled from $280K to $400K/month in 6 months",
        "Maintained operational efficiency during growth",
        "Reduced manual workload by 60%"
      ]
    }
  },
  {
    id: 3,
    client: "Core Conversions",
    title: "Rapid Growth in 90 Days",
    founder: "Nick",
    result: "3-month revenue and operational growth",
    description: {
      before: [
        "Operational bottlenecks slowing progress",
        "Inefficient lead management across channels",
        "Manual tracking and reporting processes"
      ],
      implemented: [
        "Built seamless workflow for cold email",
        "Integrated LinkedIn outreach and cold calling",
        "Automated lead tracking and reporting"
      ],
      after: [
        "Increased revenue by 40% in 120 days",
        "Cut operational time by 60%",
        "Handled 3x more leads without added stress"
      ]
    }
  },
  {
    id: 4,
    client: "Spitz PR",
    title: "From Negative to Positive",
    founder: "Carson",
    website: "https://spitzpr.com/",
    result: "From a failing agency to success",
    description: {
      before: [
        "Operating at a loss",
        "Overwhelmed with manual work",
        "Inefficient lead generation and client management"
      ],
      implemented: [
        "Full stack solution for lead generation",
        "Automated client onboarding system",
        "Streamlined reporting and tracking"
      ],
      after: [
        "Cut 30+ hours of manual work per week",
        "Increased close rate by 25%",
        "Improved fulfillment times by 40%",
        "DOUBLED revenue in 90 days"
      ]
    }
  }
];

const CaseStudies: React.FC = () => {
  const [activeStudy, setActiveStudy] = useState(1);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const handleStudyChange = (newId: number) => {
    setDirection(newId > activeStudy ? 1 : -1);
    setActiveStudy(newId);
  };

  const handleMobileClick = (id: number) => {
    setExpandedMobile(expandedMobile === id ? null : id);
  };

  return (
    <section className="relative py-12 lg:py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Case Studies
          </h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-white/70">
            Real results from real clients. See how we've helped businesses transform their operations and scale efficiently.
          </p>
        </motion.div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-4">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.02] backdrop-blur-sm"
            >
              <div
                onClick={() => handleMobileClick(study.id)}
                className="flex items-center justify-between p-6 cursor-pointer"
              >
                <div>
                  <h3 className="text-2xl font-semibold">{study.client}</h3>
                  <p className="mt-2 text-lg text-white/70">{study.title}</p>
                </div>
                <ChevronRight 
                  className={`h-6 w-6 transition-transform duration-300 ${
                    expandedMobile === study.id ? 'rotate-90' : ''
                  }`}
                />
              </div>
              
              <AnimatePresence>
                {expandedMobile === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-6">
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 rounded-full bg-white/10 text-base">
                          {study.id === 1 ? "CEO" : "Founder"}: {study.founder}
                        </span>
                        {study.website && (
                          <a 
                            href={study.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full bg-white/10 text-base hover:bg-white/20 active:bg-white/15 transition-colors"
                          >
                            Website
                          </a>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                          <h5 className="text-lg font-semibold text-white/90 mb-3">Before Automation:</h5>
                          <ul className="space-y-2 text-white/70">
                            {study.description.before.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                          <h5 className="text-lg font-semibold text-white/90 mb-3">Automation Implemented:</h5>
                          <ul className="space-y-2 text-white/70">
                            {study.description.implemented.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                          <h5 className="text-lg font-semibold text-white/90 mb-3">After Automation:</h5>
                          <ul className="space-y-2 text-white/70">
                            {study.description.after.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-[1fr,2fr] gap-8">
          <div className="flex flex-col gap-4">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                onClick={() => handleStudyChange(study.id)}
                className={`relative text-left p-8 rounded-xl border transition-all duration-300 ease-in-out cursor-pointer ${
                  activeStudy === study.id
                    ? 'border-white/30 bg-white/10 backdrop-blur-sm'
                    : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                } h-auto flex items-start`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{study.client}</h3>
                    <ChevronRight 
                      className={`h-6 w-6 transition-transform duration-300 ease-in-out ${
                        activeStudy === study.id ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                  <p className="mt-2 text-lg text-white/70">{study.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {caseStudies.map((study) => (
                study.id === activeStudy && (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, x: direction * 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 200 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="p-8"
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 rounded-full bg-white/10 text-lg">
                            Client: {study.client} {study.id === 1 ? "(Cold Email Agency)" : study.id === 3 ? "(Lead Gen)" : study.id === 4 ? "(PR Firm)" : ""}
                          </span>
                          <span className="px-4 py-2 rounded-full bg-white/10 text-lg">
                            {study.id === 1 ? "CEO" : "Founder"}: {study.founder}
                            {study.website && (
                              <> | <a href={study.website} target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-white/80">Website</a></>
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                          <h5 className="text-xl font-semibold text-white/90 mb-3">1. Before Automation:</h5>
                          <ul className="space-y-2 text-white/70 text-lg">
                            {study.description.before.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-3 mt-1.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                          <h5 className="text-xl font-semibold text-white/90 mb-3">2. Automation Implemented:</h5>
                          <ul className="space-y-2 text-white/70 text-lg">
                            {study.description.implemented.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-3 mt-1.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                          <h5 className="text-xl font-semibold text-white/90 mb-3">3. After Automation:</h5>
                          <ul className="space-y-2 text-white/70 text-lg">
                            {study.description.after.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-3 mt-1.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;