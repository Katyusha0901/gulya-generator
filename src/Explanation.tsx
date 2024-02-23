import "./Explanation.css";
import { useState } from "react";

export const Explanation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      {isOpen && (
        <div className="explanation">
          <div className="explanation__top">
            <div className="explanation__title">
              Поймите свои эмоции и повысьте эмоциональный интеллект
            </div>
            <div
              className="explanation__close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </div>
          </div>
          <div className="explanation__text">
            Откройте карточки 8 эмоций и расположите их в правильном порядке от
            "Грусти" до "Счастья" с помощью стрелок.
          </div>
        </div>
      )}
    </>
  );
};
