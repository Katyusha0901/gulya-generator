import { useState } from "react";
import "./Square.css";
import { AddButton } from "./AddButton";
import { Emotion } from "../App";

interface Props {
  x: number;
  emotion: Emotion;
  onChooseEmotionRight: (x: number, y: number) => void;
  onChooseEmotionUp: (x: number, y: number) => void;
  onChooseEmotionLeft: (x: number, y: number) => void;
  onChooseEmotionDown: (x: number, y: number) => void;
  // onChange: (item: Emotion) => void;
}

export const Square: React.FC<Props> = ({
  x,
  emotion,
  onChooseEmotionRight,
  onChooseEmotionUp,
  onChooseEmotionLeft,
  onChooseEmotionDown,
}) => {
  const [isAdding, setIsAdding] = useState<boolean>(true);

  function displayCenterContent() {
    if (isAdding) {
      return <AddButton onChangeIsAdding={changeIsAdding} />;
    } else {
      return (
        <div>
          <div className="square__display">
            <p className="square__display-name">{emotion.name}</p>
            <img className="square__display-image" src={emotion.image} />
          </div>
        </div>
      );
    }
  }

  function changeIsAdding() {
    setIsAdding(false);
  }

  function chooseEmotionUp() {
    const y = x - 4;
    onChooseEmotionUp(x, y);
  }

  function chooseEmotionLeft() {
    const y = x - 1;
    onChooseEmotionLeft(x, y);
  }

  function chooseEmotionRight() {
    const y = x + 1;
    onChooseEmotionRight(x, y);
  }

  function chooseEmotionDown() {
    const y = x + 4;
    onChooseEmotionDown(x, y);
  }

  return (
    <div className="square">
      <button
        className="square__arrow"
        onClick={() => {
          chooseEmotionUp();
        }}
      >
        ↑
      </button>
      <div className="square__center">
        <button
          className="square__arrow"
          onClick={() => {
            chooseEmotionLeft();
          }}
        >
          ←
        </button>
        <div className="square__center-content">{displayCenterContent()}</div>

        <button
          className="square__arrow"
          onClick={() => {
            chooseEmotionRight();
          }}
        >
          →
        </button>
      </div>
      <button
        className="square__arrow"
        onClick={() => {
          chooseEmotionDown();
        }}
      >
        ↓
      </button>
    </div>
  );
};
