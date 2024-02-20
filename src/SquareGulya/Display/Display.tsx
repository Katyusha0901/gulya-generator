import { useState } from "react";
import "./Display.css";

interface Props {}

export const Display: React.FC<Props> = () => {
  return (
    <div className="display">
      <p className="display__name"></p>
      <div className="display__photo"></div>
      <input className="display__description" />
      <button className="display__save-button"></button>
    </div>
  );
};
