import { useState } from "react";

const questions = [
  {
    question: "_______you interested in sport?",
    options: ["be", "am", "is", "are"],
    answer: "are",
  },
  {
    question: "My_____ is a writer and his books are very popular.",
    options: ["aunt", "uncle", "sister", "mother"],
    answer: "uncle",
  },
  {
    question: "Paul is very _____. He’s very good at art.",
    options: ["honest", "friendly", "polite", "creative"],
    answer: "creative",
  },
];

function GeneralTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="flex items-center justify-center w-full max-w-5xl mx-auto bg-white rounded-[30px] py-11 shadow-[15px_15px_40px_0px_rgba(255,0,0,0.3)] border border-[rgba(236,0,0,1)] ">
      {showResult ? (
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Sizning natijangiz:
          </h2>
          <p className="text-2xl font-semibold text-center">
            {score} / {questions.length}
          </p>
          <button
            onClick={restartQuiz}
            className="mt-6 mx-auto bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            Qayta boshlash
          </button>
        </div>
      ) : (
        <div className="px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            <span>{currentQuestion + 1}) </span>
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="block w-full bg-gray-100 hover:bg-red-500 hover:text-white text-gray-800 py-3 rounded-xl text-lg font-medium transition-all shadow-md"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GeneralTest;
