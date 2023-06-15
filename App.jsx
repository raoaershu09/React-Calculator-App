import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = (buttonValue) => {
    setValue((prevValue) => prevValue + buttonValue);
  };

  const handleEqualButtonClick = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  };

  const handleClearButtonClick = () => {
    setValue("");
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <input type="text" value={value} readOnly />
          <div>
            <input
              type="button"
              className="button-first"
              value="7"
              onClick={() => handleButtonClick("7")}
            />
            <input
              type="button"
              className="button-first"
              value="8"
              onClick={() => handleButtonClick("8")}
            />
            <input
              type="button"
              className="button-first"
              value="9"
              onClick={() => handleButtonClick("9")}
            />
            <input
              type="button"
              className="button operator"
              value="/"
              onClick={() => handleButtonClick("/")}
            />
          </div>
          <div>
            <input
              type="button"
              className="button"
              value="4"
              onClick={() => handleButtonClick("4")}
            />
            <input
              type="button"
              className="button"
              value="5"
              onClick={() => handleButtonClick("5")}
            />
            <input
              type="button"
              className="button"
              value="6"
              onClick={() => handleButtonClick("6")}
            />
            <input
              type="button"
              className="button operator"
              value="*"
              onClick={() => handleButtonClick("*")}
            />
          </div>
          <div>
            <input
              type="button"
              className="button"
              value="1"
              onClick={() => handleButtonClick("1")}
            />
            <input
              type="button"
              className="button"
              value="2"
              onClick={() => handleButtonClick("2")}
            />
            <input
              type="button"
              className="button"
              value="3"
              onClick={() => handleButtonClick("3")}
            />
            <input
              type="button"
              className="button operator"
              value="+"
              onClick={() => handleButtonClick("+")}
            />
          </div>
          <div>
            <input
              type="button"
              className="button"
              value="."
              onClick={() => handleButtonClick(".")}
            />
            <input
              type="button"
              className="button"
              value="0"
              onClick={() => handleButtonClick("0")}
            />
            <input
              type="button"
              className="button-equal button"
              value="="
              onClick={handleEqualButtonClick}
            />
            <input
              type="button"
              className="button-minus button"
              value="-"
              onClick={() => handleButtonClick("-")}
            />
          </div>
          <div>
            <input
              type="button"
              className="button-ac"
              value="AC"
              onClick={handleClearButtonClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
