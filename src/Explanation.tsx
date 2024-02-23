import "./Explanation.css";

interface Props {}

export const Explanation: React.FC<Props> = ({}) => {
  return (
    <div className="explanation">
      <div className="explanation__top">
        <div className="explanation__title"></div>
        <div className="explanation__close" onClick={() => }>×</div>
      </div>
      <div className="explanation__text"></div>
    </div>
  );
};
