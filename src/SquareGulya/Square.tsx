import { useState } from "react";
import "./Square.css";
import { AddButton } from "./AddButton";
import { Emotion } from "../App";

interface Props {
  firstEmotion: number;
  emotion: Emotion;
  moveEmotionRight: (firstEmotion: number, secondEmotion: number) => void;
  moveEmotionUp: (firstEmotion: number, secondEmotion: number) => void;
  moveEmotionLeft: (firstEmotion: number, secondEmotion: number) => void;
  moveEmotionDown: (firstEmotion: number, secondEmotion: number) => void;
}

export const Square: React.FC<Props> = ({
  firstEmotion,
  emotion,
  moveEmotionRight,
  moveEmotionUp,
  moveEmotionLeft,
  moveEmotionDown,
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

  function chooseEmotionWithDirectionUp() {
    const secondEmotion = firstEmotion - 4;
    moveEmotionUp(firstEmotion, secondEmotion);
  }

  function chooseEmotionWithDirectionLeft() {
    const secondEmotion = firstEmotion - 1;
    moveEmotionLeft(firstEmotion, secondEmotion);
  }

  function chooseEmotionWithDirectionRight() {
    const secondEmotion = firstEmotion + 1;
    moveEmotionRight(firstEmotion, secondEmotion);
  }

  function chooseEmotionWithDirectionDown() {
    const secondEmotion = firstEmotion + 4;
    moveEmotionDown(firstEmotion, secondEmotion);
  }

  return (
    <div className="square">
      <button
        className="square__arrow"
        onClick={() => {
          chooseEmotionWithDirectionUp();
        }}
      >
        ↑
      </button>
      <div className="square__center">
        <button
          className="square__arrow"
          onClick={() => {
            chooseEmotionWithDirectionLeft();
          }}
        >
          ←
        </button>
        <div className="square__center-content">{displayCenterContent()}</div>

        <button
          className="square__arrow"
          onClick={() => {
            chooseEmotionWithDirectionRight();
          }}
        >
          →
        </button>
      </div>
      <button
        className="square__arrow"
        onClick={() => {
          chooseEmotionWithDirectionDown();
        }}
      >
        ↓
      </button>
    </div>
  );
};
