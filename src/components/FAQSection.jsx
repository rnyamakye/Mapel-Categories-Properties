import { FAQS } from "./FAQS";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const FAQSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const overlayVariants = {
    hidden: { opacity: "0", width: "100%" },
    visible: { opacity: "100", width: "0%" },
  };

  return (
    <div className="">
      <div className="flex items-center text-[16px] gap-[15px] border-b py-[5px]">
        <span>
          <img src="/670df50b1b9142294387b0b9_ic-title.svg" />
        </span>
        <h3>FAQ'S</h3>
      </div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[24px] font-medium lg:text-[36px] pt-[10px]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col lg:flex-row gap-[40px] items-center">
          <div className="relative w-fit h-fit lg:w-[100%]">
            <img
              ref={ref}
              src="/670df70a92970a0fe61e84f2_faq.jpg"
              className="object-cover"
              alt="FAQ Background"
            />
            {inView && (
              <motion.div
                className="overlay -bg--background w-[100%] h-[100%] absolute top-0"
                initial="hidden"
                animate="visible"
                variants={overlayVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            )}
          </div>
          <FAQS />
        </div>
      </div>
    </div>
  );
};
