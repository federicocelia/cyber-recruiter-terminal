# Cyber Recruiter Terminal

![Demo](terminal-recruiter.gif)

A visual UI experiment that simulates a recruitment system evaluating a candidate in real time.

The experience transitions from executable code into a structured terminal interface, presenting a final hiring decision based on predefined logic.

---

## Overview

This project treats a developer profile as a system process rather than a static description.

The flow:

- Code initializes a candidate profile
- System updates contextual “market” data
- Evaluation logic determines fit and impact
- A terminal-style output renders the final decision

The result is a controlled, cinematic representation of a hiring evaluation.

---

## Features

- Code typing animation (character-by-character)
- Transition into terminal-style interface
- Structured output with multiple sections:
  - Profile summary
  - Skill stack
  - Evidence
  - Fit matrix
  - Final authorization
- Neon-styled UI with subtle scanline effect
- Auto-scrolling terminal without visible scrollbar

---

## Tech Stack

- HTML
- CSS (custom neon styling, UI effects)
- Vanilla JavaScript (animation logic)

No frameworks or external libraries.

---

## Run Locally

Clone the repository:

```bash
git clone https://github.com/federicocelia/cyber-recruiter-terminal.git
cd cyber-recruiter-terminal

```

Open:
Shellindex.html

---

## Configuration

Animation timing is controlled in app.js:

const CODE_DELAY_MS
const CODE_PAUSE_MS
const LINE_DELAY_MS
const FINAL_PAUSE_MS

## Project Structure

.
├── index.html
├── styles.css
├── app.js
└── README.md

## Use Cases

Portfolio highlight
LinkedIn video/banner
Frontend animation demo
Personal branding project

## License

This is a personal project.

You are welcome to use, modify, and build upon it freely. If it helps you or inspires you, feel free to adapt it and make it your own.

No restrictions — just have fun with it.
