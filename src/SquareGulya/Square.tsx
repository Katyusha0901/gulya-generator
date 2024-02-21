import { useState } from "react";
import "./Square.css";
import { AddButton } from "./AddButton";
import { CloseButton } from "./CloseButton";
import { Emotion } from "../App";

interface Props {
  x: number;
  emotion: Emotion;
  onChooseEmotion: (x: number, y: number) => void;
  // onChange: (item: Emotion) => void;
}

export const Square: React.FC<Props> = ({ x, emotion, onChooseEmotion }) => {
  const [isAdding, setIsAdding] = useState<boolean>(true);

  function displayCenterContent() {
    if (isAdding) {
      return <AddButton onChangeIsAdding={changeIsAdding} />;
    } else {
      return (
        <div>
          {/* <CloseButton onDelete={deleteItem} /> */}
          <div className="square__display">
            <p className="square__display-name">{emotion.name}</p>
            <img className="square__display-photo" src={emotion.photo} />
            {/* <textarea className="square__display-description" /> */}
          </div>
        </div>
      );
    }
  }

  function changeIsAdding() {
    setIsAdding(false);
  }

  function deleteItem() {
    setIsAdding(true);
  }

  function chooseEmotion() {
    const y = x + 1;
    onChooseEmotion(x, y);
  }

  return (
    <div className="square">
      <button className="square__arrow">↑</button>
      <div className="square__center">
        <button className="square__arrow">←</button>
        <div className="square__center-content">{displayCenterContent()}</div>

        <button
          className="square__arrow"
          onClick={() => {
            chooseEmotion();
          }}
        >
          →
        </button>
      </div>
      <button className="square__arrow">↓</button>
    </div>
  );
};
