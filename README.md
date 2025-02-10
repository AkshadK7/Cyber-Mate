# Cyber-Mate

A React and Firebase-based chat application that detects and filters offensive messages and users.

## Overview

Cyber-Mate is a real-time chat application built with React and Firebase. It focuses on user safety by implementing features that detect and filter offensive content, ensuring a respectful communication environment.

## Repository Contents

- `functions/`: Contains Firebase Cloud Functions for backend processing.
- `public/`: Public assets and the main HTML file.
- `src/`: Source code for the React application.
- `.firebaserc`: Firebase project configuration.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `firebase.json`: Firebase project settings.
- `package-lock.json` & `package.json`: Node.js dependencies and scripts.
- `README.md`: Project documentation.

## Requirements

- Node.js
- npm (Node Package Manager)
- Firebase CLI

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AkshadK7/Cyber-Mate.git
   cd Cyber-Mate
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Firebase Configuration**:
   - Ensure you have a Firebase project set up.
   - Update the Firebase configuration in the project to match your Firebase project settings.

4. **Start the Application**:
   ```bash
   npm start
   ```
   The application will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- **Running the App**:
  - Use `npm start` to run the application in development mode.
  - The app will automatically reload if you make edits.
  - Lint errors and other issues will be displayed in the console.

- **Testing**:
  - Use `npm test` to launch the test runner in interactive watch mode.

- **Building for Production**:
  - Use `npm run build` to build the app for production. The optimized build will be in the `build` folder.

## Offensive Content Detection

The application includes mechanisms to detect and filter offensive messages. Offensive users can be flagged or restricted to maintain a safe chat environment.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/AkshadK7/Cyber-Mate/blob/master/LICENSE) file for details.

## Acknowledgements

Special thanks to the open-source community and contributors for their support and resources.
```

* Note: Ensure that the Firebase configuration is correctly set up to match your project settings. If not already done, you may need to initialize Firebase in your project and configure the necessary settings. * 
