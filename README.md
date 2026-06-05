# TypeScript Vehicle Interface & Class

A simple TypeScript exercise demonstrating interfaces and classes.

## Concepts Covered
- Defining TypeScript interfaces
- Implementing classes from interfaces
- Compiling TypeScript to JavaScript

## Setup

```bash
npm install
```

## Run with Vite (Browser)

```bash
npm run dev
```
Open the browser console to see the output.

## Compile & Run in Terminal

```bash
npx tsc src/main.ts
node src/main.js
```

## Expected Output
Car engine started

## Code Overview

- `Vehicle` — interface with `make`, `model`, `year`, and `start()` method
- `Car` — class that implements `Vehicle` and logs `"Car engine started"` when `start()` is called