import "./App.css";
import Slides from "./components/Slides";
import Navbar from "./components/Navbar";

function App() {
  const slides = [
    {
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises",
    },
    { title: "Today's workout plan 1", text: "doing Exercise 1" },
    { title: "Today's workout plan 2", text: "doing Exercise 2" },
    { title: "Today's workout plan 3", text: "doing Exercise 3" },
  ];

  return (
    <div className="App">
      <Navbar />
      <Slides slides={slides} />
    </div>
  );
}

export default App;
