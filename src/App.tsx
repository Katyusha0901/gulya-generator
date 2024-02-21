import "./App.css";
import { Square } from "./SquareGulya/Square";
import { useState } from "react";
import nullEmotion from "./image/nullEmotion.png";
import firstEmotion from "./image/firstEmotion.png";

export interface Emotion {
  id: number;
  name: string;
  photo: string;
  isTurnRight: boolean;
}

export default function App() {
  const [emotions, setEmotions] = useState<Emotion[]>([
    { id: 0, name: "Грусть", photo: nullEmotion, isTurnRight: false },
    { id: 1, name: "Уныние", photo: firstEmotion, isTurnRight: false },
  ]);

  function findItem(i: number) {
    // if (emotions[i].isTurnRight && !emotions[i + 1].isTurnRight) {
    //   return emotions[i + 1];
    // }
    // const item = emotions.find((object) => object.id === i);
    // const a = emotions.indexOf(item);

    // return emotions[i];
    const emotion: Emotion = emotions.find(
      (object) => object.id === i
    ) as Emotion;
    return emotion;
  }

  function changeItem(item: Emotion) {
    // setEmotions(emotions.map((i) => (i.id === item.id ? item : i)));
    // setEmotions(emotions.map((i) => (i.(id+1) === item.id ? item : i)));
  }

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__row">
          <Square onChange={changeItem} item={findItem(0)} />
          <Square onChange={changeItem} item={findItem(1)} />
          <Square onChange={changeItem} item={findItem(0)} />
          <Square onChange={changeItem} item={findItem(0)} />
        </div>
        <div className="app__row">
          <Square onChange={changeItem} item={findItem(0)} />
          <Square onChange={changeItem} item={findItem(0)} />
          <Square onChange={changeItem} item={findItem(0)} />
          <Square onChange={changeItem} item={findItem(0)} />
        </div>
      </div>
    </div>
  );
}
