# Quiz App

This is a simple quiz application built using **React**, which fetches multiple-choice questions from the Open Trivia Database API and allows users to answer them within a limited time frame. After completion, users can see their score and restart the quiz.

## Features

- Fetches dynamic quiz questions from the [Open Trivia Database](https://opentdb.com/api_config.php).
- Time-limited quiz questions.
- Displays results at the end of the quiz.
- Allows users to restart the quiz after completion.

## Prerequisites

Before running this project, make sure you have the following installed on your system:

- **Node.js**: Download and install from [here](https://nodejs.org/).
- **npm**: This typically comes with Node.js. You can check if npm is installed by running the following command in your terminal:
  ```bash
  npm -v
  ```

## How to Run the Project

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/quiz-app.git
```

Navigate into the project directory:

```bash
cd quiz-app
```

### 2. Install Dependencies

To install all necessary dependencies, run the following command:

```bash
npm install
```

This will install the React framework and any other dependencies specified in `package.json`.

### 3. Start the Development Server

Once all dependencies are installed, you can start the development server with:

```bash
npm start
```

This will start the application and open it in your default web browser at `http://localhost:3000`.

### 4. Running the Application

After starting the development server:

1. The application will fetch quiz questions from the Open Trivia Database API.
2. You will see a series of questions with multiple options.
3. Select an answer and click "Submit."
4. If the answer is correct, it will be highlighted in green. If incorrect, the correct answer will be shown in green, and your selected option will be shown in red.
5. After each question, click "Next" to move to the following question.
6. Once you complete all questions, your final score will be displayed. You can then choose to restart the quiz.

### 5. Restarting the Quiz

After completing the quiz, you can click the "Try Again" button to reload the quiz with new questions from the API.

## Additional Commands

- **To stop the development server**, press `Ctrl + C` in the terminal where the server is running.
- **To rebuild the app for production**, use:
  ```bash
  npm run build
  ```
  This will create an optimized production build of the app in the `build/` folder.

---

### Notes:

- This project fetches questions dynamically from the **Open Trivia Database API**. The number of questions fetched can be modified by adjusting the `amount` parameter in the API URL in `Questionnaire.js`.
- The project is designed to work with any browser. Ensure you have an updated version of Chrome, Firefox, or Edge for optimal performance.

### Troubleshooting

If you encounter issues during installation or while running the application, try the following:

- Ensure that **Node.js** and **npm** are installed correctly.
- Run `npm install` again to ensure all packages are properly installed.
- If the app doesn't open automatically in the browser, navigate manually to `http://localhost:3000` in your browser.

---

This guide should help you run the project smoothly. You can add or modify sections based on your specific environment or use case. Let me know if you need any further details!
