import "./AddButton.css";

interface Props {
  add: () => void;
}

export const AddButton: React.FC<Props> = ({ add }) => {
  return (
    <button
      className="add"
      onClick={() => {
        add();
      }}
    >
      Add Emotion
    </button>
  );
};
