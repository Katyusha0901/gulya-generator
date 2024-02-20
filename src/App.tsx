import "./App.css";
import { SquareGulya } from "./SquareGulya/SquareGulya";

export default function App() {
  function gulyaNumber(gulyaNumber: number) {}

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__row">
          <SquareGulya onChangeGulyaNumber={gulyaNumber} />
          <SquareGulya onChangeGulyaNumber={gulyaNumber} />
          <SquareGulya onChangeGulyaNumber={gulyaNumber} />
        </div>
        <div className="app__row">
          <SquareGulya onChangeGulyaNumber={gulyaNumber} />
          <SquareGulya onChangeGulyaNumber={gulyaNumber} />
          <SquareGulya onChangeGulyaNumber={gulyaNumber} />
        </div>
        <div className="app__row">
          <SquareGulya onChangeGulyaNumber={gulyaNumber} />
          <SquareGulya onChangeGulyaNumber={gulyaNumber} />
          <SquareGulya onChangeGulyaNumber={gulyaNumber} />
        </div>
      </div>
    </div>
  );
}
