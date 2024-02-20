import { useState } from "react";
import "./Square.css";
import { AddButton } from "./AddButton";
import { Display } from "./Display/Display";
import { CloseButton } from "./Display/CloseButton";
import { Emotion } from "../App";

interface Props {
  object: Emotion;
}

export const Square: React.FC<Props> = ({ object }) => {
  const [isAdding, setIsAdding] = useState<boolean>(true);
  // const emotionObject = {object.name}

  function displayCenterContent() {
    if (isAdding) {
      return <AddButton onChangeIsAdding={changeIsAdding} />;
    } else {
      return (
        <div>
          <CloseButton onDelete={deleteItem} />
          <div className="display">
            <p className="display__name">{object.name}</p>
            <div className="display__photo"></div>
            <input className="display__description" />
            <button className="display__save-button"></button>
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
      <div className="square__top">
        <button className="square__up-arrow">up</button>
      </div>
      <div className="square__center">
        <button className="square__left-arrow">left</button>
        <div className="square__center-content">{displayCenterContent()}</div>
        <button className="square__right-arrow">right</button>
      </div>
      <div className="square__bottom">
        <button className="square__down-arrow">down</button>
      </div>
    </div>
  );
};
