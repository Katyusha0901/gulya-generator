import "./CloseButton.css";

interface Props {
  onDelete: Function;
}

export const CloseButton: React.FC<Props> = ({ onDelete }) => {
  return (
    <button
      className="closeButton"
      onClick={() => {
        onDelete();
      }}
    >
      X
    </button>
  );
};
