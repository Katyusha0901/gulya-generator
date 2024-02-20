import { useState } from "react";
import "./GulyaDisplay.css";
import { Gulya } from "../Square";

interface Props {}

export const GulyaDisplay: React.FC<Props> = () => {
  return (
    <div className="gulya-display">
      <p className="gulya-display__position"></p>
      <div className="gulya-display__photo"></div>
      <input className="gulya-display__name" />
      <button className="gulya-display__save-button"></button>
    </div>
  );
};
