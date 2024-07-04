# Palindrom App

## Overview

Palindrom is a Pomodoro timer app designed to help you manage your work and break intervals efficiently. It features a user-friendly interface with a visual timer, work and break buttons, and control buttons to play, pause, and reset the timer.

## Features

- **Pomodoro Timer**: Standard 25-minute work intervals.
- **Break Timer**: Short 5-minute breaks.
- **Control Buttons**: Play, pause, and reset the timer.
- **Visual Feedback**: Active states and time display.

## Technologies Used

- **Frontend**: React
- **Styling**: CSS

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abdelrahman-mohammed1/Palindrom.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Palindrom
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app:
   ```bash
   npm run dev
   ```

## Usage

1. **Start the Timer**: Click the "Pomodoro" button to start a 25-minute work interval or the "Short Break" button for a 5-minute break.
2. **Control the Timer**: Use the play, pause, and reset buttons to control the timer.
3. **View Time**: The remaining time is displayed in the center of the app.

## Components

- `App.js`: Main component that handles state and renders the timer.
- `ButtonWork.js`: Button to select work intervals.
- `ButtonBreak.js`: Button to select break intervals.
- `Timer.js`: Timer component to display the countdown.
- `Time.js`: Component to calculate and display minutes and seconds.
- `Footer.js`: Contains control buttons for play, pause, and reset.
- `Message.js`: Displays a message when the time ends.

## Conclusion

The Palindrom App provides an effective way to manage work and break times using the Pomodoro technique. Its simple interface and clear visual feedback make it easy to stay on track and productive. Feel free to contribute to this project by submitting issues or pull requests on the GitHub repository.
