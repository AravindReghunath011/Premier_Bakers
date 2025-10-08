import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AboutUs from "../AboutUs/page";
import Card from "../Card/page";
import ReviewSection from "../Feedback/page";
import Footer from "../Footer/page";
import Header from "../Header/page";
import ProfessionalLeaders from "../Members/page";
import ChooseYourItems from "../Menu/page";
import PricingMenu from "../Pricing/page";
import Link from "next/link";
import SocialMediaShowcase from "../SocialMediaShowcase/page";

const AnimatedTitle = () => {
  const letters = "PREMIER BAKERS".split("");
  const handleWhatsAppClick = () => {
    const message = `I would love to reserve a table.`;
    const whatsappUrl = `https://wa.me/+91${
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] space-y-4 px-4"
    >
      <motion.h1
        className="text-4xl md:text-6xl lg:text-8xl font-bold text-white flex flex-wrap justify-center font-har-mono font-har-mono-custom"
        style={{ fontFamily: "var(--font-har-mono), monospace" }} // Fallback for testing
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
                rotate: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                },
              },
            }}
            className={
              letter === " "
                ? "mx-1 md:mx-4"
                : "hover:text-[#C92127] transition-colors duration-300"
            }
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex flex-col items-center space-y-4"
      >
        <p className="text-white text-xl md:text-2xl font-light italic">
          FLAVOUR YOUR MOMENTS
        </p>

        <div className="flex items-center space-x-2">
           <span className="text-white text-lg md:text-xl">
            The best
          </span>
          <motion.span
            className="text-3xl md:text-4xl font-bold text-[#F5DFA0] font-har-mono"
            whileHover={{ scale: 1.1 }}
          >
            Cake
          </motion.span>
          <span className="text-white text-lg md:text-xl">
            Destination
          </span>
        </div>

        <div
          onClick={() => {
            handleWhatsAppClick();
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C92127] text-white px-8 py-3 rounded-full text-lg font-semibold mt-4 font-har-mono"
          >
            Reserve Your Table
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#C92127] transform origin-left z-50"
        style={{ scaleX }}
      />

      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(pic15.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10">
          <Header />
          <AnimatedTitle />
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <AboutUs />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <PricingMenu />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <SocialMediaShowcase />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <ChooseYourItems />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <ReviewSection />
      </motion.section>

      <Footer />
    </>
  );
}
