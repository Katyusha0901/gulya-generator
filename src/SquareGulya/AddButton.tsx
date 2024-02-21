import "./AddButton.css";

interface Props {
  onChangeIsAdding: Function;
}

export const AddButton: React.FC<Props> = ({ onChangeIsAdding }) => {
  return (
    <button
      className="add"
      onClick={() => {
        onChangeIsAdding();
      }}
    >
      Add Emotion
    </button>
  );
};
