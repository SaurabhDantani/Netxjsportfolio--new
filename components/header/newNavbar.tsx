// 'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewNavBar() {
  const [modal, setModal] = useState(false);

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };
  const toggleMenu = () => setModal((prev) => !prev);
  return (
    <>
      <button
        onClick={() => setModal(true)}
      >
        <span className="relative block w-6 h-6">
          {/* Top Line */}
          <motion.span
            className="absolute top-0 left-0 h-0.5 w-full bg-white transition-all origin-center"
            animate={{ rotate: modal ? 45 : 0, y: modal ? 8 : 0 }}
          ></motion.span>
          
          <motion.span
            className="absolute top-1/2 left-0 h-0.5 w-full bg-white transition-all origin-center"
            animate={{ opacity: modal ? 0 : 1 }}
          ></motion.span>

          {/* Bottom Line */}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-all origin-center"
            animate={{ rotate: modal ? -45 : 0, y: modal ? -8 : 0 }}
          ></motion.span>

          </span>

      </button>

      <AnimatePresence>
        {modal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed z-20 inset-0 flex  min-h-screen px-4 py-8"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Modal Title
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Modal content goes here.
                </p>
                <div className="mt-4 flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                    onClick={toggleMenu}
                  >
                    Close
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
