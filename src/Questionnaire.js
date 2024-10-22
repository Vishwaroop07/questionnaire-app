import React, { useState, useEffect } from 'react';
import './App.css';

const Questionnaire = () => {
  // State for multiple questions
  const [questions] = useState([
    {
      questionText: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: 2,
    },
    {
      questionText: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
    {
      questionText: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
      correctAnswer: 2,
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks current question
  const [time, setTime] = useState(60); // Timer state
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false); // To know if quiz is finished
  const [score, setScore] = useState(0); // Track the score

  // Current question
  const currentQuestion = questions[currentQuestionIndex];

  // Timer logic
  useEffect(() => {
    if (time > 0 && !submitted && !quizComplete) {
      const timerId = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (time === 0) {
      alert("Time is up! Please reload the page to try again.");
    }
  }, [time, submitted, quizComplete]);

  // Handle option selection
  const handleOptionClick = (index) => {
    if (!submitted) {
      setSelectedOption(index);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (selectedOption !== null) {
      setSubmitted(true);
      if (selectedOption === currentQuestion.correctAnswer) {
        setFeedback("correct");
        setScore(score + 1); // Increase score if correct
      } else {
        setFeedback("incorrect");
      }
    }
  };

  // Handle moving to the next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setSubmitted(false);
      setFeedback(null);
      setTime(60); // Reset timer for next question
    } else {
      setQuizComplete(true); // Mark quiz as complete if no more questions
    }
  };

  return (
    <div className="container">
      {/* If quiz is complete, show the result */}
      {quizComplete ? (
        <div className="results">
          <h2>Quiz Complete!</h2>
          <p>Your Score: {score}/{questions.length}</p>
          <button onClick={() => window.location.reload()} className="submit-btn">
            Try Again
          </button>
        </div>
      ) : (
        <>
          {/* Timer */}
          <div className="timer">Time Left: {time} seconds</div>

          {/* Question display */}
          <div className="question">{currentQuestion.questionText}</div>

          {/* Options display */}
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`option 
                  ${selectedOption === index ? 'selected' : ''} 
                  ${submitted && index === currentQuestion.correctAnswer ? 'correct' : ''} 
                  ${submitted && selectedOption === index && selectedOption !== currentQuestion.correctAnswer ? 'incorrect' : ''}`}
                disabled={submitted}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Submit or Next Button */}
          <button onClick={submitted ? handleNext : handleSubmit} className="submit-btn">
            {submitted ? (currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish') : 'Submit'}
          </button>
        </>
      )}
    </div>
  );
};

export default Questionnaire;
