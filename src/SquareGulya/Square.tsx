import { useState } from "react";
import "./Square.css";
import { AddButton } from "./AddButton";
import { GulyaDisplay } from "./Gulya/GulyaDisplay";
import { CloseButton } from "./Gulya/CloseButton";

interface Props {
  onChangeNumber: (number: number) => void;
}

export interface Gulya {
  id: number;
  position: string;
  name: string;
  isEditing: boolean;
}

export const Square: React.FC<Props> = ({ onChangeNumber }) => {
  const [isAdding, setIsAdding] = useState<boolean>(true);
  const [gulyas, setGulyas] = useState<Gulya[]>([]);

  function addPosition(text: string) {
    setGulyas([
      ...gulyas,
      { id: 0, position: text, name: text, isEditing: true },
    ]);
  }

  function changeGulya(gulya: Gulya) {
    setGulyas(gulyas.map((g) => (g.id === gulya.id ? gulya : g)));
  }

  function displayCenterContent() {
    if (isAdding) {
      return <AddButton onChangeIsAdding={changeIsAdding} />;
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
