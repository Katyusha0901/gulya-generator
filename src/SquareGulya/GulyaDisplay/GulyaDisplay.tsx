import "./GulyaDisplay.css";

interface Props {}

export const GulyaDisplay: React.FC<Props> = ({}) => {
  return (
    <div className="gulya-display">
      <input className="gulya-display__position" />
      <div className="gulya-display__photo"></div>
      <input className="gulya-display__name" />
      <button className="gulya-display__save-button"></button>
    </div>
  );
};
