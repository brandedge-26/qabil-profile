'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';

export default function FloatingDownloadButton() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;
      setVisible(scrollingUp && currentScrollY > 80);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="flex items-center gap-3 bg-white border-t border-gray-200 shadow-lg px-4 py-3"
          >
            <a
              href="/pdf/Qabil_New_Profile.pdf"
              download="Qabil_New_Profile.pdf"
              className="flex-1 flex items-center justify-center gap-2 bg-[#28166F] text-white text-sm font-semibold py-3 rounded-full"
            >
              <Download size={16} />
              Download PDF
            </a>
            <a
              href="https://wa.me/923041114566"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-green-500 hover:bg-green-600 transition-colors text-white shrink-0"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
