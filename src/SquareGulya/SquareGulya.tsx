import { useState } from "react";
import "./SquareGulya.css";
import { AddGulyaButton } from "./AddGulyaButton";
import { GulyaDisplay } from "./GulyaDisplay/GulyaDisplay";
import { CloseButton } from "./GulyaDisplay/CloseButton";

interface Props {
  onChangeGulyaNumber: (gulyaNumber: number) => void;
}

export const SquareGulya: React.FC<Props> = ({ onChangeGulyaNumber }) => {
  const [isAdding, setIsAdding] = useState<boolean>(true);

  function displayCenterContent() {
    if (isAdding) {
      return <AddGulyaButton onChangeIsAdding={changeIsAdding} />;
    } else {
      return (
        <div>
          <CloseButton onDeleteGulya={deleteGulya} />
          <GulyaDisplay />
        </div>
      );
    }
  }

  function changeIsAdding() {
    setIsAdding(false);
  }

  function deleteGulya() {
    setIsAdding(true);
  }

  return (
    <div className="square">
      <div className="square__top">
        <button className="square__up-arrow">up</button>
      </div>
      <div className="square__center">
        <button className="square__left-arrow">left</button>
        <div className="square__center-content">{displayCenterContent()}</div>
        <button className="square__right-arrow">right</button>
      </div>
      <div className="square__bottom">
        <button className="square__down-arrow">down</button>
      </div>
    </div>
  );
};
