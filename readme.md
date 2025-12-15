# Stonewall Password Generator

A modern, secure password generator that creates strong, guess-proof passwords with varying difficulty levels.

## 🌟 Features

- **Random Password Generation**: Creates two unique passwords simultaneously
- **Difficulty Levels**: Automatically categorizes passwords as "Good", "Very Good", or "Excellent"
- **Secure Characters**: Uses a combination of:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special symbols (~!@#$%^&*()_+-=, etc.)
- **Responsive Design**: Clean, modern interface
- **Accessibility**: ARIA labels for screen readers

## 🚀 Live Demo

Simply open `index.html` in any modern web browser to start generating passwords.

## 📁 Project Structure
├── index.html # Main HTML document
├── script.js # Password generation logic
├── styles.css # Styling (not provided in current files)
└── README.md # This file


## 🔧 How It Works

1. **Password Generation**:
   - Randomly selects password length between 12-40 characters
   - Uses four character sets: numbers, lowercase, uppercase, and symbols

2. **Difficulty Calculation**:
   - **Good**: 12-20 characters
   - **Very Good**: 21-30 characters
   - **Excellent**: 31-40 characters

3. **User Interface**:
   - Click "Generate" to create two new passwords
   - View password difficulty and length for each generated password
   - Clear display for easy copying

## 🛠️ Installation & Usage

1. Clone or download the repository
2. Ensure all files are in the same directory:
   - `index.html`
   - `script.js`
   - `styles.css`
3. Open `index.html` in your web browser
4. Click the "Generate" button to create secure passwords
const randomDifficulty = Math.floor(Math.random() * (40 - 12 + 1) + 12)
