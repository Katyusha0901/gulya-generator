import "./App.css";
import { Square } from "./Square/Square";
import { Explanation } from "./Explanation";
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
  const [emotions, setEmotions] = useState<Emotion[]>(
    [
      { name: "Грусть", image: nullEmotion },
      { name: "Счастье", image: seventhEmotion },
      { name: "Облегчение", image: fourthEmotion },
      { name: "Безразличие", image: secondEmotion },
      { name: "Спокойствие", image: thirdEmotion },
      { name: "Удовлетворение", image: sixthEmotion },
      { name: "Уныние", image: firstEmotion },
      { name: "Наслаждение", image: fifthEmotion },
    ].sort(() => Math.random() - 0.5)
  );
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    const correctOrder = [
      "Грусть",
      "Уныние",
      "Безразличие",
      "Спокойствие",
      "Облегчение",
      "Удовлетворение",
      "Наслаждение",
      "Счастье",
    ];
    const result = emotions.every(
      (emotion, index) => emotion.name === correctOrder[index]
    );
    setIsCorrect(result);
  }, [emotions]);

  function switchEmotions(firstItem: number, secondItem: number) {
    const copyArr = emotions.slice();

    if (!copyArr[secondItem]) {
      return;
    }

    const first = copyArr[firstItem];
    copyArr[firstItem] = copyArr[secondItem];
    copyArr[secondItem] = first;
    setEmotions(copyArr);
  }

  return (
    <div className="app">
      <div className="app__explanation">
        <Explanation />
      </div>

      <div className="app__content">
        <div className="app__row">
          <Square
            moveEmotion={switchEmotions}
            emotion={emotions[0]}
            firstItem={0}
          />
          <Square
            moveEmotion={switchEmotions}
            emotion={emotions[1]}
            firstItem={1}
          />
          <Square
            moveEmotion={switchEmotions}
            emotion={emotions[2]}
            firstItem={2}
          />
          <Square
            moveEmotion={switchEmotions}
            emotion={emotions[3]}
            firstItem={3}
          />
        </div>
        <div className="app__row">
          <Square
            moveEmotion={switchEmotions}
            emotion={emotions[4]}
            firstItem={4}
          />
          <Square
            moveEmotion={switchEmotions}
            emotion={emotions[5]}
            firstItem={5}
          />
          <Square
            moveEmotion={switchEmotions}
            emotion={emotions[6]}
            firstItem={6}
          />
          <Square
            moveEmotion={switchEmotions}
            emotion={emotions[7]}
            firstItem={7}
          />
        </div>
        <div className="app__congratulation">
          <div className="app__display-congratulation">
            {isCorrect ? "Правильно!" : "Подумайте еще"}
          </div>
        </div>
      </div>
    </div>
  );
}
