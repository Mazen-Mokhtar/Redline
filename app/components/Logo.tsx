'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex justify-center items-baseline space-x-1"
    >
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold tracking-tight"
      >
        Red
      </motion.span>
      <motion.div className="relative">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-4xl handwritten-text neon-glow"
        >
          LINE
        </motion.span>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.6,
            ease: [0.37, 0, 0.63, 1] 
          }}
        >
          <motion.span
            className="block w-full h-full border-b-2 border-red-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.6,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}