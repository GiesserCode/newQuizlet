import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [InputValue, setInputValue] = useState("");
  const [words, setWords] = useState([
    { word: "Haus", answer: "house", wrong: 0, done: false },
    { word: "Apfel", answer: "apple", wrong: 0, done: false },
    { word: "Tisch", answer: "table", wrong: 0, done: false },
    { word: "Auto", answer: "car", wrong: 0, done: false },
    { word: "Stuhl", answer: "chair", wrong: 0, done: false },
    { word: "Buch", answer: "book", wrong: 0, done: false },
    { word: "Schule", answer: "school", wrong: 0, done: false },
    { word: "Fenster", answer: "window", wrong: 0, done: false },
    { word: "Katze", answer: "cat", wrong: 0, done: false },
    { word: "Blume", answer: "flower", wrong: 0, done: false },
  ]);
  const [reveal, setReveal] = useState(false);
  const [right, setRight] = useState(false);

  const getNewWord = () => {
    setNum((prevNum) => {
      let nextIndex;

      // 50% chance to select a word with done=false and wrong>0
      if (Math.random() < 0.5) {
        const notDoneWrongWords = words.filter(
          (word) => !word.done && word.wrong > 0
        );
        console.log(notDoneWrongWords);
        console.log("lenght: " + notDoneWrongWords.length);

        if (notDoneWrongWords.length > 0) {
          let allWrong = 0;
          nextIndex = (prevNum + 1) % words.length;

          while (
            words[nextIndex].wrong === 0 ||
            words[nextIndex].done ||
            num === nextIndex
          ) {
            nextIndex = (nextIndex + 1) % words.length;
            allWrong++;

            // Added safety check to prevent an infinite loop
            if (allWrong > words.length) {
              console.error("Error: All words are marked as done.");
              break;
            }
          }
          console.log("1");
        } else {
          let allTrue = 0;
          nextIndex = (prevNum + 1) % words.length;

          while (words[nextIndex].done && words[nextIndex] < 0) {
            nextIndex = (nextIndex + 1) % words.length;
            allTrue++;

            // Added safety check to prevent an infinite loop
            if (allTrue > words.length) {
              console.error("Error: All words are marked as done.");
              break;
            }
          }

          console.log("2");
        }
      } else {
        // Regular logic to find the next index with done === false
        let allDone = 0;
        nextIndex = (prevNum + 1) % words.length;
        while (words[nextIndex].done) {
          nextIndex = (nextIndex + 1) % words.length;
          allDone++;

          // Added safety check to prevent an infinite loop
          if (allDone > words.length) {
            console.error("Error: All words are marked as done.");
            break;
          }
        }
        console.log("3");
      }
      setReveal(false);
      return nextIndex;
    });
  };

  const checkAnswer = () => {
    const newWords = [...words];
    if (newWords[num].answer === InputValue) {
      newWords[num].done = true;
      setRight(true);
    } else {
      newWords[num].wrong++;
      setRight(false);
    }
    setWords(newWords);
    setReveal(true);
  };

  return (
    <div className={"section w-full h-screen"}>
      <h1>Words:</h1>
      <p className={"w-full text-center text-6xl"}>
        Translate: {words[num].word}
      </p>
      <form
        className={"w-full h-24"}
        onSubmit={(e) => {
          e.preventDefault();
          reveal ? getNewWord() : checkAnswer();
          setInputValue("");
        }}
      >
        <input
          type={"text"}
          placeholder={"enter Word"}
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={
            "w-full h-full text-center text-4xl bg-zinc-400 placeholder-white my-4 outline-none"
          }
        />
      </form>
      <p
        className={`w-full text-center h-20 ${
          reveal ? "visible" : "hidden"
        } my-4 ${right ? "bg-green-500" : "bg-red-500"} text-3xl`}
      >
        {words[num].answer}
      </p>
      {words.map((item, index) => (
        <p
          className={"w-full text-center my-4 translate-y-24"}
          key={index}
          style={{
            color: item.done ? "green" : item.wrong === 0 ? "black" : "red",
          }}
        >
          {item.word + " " + item.answer + " " + item.wrong + " " + item.done}
        </p>
      ))}
    </div>
  );
}

export default App;
