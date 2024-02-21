import "./App.css";
import { Square } from "./SquareGulya/Square";
import { useState } from "react";
import nullEmotion from "./image/nullEmotion.svg";
import firstEmotion from "./image/firstEmotion.svg";
import secondEmotion from "./image/secondEmotion.svg";
import thirdEmotion from "./image/thirdEmotion.svg";
import fourthEmotion from "./image/fourthEmotion.svg";
import fifthEmotion from "./image/fifthEmotion.svg";
import sixthEmotion from "./image/sixthEmotion.svg";

export interface Emotion {
  name: string;
  photo: string;
  isTurnRight: boolean;
}

export default function App() {
  const [emotions, setEmotions] = useState<Emotion[]>([
    { name: "Грусть", photo: nullEmotion, isTurnRight: false },
    { name: "Счастье", photo: sixthEmotion, isTurnRight: false },
    { name: "Облегчение", photo: fourthEmotion, isTurnRight: false },
    { name: "Безразличие", photo: secondEmotion, isTurnRight: false },
    { name: "Спокойствие", photo: thirdEmotion, isTurnRight: false },
    { name: "Удовлетворение", photo: firstEmotion, isTurnRight: false },
    { name: "Уныние", photo: firstEmotion, isTurnRight: false },
    { name: "Наслаждение", photo: fifthEmotion, isTurnRight: false },
  ]);

  function changeItem(x: number, y: number) {
    const copyArr = emotions.slice();
    const first = copyArr[x];
    copyArr[x] = copyArr[y];
    copyArr[y] = first;
    setEmotions(copyArr);
  }

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__row">
          <Square onChooseEmotion={changeItem} emotion={emotions[0]} x={0} />
          <Square onChooseEmotion={changeItem} emotion={emotions[1]} x={1} />
          <Square onChooseEmotion={changeItem} emotion={emotions[2]} x={2} />
          <Square onChooseEmotion={changeItem} emotion={emotions[3]} x={3} />
        </div>
        <div className="app__row">
          <Square onChooseEmotion={changeItem} emotion={emotions[4]} x={4} />
          <Square onChooseEmotion={changeItem} emotion={emotions[5]} x={5} />
          <Square onChooseEmotion={changeItem} emotion={emotions[6]} x={6} />
          <Square onChooseEmotion={changeItem} emotion={emotions[7]} x={7} />
        </div>
      </div>
    </div>
  );
}
