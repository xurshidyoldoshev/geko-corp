import React, { useState, useRef, useEffect } from "react";
import "./AccordionComponent.css";

interface AccordionProps {
  items: AccordionItem[];
}

const AccordionComponent: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((contentElement, index) => {
      if (contentElement) {
        if (openIndex === index) {
          contentElement.style.maxHeight = contentElement.scrollHeight + "px";
        } else {
          contentElement.style.maxHeight = "0px";
        }
      }
    });
  }, [openIndex]);

  return (
    <div className="accordion container">
      {items.map((item, index) => (
        <div key={item.id} className="accordion__item">
          <button
            className="accordion__header"
            onClick={() => handleToggle(index)}
          >
            <span>{item.title}</span>
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`accordion__content ${
              openIndex === index ? "open" : ""
            }`}
          >
            <div className="accordion__content__inner">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
