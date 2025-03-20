import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Add this import for the icons
import { Link } from "react-router-dom";

const FooterFaqBottom = () => {
  const faqs = [
    {
      question: "Popular events and sports news",
      answers: [
        { text: "Slots", link: "" },
        { text: "Live Casino", link: "" },
        { text: "Registration", link: "" },
        { text: "Special Offers and Bonuses", link: "" },
        { text: "Promo Code Store", link: "" },
        { text: "First Deposit Bonus", link: "" },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-sm text-white bg-[#212121] rounded-md">
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="py-3 px-4">
            <button
              className="flex justify-between w-full font-[500] text-[14px] lg:terxt-[19px] outline-0 cursor-pointer uppercase"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="mt-2 text-sm border-t border-black p-2">
                <h1 className="text-md font-bold uppercase">main</h1>
                {faq.answers.map((answer, answerIndex) => (
                  <div key={answerIndex}>
                    <Link
                      to={answer.link}
                      className="block py-1 text-[#c2c2c2] hover:text-white duration-300"
                    >
                      {answer.text}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterFaqBottom;
