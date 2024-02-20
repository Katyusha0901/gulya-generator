import "./App.css";
import { Square } from "./SquareGulya/Square";

export default function App() {
  function number(number: number) {}

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__row">
          <Square onChangeNumber={number} />
          <Square onChangeNumber={number} />
          <Square onChangeNumber={number} />
          <Square onChangeNumber={number} />
        </div>
        <div className="app__row">
          <Square onChangeNumber={number} />
          <Square onChangeNumber={number} />
          <Square onChangeNumber={number} />
          <Square onChangeNumber={number} />
        </div>
      </div>
    </div>
  );
}
