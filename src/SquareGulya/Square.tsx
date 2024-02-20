import { useState } from "react";
import "./Square.css";
import { AddButton } from "./AddButton";
import { CloseButton } from "./CloseButton";
import { Emotion } from "../App";

interface Props {
  item: Emotion;
  changeItemDown: Function;
}

export const Square: React.FC<Props> = ({ item }) => {
  const [isAdding, setIsAdding] = useState<boolean>(true);

  function displayCenterContent() {
    if (isAdding) {
      return <AddButton onChangeIsAdding={changeIsAdding} />;
    } else {
      return (
        <div>
          <CloseButton onDelete={deleteItem} />
          <div className="square__display">
            <p className="square__display-name">{item.name}</p>
            <img className="square__display-photo" src={item.photo} />
            <input className="square__display-description" />
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
