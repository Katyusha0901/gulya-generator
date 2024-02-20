import "./AddGulyaButton.css";

interface Props {
  onChangeIsAdding: Function;
}

export const AddGulyaButton: React.FC<Props> = ({ onChangeIsAdding }) => {
  return (
    <button
      className="add-gulya"
      onClick={() => {
        onChangeIsAdding();
      }}
    >
      Add Gulya
    </button>
  );
};
