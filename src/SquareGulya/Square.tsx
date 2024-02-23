import { useState } from "react";
import "./Square.css";
import { AddButton } from "./AddButton";
import { Emotion } from "../App";

interface Props {
  firstItem: number;
  emotion: Emotion;
  moveEmotion: (firstItem: number, secondItem: number) => void;
  // moveEmotionUp: (firstItem: number, secondItem: number) => void;
  // moveEmotionLeft: (firstItem: number, secondItem: number) => void;
  // moveEmotionDown: (firstItem: number, secondItem: number) => void;
}

export const Square: React.FC<Props> = ({
  firstItem,
  emotion,
  moveEmotion,
  // moveEmotionRight,
  // moveEmotionUp,
  // moveEmotionLeft,
  // moveEmotionDown,
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

  // function chooseEmotionWithDirectionUp() {
  //   const secondItem = firstItem - 4;
  //   moveEmotionUp(firstItem, secondItem);
  // }

  // function chooseEmotionWithDirectionLeft() {
  //   const secondItem = firstItem - 1;
  //   moveEmotionLeft(firstItem, secondItem);
  // }

  // function chooseEmotionWithDirectionRight() {
  //   const secondItem = firstItem + 1;
  //   moveEmotionRight(firstItem, secondItem);
  // }

  // function chooseEmotionWithDirectionDown() {
  //   const secondItem = firstItem + 4;
  //   moveEmotionDown(firstItem, secondItem);
  // }

  return (
    <div className="square">
      <button
        className="square__arrow"
        onClick={() => {
          moveEmotion(firstItem, firstItem - 4);
          // chooseEmotionWithDirectionUp();
        }}
      >
        ↑
      </button>
      <div className="square__center">
        <button
          className="square__arrow"
          onClick={() => {
            moveEmotion(firstItem, firstItem - 1);

            // chooseEmotionWithDirectionLeft();
          }}
        >
          ←
        </button>
        <div className="square__center-content">{displayCenterContent()}</div>

        <button
          className="square__arrow"
          onClick={() => {
            moveEmotion(firstItem, firstItem + 1);

            // chooseEmotionWithDirectionRight();
          }}
        >
          →
        </button>
      </div>
      <button
        className="square__arrow"
        onClick={() => {
          moveEmotion(firstItem, firstItem + 4);

          // chooseEmotionWithDirectionDown();
        }}
      >
        ↓
      </button>
    </div>
  );
};
