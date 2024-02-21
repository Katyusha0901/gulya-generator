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
import seventhEmotion from "./image/seventhEmotion.svg";

export interface Emotion {
  name: string;
  image: string;
}

export default function App() {
  const [emotions, setEmotions] = useState<Emotion[]>([
    { name: "Грусть", image: nullEmotion },
    { name: "Счастье", image: seventhEmotion },
    { name: "Облегчение", image: fourthEmotion },
    { name: "Безразличие", image: secondEmotion },
    { name: "Спокойствие", image: thirdEmotion },
    { name: "Удовлетворение", image: sixthEmotion },
    { name: "Уныние", image: firstEmotion },
    { name: "Наслаждение", image: fifthEmotion },
  ]);

  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  function changeItem(x: number, y: number) {
    const copyArr = emotions.slice();

    const correctArr = [
      {
        name: "Грусть",
        image: "/static/media/nullEmotion.1dd8c69aedf69e4de0e504c5aedd6bc7.svg",
      },
      {
        name: "Уныние",
        image:
          "/static/media/firstEmotion.934f066907fac9378b2ee5b26fcd4e7f.svg",
      },
      {
        name: "Безразличие",
        image:
          "/static/media/secondEmotion.8368ce8edfaf60d8e03b902338a6ecc7.svg",
      },
      {
        name: "Спокойствие",
        image:
          "/static/media/thirdEmotion.64fe747611e3a7beee77a71ddde91925.svg",
      },
      {
        name: "Облегчение",
        image:
          "/static/media/fourthEmotion.e191963cf2cd904220c773a9a39b047e.svg",
      },
      {
        name: "Удовлетворение",
        image:
          "/static/media/sixthEmotion.94a6c31c59cac39d366cbe53bf77bdde.svg",
      },
      {
        name: "Наслаждение",
        image:
          "/static/media/fifthEmotion.9819db844356381e9916d2305f85e2df.svg",
      },
      {
        name: "Счастье",
        image:
          "/static/media/seventhEmotion.b9db1bad5687b5bae2134af0125946d4.svg",
      },
    ];

    // const correctArr = [
    //   { name: "Грусть", image: nullEmotion },
    //   { name: "Уныние", image: firstEmotion },
    //   { name: "Безразличие", image: secondEmotion },
    //   { name: "Спокойствие", image: thirdEmotion },
    //   { name: "Облегчение", image: fourthEmotion },
    //   { name: "Удовлетворение", image: sixthEmotion },
    //   { name: "Наслаждение", image: fifthEmotion },
    //   { name: "Счастье", image: seventhEmotion },
    // ];

    if (copyArr[y] === undefined) {
      return;
    } else {
      const first = copyArr[x];
      copyArr[x] = copyArr[y];
      copyArr[y] = first;
      console.log(copyArr);
      setEmotions(copyArr);
      for (let i = 0; i < copyArr.length; i++) {
        if (copyArr[i].name === correctArr[i].name) {
          setIsCorrect(true);
        }
      }
    }
  }

  function displayConrgatulation() {
    if (isCorrect) {
      return <div className="app__display-congratulation">Правильно!</div>;
    } else {
      return <div className="app__display-congratulation">Подумайте еще</div>;
    }
  }

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__row">
          <Square
            onChooseEmotionUp={changeItem}
            onChooseEmotionLeft={changeItem}
            onChooseEmotionRight={changeItem}
            onChooseEmotionDown={changeItem}
            emotion={emotions[0]}
            x={0}
          />
          <Square
            onChooseEmotionUp={changeItem}
            onChooseEmotionLeft={changeItem}
            onChooseEmotionRight={changeItem}
            onChooseEmotionDown={changeItem}
            emotion={emotions[1]}
            x={1}
          />
          <Square
            onChooseEmotionUp={changeItem}
            onChooseEmotionLeft={changeItem}
            onChooseEmotionRight={changeItem}
            onChooseEmotionDown={changeItem}
            emotion={emotions[2]}
            x={2}
          />
          <Square
            onChooseEmotionUp={changeItem}
            onChooseEmotionLeft={changeItem}
            onChooseEmotionRight={changeItem}
            onChooseEmotionDown={changeItem}
            emotion={emotions[3]}
            x={3}
          />
        </div>
        <div className="app__row">
          <Square
            onChooseEmotionUp={changeItem}
            onChooseEmotionLeft={changeItem}
            onChooseEmotionRight={changeItem}
            onChooseEmotionDown={changeItem}
            emotion={emotions[4]}
            x={4}
          />
          <Square
            onChooseEmotionUp={changeItem}
            onChooseEmotionLeft={changeItem}
            onChooseEmotionRight={changeItem}
            onChooseEmotionDown={changeItem}
            emotion={emotions[5]}
            x={5}
          />
          <Square
            onChooseEmotionUp={changeItem}
            onChooseEmotionLeft={changeItem}
            onChooseEmotionRight={changeItem}
            onChooseEmotionDown={changeItem}
            emotion={emotions[6]}
            x={6}
          />
          <Square
            onChooseEmotionUp={changeItem}
            onChooseEmotionLeft={changeItem}
            onChooseEmotionRight={changeItem}
            onChooseEmotionDown={changeItem}
            emotion={emotions[7]}
            x={7}
          />
        </div>
        <div className="app__congratulation">{displayConrgatulation()}</div>
      </div>
    </div>
  );
}
