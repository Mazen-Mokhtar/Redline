'use client';
import {
  UserCircleIcon,
  ShoppingCartIcon,
  WalletIcon,
  BellIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  ExclamationTriangleIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const carVariants = {
    collapsed: {
      x: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    expanded: {
      x: [0, 10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const generateSmokeVariants = (index: number) => ({
    initial: { 
      opacity: 0, 
      scale: 0.2, 
      x: -5, 
      y: 0,
      filter: "blur(0px)"
    },
    animate: {
      opacity: [0, 0.6, 0],
      scale: [0.3, 2, 3],
      x: [-5, -30 - (index * 10), -40 - (index * 15)],
      y: [0, -(index * 5), -(index * 10)],
      filter: ["blur(2px)", "blur(4px)", "blur(6px)"],
      transition: {
        duration: 1.2,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: index * 0.1
      }
    }
  });

  const contentVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: -5,
      transition: {
        duration: 0.1,
        ease: "easeIn"
      }
    }
  };

  const smokeParticles = Array.from({ length: 5 }, (_, i) => ({
    variants: generateSmokeVariants(i),
    className: `absolute -left-${6 + i * 2} top-1/2 -translate-y-1/2`
  }));

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} bg-gray-900 min-h-screen p-4 relative transition-all duration-100 ease-out`}>
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-gray-900 rounded-full p-1.5 shadow-lg overflow-visible hover:shadow-red-500/20"
      >
        <div className="relative">
          <motion.svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={carVariants}
            animate={isCollapsed ? "collapsed" : "expanded"}
            className="text-red-500"
          >
            <path
              d="M26 16H6c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M22 8h-8c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M21 8v3M13 8v3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="9" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="23" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M24 11h1M26 11h1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.svg>

          {!isCollapsed && smokeParticles.map((particle, index) => (
            <motion.div
              key={index}
              className={particle.className}
              initial="initial"
              animate="animate"
              variants={particle.variants}
            >
              <div className="w-4 h-4 bg-gradient-to-t from-gray-400/60 to-gray-400/20 rounded-full" />
            </motion.div>
          ))}
        </div>
      </button>

      <div className="flex items-center gap-3 mb-8">
        <UserCircleIcon className="h-12 w-12 text-gray-400" />
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key="profile"
            >
              <h3 className="text-white font-medium">MR.FAROK</h3>
              <p className="text-sm text-gray-400">0.00</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mb-8">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key="market"
              className="flex items-center justify-between mb-4"
            >
              <span className="text-gray-400 font-medium">MARKET</span>
              <div className="flex gap-2">
                <ShoppingCartIcon className="sidebar-icon" />
                <WalletIcon className="sidebar-icon" />
                <BellIcon className="sidebar-icon" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <nav className="space-y-2">
        <Link href="/cars" className="nav-item">
          <TruckIcon className="sidebar-icon" />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                CARS
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <Link href="/bikes" className="nav-item">
          <BuildingStorefrontIcon className="sidebar-icon" />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                BIKES
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <Link href="/tires" className="nav-item">
          <Square3Stack3DIcon className="sidebar-icon" />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                TIRES
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <Link href="/check-cars" className="nav-item">
          <WrenchScrewdriverIcon className="sidebar-icon" />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                CHECK CARS
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <Link href="/engine-edit" className="nav-item">
          <CogIcon className="sidebar-icon" />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                ENGINE EDIT
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <Link href="/malfunction" className="nav-item">
          <ExclamationTriangleIcon className="sidebar-icon" />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                MALFUNCTION
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <Link href="/modification-parts" className="nav-item">
          <Square3Stack3DIcon className="sidebar-icon" />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                CAR MODIFICATION PARTS
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </nav>
    </div>
  );
}