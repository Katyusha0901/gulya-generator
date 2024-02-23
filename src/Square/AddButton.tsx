import "./AddButton.css";

interface Props {
  Add: Function;
}

export const AddButton: React.FC<Props> = ({ Add }) => {
  return (
    <button
      className="add"
      onClick={() => {
        Add();
      }}
    >
      Add Emotion
    </button>
  );
};
