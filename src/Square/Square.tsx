import { useState } from "react";
import "./Square.css";
import { AddButton } from "./AddButton";
import { Emotion } from "../App";

interface Props {
  firstItem: number;
  emotion: Emotion;
  moveEmotion: (firstItem: number, secondItem: number) => void;
}

export const Square: React.FC<Props> = ({
  firstItem,
  emotion,
  moveEmotion,
}) => {
  const [isAdding, setIsAdding] = useState<boolean>(true);

  return (
    <div className="square">
      <button
        className="square__arrow"
        onClick={() => {
          moveEmotion(firstItem, firstItem - 4);
        }}
      >
        ↑
      </button>

      <div className="square__center">
        <button
          className="square__arrow"
          onClick={() => {
            moveEmotion(firstItem, firstItem - 1);
          }}
        >
          ←
        </button>
        <div className="square__center-content">
          {isAdding ? (
            <AddButton add={() => setIsAdding(false)} />
          ) : (
            <div>
              <div className="square__display">
                <p className="square__display-name">{emotion.name}</p>
                <img
                  className="square__display-image"
                  src={emotion.image}
                  alt="emotion"
                />
              </div>
            </div>
          )}
        </div>
        <button
          className="square__arrow"
          onClick={() => {
            moveEmotion(firstItem, firstItem + 1);
          }}
        >
          →
        </button>
      </div>

      <button
        className="square__arrow"
        onClick={() => {
          moveEmotion(firstItem, firstItem + 4);
        }}
      >
        ↓
      </button>
    </div>
  );
};
