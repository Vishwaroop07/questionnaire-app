# React Quiz Application

This is a simple quiz application built using **React**. The quiz displays multiple-choice questions and provides a timer for answering each question. After submitting an answer, the user can see whether the answer was correct or incorrect, and move to the next question. The quiz tracks the score and displays the final results at the end.

## Features

- Multiple-choice quiz with hardcoded questions.
- Timer for answering each question (60 seconds per question).
- Immediate feedback on correct/incorrect answers.
- Option to move to the next question after submitting an answer.
- Final score displayed at the end of the quiz.
- Responsive design for mobile and desktop screens.

## Prerequisites

Before running the project, make sure you have the following installed on your machine:

- **Node.js**: Download and install from [here](https://nodejs.org/).
- **npm**: This typically comes with Node.js. You can verify the installation by running the following command in your terminal:
  ```bash
  npm -v
  ```

## How to Run the Project

### 1. Clone the Repository

First, clone the repository to your local machine by running the following command in your terminal:

```bash
git clone https://github.com/yourusername/react-quiz-app.git
```

Then, navigate into the project directory:

```bash
cd react-quiz-app
```

### 2. Install Dependencies

Next, install the dependencies needed for the project:

```bash
npm install
```

This will install React and other required libraries specified in `package.json`.

### 3. Start the Development Server

To run the application in development mode, use the following command:

```bash
npm start
```

This will start the development server, and the application will automatically open in your browser at `http://localhost:3000`.

### 4. Running the Quiz

Once the application is running:

1. You will see a series of multiple-choice questions.
2. Each question comes with four options. Click on one of the options to select your answer.
3. After selecting an option, click "Submit." If your answer is correct, it will be highlighted in green; if incorrect, the correct answer will be highlighted in green and your wrong answer in red.
4. After submitting an answer, the "Submit" button changes to "Next." Click it to move to the next question.
5. You have 60 seconds to answer each question. If time runs out, you will receive an alert to reload the page.
6. After completing all the questions, you will see your final score.

### 5. Restarting the Quiz

Once you have completed the quiz, you can restart it by clicking the "Try Again" button, which will reload the page and reset the quiz.

## Project Structure

- **`src/Questionnaire.js`**: Contains the core logic of the quiz, including the questions, timer, answer selection, and feedback mechanism.
- **`src/App.js`**: Main entry point where the `Questionnaire` component is rendered.
- **`src/App.css`**: Contains the styling for the quiz interface, ensuring a clean and responsive UI.

## Modifying Questions

You can modify the hardcoded questions inside `src/Questionnaire.js`. Simply add or modify objects in the `questions` array, where each object represents a question:

```js
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
  // Add more questions here
]);
```

Each question object should include:
- `questionText`: The question to display.
- `options`: An array of possible answers.
- `correctAnswer`: The index (starting from 0) of the correct answer in the `options` array.

## Additional Commands

- **To stop the development server**, press `Ctrl + C` in the terminal.
- **To build the app for production**, run:
  ```bash
  npm run build
  ```
  This will create an optimized production build of the app in the `build/` folder.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the quiz interface.
- **JavaScript**: For handling the quiz logic and user interactions.

## Troubleshooting

If you encounter any issues while installing or running the project:

- Make sure **Node.js** and **npm** are installed correctly.
- Run `npm install` again to ensure that all dependencies are installed.
- Ensure that no other application is running on port 3000 (the default port for React apps). If it is, either stop the application or modify the port by running `npm start` on a different port:
  ```bash
  PORT=3001 npm start
  ```
