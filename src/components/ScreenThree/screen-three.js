import React, { useEffect } from "react";
import "./screen-three.css";
import TextOne from "../TextOne/text-one";
import TextTwo from "../TextTwo/text-two";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const ScreenThree = () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  useEffect(() => {
    // Text animation for the paragraph
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".paraSec", // Trigger element
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    const text = `Innovate With Ballerina provides an exclusive platform for university students to elevate their coding passion with the Ballerina programming language. This pioneering competition aims to drive the future of technology by fostering teamwork, innovation, and outstanding performance. Projects can be submitted via GitHub and will be evaluated by the WSO2 Ballerina team. Compelling rewards and certificates will be awarded for exceptional contributions.`; 

    const chars = text.split(""); // Splitting the text into characters

    // Typing animation for each character in the paragraph
    chars.forEach((char, i) => {
      tl1.to(".desc", {
        duration: 0.02, // Speed for each character
        text: {
          value: text.slice(0, i + 1), // Incrementally revealing the text
        },
        ease: "none",
      });
    });

    // SVG drawing animation
    tl1.to(".svg3", {
      duration: 2,
      opacity: 1,
      onStart: function () {
        gsap.fromTo(
          ".svg3 path",
          { strokeDasharray: "1000", strokeDashoffset: "1000" },
          { strokeDashoffset: "0", ease: "power1.inOut", duration: 2 }
        );
      },
    });

    // Rotating Vector.svg with scroll
    gsap.to(".vector-svg", {
      scrollTrigger: {
        trigger: ".main-screen-three", // Trigger when the user scrolls in the main screen
        start: "top center", // Start rotation when the top of the container reaches the center of the viewport
        end: "bottom top", // End rotation when the bottom of the container reaches the top of the viewport
        scrub: true, // Smooth animation based on scroll
      },
      rotation: 360, // Full rotation
      ease: "none",
    });
  }, []);

  return (
    <>
      <div className="main-screen-three">
        <TextOne className="text-one" />
        <div className="container-screen-three">
          <div className="big-container">
            <div className="box-start-container">
              <div className="boxes-container">
                <img
                  src="./boxes.png"
                  alt="box"
                  id="box"
                  style={{ height: "100%", width: "auto" }}
                />
              </div>
              <div className="boxes-container">
                <img
                  src="./Vector.svg"
                  alt="box"
                  id="box"
                  className="vector-svg" // Added class for the rotating SVG
                  style={{
                    height: "100%",
                    width: "auto",
                    marginTop: "50%",
                    marginLeft: "50%",
                  }}
                />
              </div>
            </div>
            <div className="center-container paraSec">
              <div className="browser-window">
                <div className="browser-header">
                  <div className="browser-buttons"></div>
                </div>
                <div className="content">
                  <div>
                    <img
                      src="./b1.png"
                      alt="ballerina"
                      style={{ scale: "0.5" }}
                    />
                  </div>
                  <p className="desc"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TextTwo />
      </div>

      {/* Mobile View */}
      <div className="mobile-responsive-view">
        <div className="mobile-center-container">
          <img
            src="./b1.png"
            alt="mobile-view"
            style={{ width: "70%", height: "auto" }}
          />
          <p className="mobile-desc-text">
            "Innovate With Ballerina" provides an exclusive platform for
            university students to elevate their coding passion with the
            Ballerina programming language. This pioneering competition aims to
            drive the future of technology by fostering teamwork, innovation,
            and outstanding performance. Projects can be submitted via GitHub
            and will be evaluated by the WSO2 Ballerina team. Compelling rewards
            and certificates will be awarded for exceptional contributions.
          </p>
        </div>
      </div>
    </>
  );
};

export default ScreenThree;
