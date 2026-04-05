# Calculator

A fully functional browser-based calculator built with vanilla JavaScript as part of a structured full-stack engineering roadmap.

---

## Overview

This project was built as the second milestone in the JavaScript phase of a self-directed, one-year full-stack engineering program. The goal was not just a working calculator it was to apply core JavaScript concepts in a real, interactive environment: state management, event-driven logic, edge case handling, and clean DOM manipulation without any frameworks or libraries.

---

## Features

- Basic arithmetic: addition, subtraction, multiplication, division
- Decimal input with duplicate-dot prevention
- DEL button — removes the last character
- AC button — full state reset
- Chained calculations — result of one operation carries into the next
- Division by zero handled (`Undefined`)
- Floating point results rounded to 2 decimal places
- Guard against operator click on empty display

---

## Built With

| Tool                 | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| HTML5                | Semantic structure and button layout            |
| CSS3                 | Layout and visual styling                       |
| JavaScript (Vanilla) | All logic, DOM manipulation, and event handling |

No frameworks. No libraries. No shortcuts.

---

## Concepts Applied

- `querySelectorAll` with attribute selectors for bulk event binding
- Closure-safe loop listeners
- String methods: `slice()`, `includes()`
- Type coercion: `Number()`, `String()`
- State variables across multiple event handlers
- Early `return` as a guard clause pattern
- `Number.isInteger()` and `.toFixed()` for output formatting

---

## Roadmap Context

This calculator is part of a larger 12-month self-taught full-stack engineering program:

| Phase                              | Status          |
| ---------------------------------- | --------------- |
| HTML & CSS                         | ✅ Completed    |
| JavaScript Fundamentals + Projects | 🚧 In Progress  |
| Git & GitHub                       | ⏳ Up Next      |
| Advanced JS + NPM                  | ⏳ Planned      |
| React (Vite)                       | ⏳ Planned      |
| Node.js + Express + MongoDB        | ⏳ Planned      |
| Linux & Bash Scripting             | ⏳ Planned      |
| Full Stack + Networking            | ⏳ Planned      |
| Career Preparation                 | ⏳ Planned      |
| Machine Learning (Python)          | ⏳ Post-Roadmap |

Upcoming JavaScript projects before moving to the next phase: Quiz App, Weather App (Fetch API + Async/Await).

---

## What I Learned

Building this forced me to think about state — what data exists, who owns it, and when it changes. Managing `firstNumber`, `secondNumber`, `operator`, and `result` across separate event listeners made the concept of application state concrete before ever touching a framework.

Edge cases (empty input, division by zero, chained operations, decimal validation) were not afterthoughts — they were identified through testing and fixed systematically.

---

## Author

**Taha_Belghiti** — self-taught developer, Morocco.
Building toward remote full-stack engineering. No degree. Portfolio is the credential.

> GitHub profile: https://github.com/tahaviw
