import { useState } from "react";
import { GoPlus } from "react-icons/go";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className={`border flex justify-between items-center w-full text-[16px] p-3 ${
          isOpen ? "-bg--background" : "bg-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={` font-medium `}>{question}</span>
        {isOpen ? (
          <GoPlus className="text-[30px] rotate-45   transition-all duration-500 ease" />
        ) : (
          <GoPlus className="text-[30px] transition-all duration-300 ease" />
        )}
      </div>
      <div
        className={` p-3 text-[13px] border text-black/60 transition-all duration-500 ease ${
          isOpen ? "h-[100px] opacity-100 mb-5" : "h-0 mb-0  opacity-0"
        }`}
        style={{
          overflow: "hidden",
        }}
      >
        {answer}
      </div>
    </div>
  );
};

export const FAQS = () => {
  const faqs = [
    {
      question: "Do I need to get pre-approved before looking at properties?",
      answer:
        "While not mandatory, getting pre-approved shows sellers you’re a serious buyer. It also helps you understand your budget and narrows down options. Our team can assist you in getting pre-approved quickly.",
    },
    {
      question: "How do I know I'm getting a good deal a property?",
      answer:
        "We provide market analysis, comparable sales data, and expert advice. This ensures you have a clear picture of property value before making a decision. Our goal is to help you secure the best possible deal.",
    },
    {
      question: "What the best way to find a property that fits my budget?",
      answer:
        "Use our advanced search filters to narrow down properties by price, size, and amenities. Our agents can also recommend listings that match your criteria. We’re here to help you find the best options within your budget.",
    },
    {
      question:
        "Are there any specific neighborhoods you would recommend for families?",
      answer:
        "Yes, we recommend neighborhoods with good schools, parks, and family-friendly amenities. Our agents can suggest areas that are safe, have a strong community feel, and offer excellent opportunities for families.",
    },
    {
      question: "What should I do if I want to make an offer on a property?",
      answer:
        "Contact your agent to discuss the terms and strategy. We’ll help prepare a competitive offer based on market analysis and guide you through the negotiation process to ensure a smooth transaction.",
    },
    {
      question: "What is the difference between a buyer's and a seller's agent?",
      answer:
        "A buyer’s agent helps you find and negotiate the purchase of a home, while a seller’s agent assists in marketing and selling properties. Each agent has specialized skills to ensure the best outcomes for clients.",
    },
  ];
  return (
    <div className="flex">
      <div className="flex flex-col -space-y-2">
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};
