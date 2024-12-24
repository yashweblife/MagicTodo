# MagicTodo

## Project Description
MagicTodo is a web application designed to help users manage their tasks and to-do lists efficiently. It allows users to create, update, and delete tasks, as well as organize them into different categories. The application is built using React and Firebase, providing a seamless and responsive user experience.

## Installation Instructions
To set up the development environment for MagicTodo, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yashweblife/MagicTodo.git
   ```

2. Navigate to the project directory:
   ```
   cd MagicTodo/webapp
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project and copy the Firebase configuration.
   - Create a `.env` file in the `webapp` directory and add the following environment variables:
     ```
     VITE_FIREBASE_KEY=<your-firebase-api-key>
     ```

## Usage Instructions
To run the project locally, follow these steps:

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to access the MagicTodo application.

## Contribution Guidelines
We welcome contributions to MagicTodo! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```
   git checkout -b my-feature-branch
   ```

3. Make your changes and commit them with a descriptive commit message:
   ```
   git commit -m "Add new feature"
   ```

4. Push your changes to your forked repository:
   ```
   git push origin my-feature-branch
   ```

5. Create a pull request to the main repository, describing your changes and the problem they solve.
