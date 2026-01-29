import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] bg-navy flex items-center justify-center"
        >
          <div className="text-center overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "power4.out" }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-navy font-bold text-2xl">
                ATC
              </div>
              <span className="text-4xl font-black text-white tracking-tight">
                ANKUL TAX
              </span>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-emerald origin-left w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
