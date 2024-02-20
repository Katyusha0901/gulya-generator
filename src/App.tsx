import "./App.css";
import { Square } from "./SquareGulya/Square";
import { useState } from "react";
import nullEmotion from "./image/nullEmotion.png";

export interface Emotion {
  id: number;
  name: string;
  photo: string;
  isTurnRight: boolean;
}

export default function App() {
  const [emotions, setEmotions] = useState<Emotion[]>([
    { id: 0, name: "Грусть", photo: nullEmotion, isTurnRight: false },
  ]);

  function findItem(i: number) {
    return emotions[i];
  }
  // onClick={() => changeItemDown()}

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__row">
          <Square item={findItem(0)} />
          <Square item={findItem(0)} />
          <Square item={findItem(0)} />
          <Square item={findItem(0)} />
        </div>
        <div className="app__row">
          <Square item={findItem(0)} />
          <Square item={findItem(0)} />
          <Square item={findItem(0)} />
          <Square item={findItem(0)} />
        </div>
      </div>
    </div>
  );
}
