import "./Explanation.css";
import { useState } from "react";

export const Explanation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      {isOpen && (
        <div className="explanation">
          <div className="explanation__top">
            <div className="explanation__title"></div>
            <div
              className="explanation__close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </div>
          </div>
          <div className="explanation__text"></div>
        </div>
      )}
    </>
  );
};
