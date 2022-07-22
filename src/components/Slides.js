import { useState } from "react";

const Slides = ({ slides }) => {
  const [data] = useState(slides);
  const [count, setCount] = useState(0);

  const [resetDisable, setResetDisable] = useState(false);
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);

  const handleReset = () => {
    setCount((prev) => {
      return 0;
    });
    if (count === 0) setResetDisable(true);
  };
  const handlePrev = () => {
    setCount((prev) => {
      return prev - 1;
    });
    if (count === 0) setPrevDisable(true);
  };
  const handleNext = () => {
    setCount((prev) => {
      return prev + 1;
    });
    if (count === data.length - 1) setNextDisable(true);
  };

  return (
    <div className="container">
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className={"small outlined " + (count === 0 ? "disable" : "")}
          type="button"
          onClick={() => handleReset()}
          disabled={count === 0}
        >
          Restart
        </button>{" "}
        <button
          data-testid="button-prev"
          className={"small " + (count === 0 ? "disable" : "")}
          type="button"
          onClick={() => handlePrev()}
          disabled={count === 0}
        >
          Prev
        </button>{" "}
        <button
          data-testid="button-next"
          className={"small " + (count === data.length - 1 ? "disable" : "")}
          type="button"
          onClick={() => handleNext()}
          disabled={count === data.length - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title" className="title">
          {data[count].title}
        </h1>
        <p data-testid="text" className="text">
          {data[count].text}
        </p>
      </div>
    </div>
  );
};

export default Slides;
