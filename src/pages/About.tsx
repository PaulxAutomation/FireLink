import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Built By Sales Systems Engineers
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-auto"
        >
          <div className="p-8 sm:p-10 md:p-12 lg:p-16">
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                After years of building automated systems for high-growth companies, I discovered a critical gap
                in the market: sales teams were drowning in manual processes while marketers were becoming
                increasingly sophisticated.
              </p>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                The problem was clear—companies were investing heavily in lead generation but had chaotic,
                inefficient sales processes that wasted those expensive leads. I watched sales teams struggle
                with disconnected tools, inconsistent follow-up, and hours of unnecessary admin work.
              </p>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                So I built FireLink as the missing piece. We're sales systems engineers who:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/90 text-sm sm:text-base md:text-lg">
                <li>plug into your sales systems</li>
                <li>connect it with your organisation</li>
                <li>transform all those inputs into a fully automated sales machine</li>
              </ul>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                We don't make creatives. We don't run ads. We don't manage your social media. We don't do
                content strategy.
              </p>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                What we do is build sophisticated sales systems that operate with machine
                precision—eliminating human error, reducing administrative overhead, and ensuring every lead
                gets the perfect follow-up every time.
              </p>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                The result: Your marketing investments finally deliver their full potential, your sales team focuses
                exclusively on closing deals, and your revenue scales without adding headcount.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}