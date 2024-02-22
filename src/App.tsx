import "./App.css";
import { Square } from "./SquareGulya/Square";
import { useEffect, useState } from "react";
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
  const copyArr = emotions.slice();

  useEffect(() => {
    if (
      emotions[0].name === "Грусть" &&
      emotions[1].name === "Уныние" &&
      emotions[2].name === "Безразличие" &&
      emotions[3].name === "Спокойствие" &&
      emotions[4].name === "Облегчение" &&
      emotions[5].name === "Удовлетворение" &&
      emotions[6].name === "Наслаждение" &&
      emotions[7].name === "Счастье"
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  });

  function switchEmotions(firstEmotion: number, secondEmotion: number) {
    if (copyArr[secondEmotion] === undefined) {
      return;
    } else {
      const first = copyArr[firstEmotion];
      copyArr[firstEmotion] = copyArr[secondEmotion];
      copyArr[secondEmotion] = first;
      setEmotions(copyArr);
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
            moveEmotionUp={switchEmotions}
            moveEmotionLeft={switchEmotions}
            moveEmotionRight={switchEmotions}
            moveEmotionDown={switchEmotions}
            emotion={emotions[0]}
            firstEmotion={0}
          />
          <Square
            moveEmotionUp={switchEmotions}
            moveEmotionLeft={switchEmotions}
            moveEmotionRight={switchEmotions}
            moveEmotionDown={switchEmotions}
            emotion={emotions[1]}
            firstEmotion={1}
          />
          <Square
            moveEmotionUp={switchEmotions}
            moveEmotionLeft={switchEmotions}
            moveEmotionRight={switchEmotions}
            moveEmotionDown={switchEmotions}
            emotion={emotions[2]}
            firstEmotion={2}
          />
          <Square
            moveEmotionUp={switchEmotions}
            moveEmotionLeft={switchEmotions}
            moveEmotionRight={switchEmotions}
            moveEmotionDown={switchEmotions}
            emotion={emotions[3]}
            firstEmotion={3}
          />
        </div>
        <div className="app__row">
          <Square
            moveEmotionUp={switchEmotions}
            moveEmotionLeft={switchEmotions}
            moveEmotionRight={switchEmotions}
            moveEmotionDown={switchEmotions}
            emotion={emotions[4]}
            firstEmotion={4}
          />
          <Square
            moveEmotionUp={switchEmotions}
            moveEmotionLeft={switchEmotions}
            moveEmotionRight={switchEmotions}
            moveEmotionDown={switchEmotions}
            emotion={emotions[5]}
            firstEmotion={5}
          />
          <Square
            moveEmotionUp={switchEmotions}
            moveEmotionLeft={switchEmotions}
            moveEmotionRight={switchEmotions}
            moveEmotionDown={switchEmotions}
            emotion={emotions[6]}
            firstEmotion={6}
          />
          <Square
            moveEmotionUp={switchEmotions}
            moveEmotionLeft={switchEmotions}
            moveEmotionRight={switchEmotions}
            moveEmotionDown={switchEmotions}
            emotion={emotions[7]}
            firstEmotion={7}
          />
        </div>
        <div className="app__congratulation">{displayConrgatulation()}</div>
      </div>
    </div>
  );
}
