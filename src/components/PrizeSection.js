import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import '../stylesheets/PrizeSection.css';

gsap.registerPlugin(ScrollTrigger);

const PrizeSection = () => {
  useEffect(() => {
    // Move the vector image on scroll
    gsap.to('.p-vector-2', {
      x: () => window.innerWidth * 0.1,
      opacity: 0.7,
      ease: 'power1.inOut',
      scrollTrigger: {
        opacity: 1,
        trigger: '.prize-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        markers: false,
      },
    });

    gsap.fromTo('.p-vector-1', {
      y: -20, // Start above the element's default position
      opacity: 0, // Start invisible
    }, {
      y: 0, // Move down to default position
      opacity: 1, // Fade in
      duration: 1, // Animation duration
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.prize-section',
        start: 'top top',
        end: 'top center',
        scrub: 3,
        markers: false,
      },
    });

    gsap.to('.additional-prizes img', {
      rotation: 360,
      duration: 10,  // Time for one full rotation
      ease: 'linear',
      repeat: true, // Infinite repetition
    });

    // Fade in "Win Exciting Prizes" title
    gsap.fromTo('.prize-title span', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 2,
      // delay: 0.8,
      ease: 'power2.out',
    });

    // Trigger the entry of images and texts
    ScrollTrigger.create({
      trigger: '.prize-section',
      start: 'top center',
      onEnter: () => {
        // Slide in the images with faster animation
        gsap.fromTo('.prize-box img', { y: 500, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.8, // Faster animation
          ease: 'power3.out',
          stagger: 0.2,
        });

        // Slide in h3 and p with faster liquid motion
        gsap.fromTo('.prize-info h3, .prize-info p', {
          y: 100,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 1, // Faster animation
          ease: 'power2.out',
          stagger: 0.2,
        });

        // Fade in additional prizes faster
        gsap.fromTo('.additional-prizes', {
          opacity: 0,
        }, {
          opacity: 1,
          delay: 1.2,
          duration: 0.8, // Faster fade-in
        });
      }
    });
  }, []);

  return (
    <div className="prize-section">
      <div className="prize-title">
        <span className="win-exciting">Win Exciting</span>
        <span className="prizes">Prizes</span>
      </div>

      <div className='prize-line'>
        <div className="prize-set">
          <motion.div 
            className="card-1"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="prize-box first-place">
              <motion.div 
                className="prize-info"
                initial={{ opacity: 0, y: 100 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              >
                <h3>1st Place</h3>
                <p>Rs 150,000/-</p>
              </motion.div>
              <img src="/1st.png" alt="First Place" style={{ height: "410px" }} />
            </div>
          </motion.div>

          <motion.div 
            className="card-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <div className="prize-box second-place">
              <img src="/2nd.png" alt="Second Place" />
              <motion.div 
                className="prize-info"
                initial={{ opacity: 0, y: 100 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
              >
                <h3>2nd Place</h3>
                <p>Rs 100,000/-</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="card-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            <div className="prize-box third-place">
              <img src="/3rd.png" alt="Third Place" />
              <motion.div 
                className="prize-info"
                initial={{ opacity: 0, y: 100 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
              >
                <h3>3rd Place</h3>
                <p>Rs 75,000/-</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className='additional-prizes'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <img src="/p-star.svg" alt="star" />
          <span>Additonal Prizes of <br />Rs 10,000 /- Each </span>
          <span>for places 4th to 10th</span>
          <span>Valuable Certificates <br/>for every submission </span>
        </motion.div>
      </div>

      <div className="vector">
        <img src="/p-2-vector.svg" alt="Arrow" className="p-vector-2" />
        <img src="/p-1-vector.svg" alt="Arrow" className="p-vector-1" />
      </div>
    </div>
  );
};

export default PrizeSection;
