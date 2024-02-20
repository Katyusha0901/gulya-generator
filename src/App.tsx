import "./App.css";
import { Square } from "./SquareGulya/Square";
import { useState } from "react";

export interface Emotion {
  id: number;
  name: string;
}

export default function App() {
  const [emotions, setEmotions] = useState<Emotion[]>([
    { id: 0, name: "грусть" },
  ]);

  function findItem(i: number) {
    return emotions[i];
  }
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
