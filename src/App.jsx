import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [InputValue, setInputValue] = useState("");
  /*const [words, setWords] = useState([
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
                                { word: "Hund", answer: "dog", wrong: 0, done: false },
                                { word: "Sonnenblume", answer: "sunflower", wrong: 0, done: false },
                                { word: "Computer", answer: "computer", wrong: 0, done: false },
                                { word: "Telefon", answer: "phone", wrong: 0, done: false },
                                { word: "Musik", answer: "music", wrong: 0, done: false },
                                { word: "Mond", answer: "moon", wrong: 0, done: false },
                                { word: "Stadt", answer: "city", wrong: 0, done: false },
                                { word: "Wolke", answer: "cloud", wrong: 0, done: false },
                                { word: "Flugzeug", answer: "airplane", wrong: 0, done: false },
                              ]);*/
  const [words, setWords] = useState([
    { word: "ein Schüler", answer: "un écolier", wrong: 0, done: false },
    { word: "eine Schülerin", answer: "une écolière", wrong: 0, done: false },
    { word: "berufstätig", answer: "actif/active", wrong: 0, done: false },
    { word: "wachsen; aufwachsen", answer: "grandir", wrong: 0, done: false },
    {
      word: "traditionell",
      answer: "traditionnel/traditionnelle",
      wrong: 0,
      done: false,
    },
    { word: "etw. ausüben", answer: "pratiquer qc", wrong: 0, done: false },
    {
      word: "das Krafttraining",
      answer: "la musculation",
      wrong: 0,
      done: false,
    },
    { word: "ein Halbbruder", answer: "un demi-frère", wrong: 0, done: false },
    {
      word: "eine Halbschwester",
      answer: "une demi-soeur",
      wrong: 0,
      done: false,
    },
    {
      word: "ein Mittel; ein Geldmittel",
      answer: "un moyen",
      wrong: 0,
      done: false,
    },
    {
      word: "sich leisten können, etw. zu tun",
      answer: "avoir les moyens de faire qc",
      wrong: 0,
      done: false,
    },
    { word: "ein Rucksack", answer: "un sac à dos", wrong: 0, done: false },
    {
      word: "die Freundschaft",
      answer: "l'amitié (f.)",
      wrong: 0,
      done: false,
    },
    {
      word: "die Arbeitslosigkeit",
      answer: "le chômage",
      wrong: 0,
      done: false,
    },
    {
      word: "vorhanden; anwesend",
      answer: "présent/présente",
      wrong: 0,
      done: false,
    },
    {
      word: "auf jdn. zählen; sich auf jdn. verlassen",
      answer: "compter sur qn",
      wrong: 0,
      done: false,
    },
    { word: "ein Test", answer: "un test", wrong: 0, done: false },
    {
      word: "ein Freund / eine Freundin",
      answer: "un ami / une amie",
      wrong: 0,
      done: false,
    },
    {
      word: "ein fester Freund / eine feste Freundin",
      answer: "un petit ami / une petite amie",
      wrong: 0,
      done: false,
    },
    {
      word: "sich jdm. anvertrauen",
      answer: "se confier à qn",
      wrong: 0,
      done: false,
    },
    {
      word: "sich in jdn. verlieben",
      answer: "tomber amoureux/amoureuse de qn",
      wrong: 0,
      done: false,
    },
    { word: "treu", answer: "fidèle", wrong: 0, done: false },
    {
      word: "eine Wirkung; ein Effekt",
      answer: "un effet",
      wrong: 0,
      done: false,
    },
    { word: "die Eifersucht", answer: "la jalousie", wrong: 0, done: false },
    { word: "ein Konflikt", answer: "un conflit", wrong: 0, done: false },
    {
      word: "jdm.den Laufpass geben (ugs.)",
      answer: "plaquer qn (fam.)",
      wrong: 0,
      done: false,
    },
    {
      word: "etw. geht jdn. an",
      answer: "qc regarde qn",
      wrong: 0,
      done: false,
    },
    {
      word: "jdn. verraten; jdn. hintergehen",
      answer: "trahir qn",
      wrong: 0,
      done: false,
    },
    {
      word: "Es ist deine Schuld.",
      answer: "C'est de ta faute.",
      wrong: 0,
      done: false,
    },
    {
      word: "jdm. vorwerfen etw. zu tun",
      answer: "reprocher à qn de faire qc",
      wrong: 0,
      done: false,
    },
    {
      word: "jdn/etw. achten; jdn./etw. respektieren",
      answer: "respecter qn/qc",
      wrong: 0,
      done: false,
    },
    { word: "die Toleranz", answer: "la tolérance", wrong: 0, done: false },
    { word: "ein Misserfolg", answer: "un échec", wrong: 0, done: false },
    {
      word: "vollständig; völlig; total",
      answer: "total/totale",
      wrong: 0,
      done: false,
    },
    {
      word: "eine Seite; hier: was ... betrifft",
      answer: "un côté",
      wrong: 0,
      done: false,
    },
  ]);
  const [numberOfRightWords, setNumberOfRightWords] = useState(0);
  const [numberOfWrongWords, setNumberOfWrongWords] = useState(0);
  const [numberOfNeverWords, setNumberOfNeverWords] = useState(0);

  const [reveal, setReveal] = useState(false);
  const [right, setRight] = useState(false);

  const getNewWord = () => {
    setNum((prevNum) => {
      let nextIndex;
      const notDoneWrongWords = words.filter(
          (word) => !word.done && word.wrong > 0
      );
      const notStartedWords = words.filter(
          (word) => !word.done && word.wrong === 0
      );
      const randomIndex = Math.round(Math.random() * notStartedWords.length);
      let multiplikator = 1 / 5;
      const probability =
          Math.random() <
          (notDoneWrongWords.length > 0
              ? multiplikator * notDoneWrongWords.length
              : 0)

      console.log(probability);
      console.log(
          notDoneWrongWords.length > 0
              ? multiplikator * notDoneWrongWords.length
              : 0
      );
      if (probability) {
        console.log("wrong word");
        nextIndex = words.indexOf(notDoneWrongWords[randomIndex]);

        /*if (notDoneWrongWords.length > 0) {
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
        }*/
      } else {
        if (notStartedWords.length > 0) {
          console.log("new never word");
          console.log(notStartedWords);
          // If there are words with done = false and wrong = 0, pick a random one

          nextIndex = words.indexOf(notStartedWords[randomIndex]);
          console.log(nextIndex);
        } else {
          console.log("new wrong word");
          nextIndex = words.indexOf(notDoneWrongWords[randomIndex]);

          // Regular logic to find the next index with done === false
          /*let allDone = 0;
          nextIndex = (prevNum + 1) % words.length;
          while (words[nextIndex].done && words[nextIndex].wrong > 0) {
            nextIndex = (nextIndex + 1) % words.length;
            allDone++;

            // Added safety check to prevent an infinite loop
            if (allDone > words.length) {
              console.error("Error: All words are marked as done.");
              allDone = 0;
              while (words[nextIndex].wrong > 0) {
                nextIndex = (nextIndex + 1) % words.length;
                allDone++;

                // Added safety check to prevent an infinite loop
                if (allDone > words.length) {
                  console.error("found no wrong word");
                  break;
                }
              }
              break;
            }
          }*/
        }
      }
      setReveal(false);
      setInputValue("");
      return nextIndex;
    });
    console.log(num);
  };

  /*const checkAnswer = () => {
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
                                };*/

  const isAnswerCloseEnough = (word, input) => {
    const maxLengthDifference = 1;
    const minLengthDifference = 1;

    if (Math.abs(word.length - input.length) > maxLengthDifference) {
      return false;
    }

    const wordArray = word.split("");
    const inputArray = input.split("");

    let differences = 0;

    for (let i = 0; i < Math.min(wordArray.length, inputArray.length); i++) {
      // Ignore characters within parentheses
      if (wordArray[i] === "(" || wordArray[i] === ")") {
        continue;
      }

      if (wordArray[i] !== inputArray[i]) {
        differences++;
      }

      if (differences > maxLengthDifference) {
        return false;
      }
    }

    return (
        differences <= maxLengthDifference &&
        word.length - input.length <= minLengthDifference
    );
  };

  const checkAnswer = () => {
    const newWords = [...words];
    const correctAnswer = newWords[num].answer;

    // Ignore characters within parentheses in both correct answer and user input
    const sanitizedCorrectAnswer = correctAnswer.replace(/[()]/g, "");
    const sanitizedInput = InputValue.replace(/[()]/g, "");

    if (isAnswerCloseEnough(sanitizedCorrectAnswer, sanitizedInput)) {
      newWords[num].done = true;
      setRight(true);
    } else {
      newWords[num].wrong++;
      setRight(false);
    }

    setWords(newWords);
    setReveal(true);
    const rightWords = words.filter((word) => word.done && word.wrong === 0);
    const wrongWords = words.filter((word) => !word.done && word.wrong > 0);
    const neverWords = words.filter((word) => !word.done && word.wrong === 0);
    setNumberOfRightWords((rightWords.length * 100) / words.length);
    setNumberOfWrongWords((wrongWords.length * 100) / words.length);
    setNumberOfNeverWords((neverWords.length * 100) / words.length);
  };

  return (
      <div
          className={
            "section w-full min-h-screen bg-zinc-900 flex text-white flex-col items-center"
          }
      >
        <div className={"h-4 w-full flex self-start rounded-t-lg"}>
          <div
              style={{ width: numberOfRightWords + "%" }}
              className={"h-4 bg-green-500"}
          ></div>
          <div
              style={{ width: numberOfNeverWords + "%" }}
              className={"h-4 bg-zinc-800"}
          ></div>
          <div
              style={{ width: numberOfWrongWords + "%" }}
              className={"h-4 bg-red-500"}
          ></div>
        </div>
        <div
            className={
              "w-[600px] mt-8 h-[300px] bg-zinc-600 rounded-3xl flex flex-col items-center justify-evenly"
            }
        >
          <p
              className={
                "w-full text-center text-3xl grid place-items-center h-[30%]"
              }
          >
            Translate: {words[num].word}
          </p>
          <form
              className={"w-full h-[30%]"}
              onSubmit={(e) => {
                e.preventDefault();
                reveal ? getNewWord() : checkAnswer();
              }}
          >
            <input
                type={"text"}
                placeholder={"enter Word"}
                value={InputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={
                  "w-full h-full text-center text-4xl bg-zinc-800 my-4 outline-none placeholder-zinc-500"
                }
            />
          </form>
          <div className={" h-[30%]"}>
            <p
                className={`w-full text-center grid place-items-center ${
                    reveal ? "visible" : "hidden"
                } my-4 ${right ? "text-green-500" : "text-red-500"} text-3xl`}
            >
              {words[num].answer}
            </p>
          </div>
        </div>
        {words.map((item, index) => (
            <p
                className={"w-full text-center my-4"}
                key={index}
                style={{
                  color: item.done
                      ? "green"
                      : item.wrong === 0
                          ? index === num
                              ? "blue"
                              : "white"
                          : "red",
                }}
            >
              {item.word + " " + item.answer + " " + item.wrong + " " + item.done}
            </p>
        ))}
      </div>
  );
}

export default App;