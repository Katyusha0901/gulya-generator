import { useState } from "react";
import "./Square.css";
import { AddButton } from "./AddButton";
import { CloseButton } from "./CloseButton";
import { Emotion } from "../App";

interface Props {
  item: Emotion;
  onChange: (item: Emotion) => void;
}

export const Square: React.FC<Props> = ({ item, onChange }) => {
  const [isAdding, setIsAdding] = useState<boolean>(true);

  function displayCenterContent() {
    if (isAdding) {
      return <AddButton onChangeIsAdding={changeIsAdding} />;
    } else {
      return (
        <div>
          {/* <CloseButton onDelete={deleteItem} /> */}
          <div className="square__display">
            <p className="square__display-name">{item.name}</p>
            <img className="square__display-photo" src={item.photo} />
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

  return (
    <div className="square">
      <button className="square__arrow">↑</button>
      <div className="square__center">
        <button className="square__arrow">←</button>
        <div className="square__center-content">{displayCenterContent()}</div>

        <button
          className="square__arrow"
          onClick={() => onChange({ ...item, isTurnRight: true })}
        >
          →
        </button>
      </div>
      <button className="square__arrow">↓</button>
    </div>
  );
};
