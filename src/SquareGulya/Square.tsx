import { useState } from "react";
import "./Square.css";
import { AddButton } from "./AddButton";
import { Emotion } from "../App";

interface Props {
  firstEmotion: number;
  emotion: Emotion;
  onChooseEmotionRight: (firstEmotion: number, secondEmotion: number) => void;
  onChooseEmotionUp: (firstEmotion: number, secondEmotion: number) => void;
  onChooseEmotionLeft: (firstEmotion: number, secondEmotion: number) => void;
  onChooseEmotionDown: (firstEmotion: number, secondEmotion: number) => void;
}

export const Square: React.FC<Props> = ({
  firstEmotion,
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
    const secondEmotion = firstEmotion - 4;
    onChooseEmotionUp(firstEmotion, secondEmotion);
  }

  function chooseEmotionLeft() {
    const secondEmotion = firstEmotion - 1;
    onChooseEmotionLeft(firstEmotion, secondEmotion);
  }

  function chooseEmotionRight() {
    const secondEmotion = firstEmotion + 1;
    onChooseEmotionRight(firstEmotion, secondEmotion);
  }

  function chooseEmotionDown() {
    const secondEmotion = firstEmotion + 4;
    onChooseEmotionDown(firstEmotion, secondEmotion);
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
