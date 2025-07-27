import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import { motion } from 'framer-motion';

const heading = "Vision Boost - AI Image Enhancer";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

function App() {
  const fullText = 'Enhance your images with AI';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  // ✅ State to hold enhanced image URL
  const [enhancedImage, setEnhancedImage] = useState(null);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Reset to loop infinitely
      setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 2000);
    }
  }, [index, fullText]);

  return (
    <div className='flex flex-col h-full items-center justify-center bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <motion.h1
          className="text-5xl font-bold text-gray-800 mb-2 flex flex-wrap justify-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {heading.split("").map((char, index) => (
            <motion.span key={index} variants={letter} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <p className='text-lg text-gray-600 font-medium'>
          {displayedText}
          <span className="animate-pulse"></span>
        </p>
      </div>

      {/* ✅ Pass setEnhancedImage down to Home */}
      <Home setEnhancedImage={setEnhancedImage} />

      {/* ✅ Show download button when enhanced image is available */}
      {enhancedImage && (
        <a
          href={enhancedImage}
          download="enhanced-image.png"
          className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download Enhanced Image
        </a>
      )}

      <footer className="w-screen text-center mt-9 border-t border-gray-300 h-6">
        <div className="text-sm text-gray-600 mt-2">
          Upload an image to get started 🚀
          <p className="text-xs mt-1">
            Powered by <span className="font-semibold">@Sahil Jadhav</span> &copy; 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
