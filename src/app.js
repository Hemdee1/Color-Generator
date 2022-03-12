import { useState } from "react";
import Color from "./color";
import Values from "values.js";

const App = () => {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState(20);
  const [color, setColor] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const colors = new Values(value).all(parseInt(number));
      console.log(number);
      setColor(colors);
      setError(false);
    } catch (error) {
      setError(true);
      setColor([]);
    }
  };

  // setColor(...colors);
  // if 10 = 20, and 20 = 10; in every 5, the difference is 10, in every 10, the difference 20

  return (
    <section>
      <header>
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            min="10"
            max="50"
            step="10"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter a color"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p className="error">
          {error ? "Add a valid color value" : "rgb, hex or color"}
        </p>
      </header>
      <Color colors={color} />
    </section>
  );
};

export default App;
