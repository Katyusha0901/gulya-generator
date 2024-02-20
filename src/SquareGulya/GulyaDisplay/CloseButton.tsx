import "./CloseButton.css";

interface Props {
  onDeleteGulya: Function;
}

export const CloseButton: React.FC<Props> = ({ onDeleteGulya }) => {
  return (
    <button
      className="closeButton"
      onClick={() => {
        onDeleteGulya();
      }}
    >
      X
    </button>
  );
};
