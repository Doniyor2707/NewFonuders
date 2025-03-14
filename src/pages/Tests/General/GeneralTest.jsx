import { useState } from "react";
import questions from "../questions.json"; // JSON faylni import qilish

function GeneralTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Tanlangan variant

  const handleAnswer = (selectedOption) => {
    if (!selectedOption) return; // Agar allaqachon bosilgan bo'lsa, hech narsa qilmaydi
    setSelectedOption(selectedOption); // Variantni belgilash

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null); // Keyingi savolga o'tishda variantni tozalash
      } else {
        setShowResult(true);
      }
    }, 500); // Yarim soniya delay
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="flex items-center justify-center w-full max-w-5xl mx-auto bg-white rounded-[30px] py-11 shadow-[15px_15px_40px_0px_rgba(255,0,0,0.3)] border border-[rgba(236,0,0,1)]">
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 border-l-4 border-red-500 pl-4">
            <span className="text-red-500">{currentQuestion + 1})</span>{" "}
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedOption !== null} // Agar bitta bosilgan bo'lsa, disable
                className={`block w-full py-3 rounded-xl text-lg font-medium transition-all shadow-md ${
                  selectedOption === option
                    ? "bg-red-500 text-white" // Bosilgan variant qizil bo'ladi
                    : "bg-gray-100 text-gray-800"
                }`}
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
