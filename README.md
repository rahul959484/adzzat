# Overview

This repository contains two small Terminal-Bench-style coding tasks, Jest graders, Dockerfiles, Harbor-format task packages, and a minimal React + Express page. It demonstrates task creation, automated validation, and basic full-stack integration without a database or cloud services.

# Tech Stack

- Node.js 22
- Express
- React
- Vite
- Jest
- Docker

# Project Structure

```text
adzzat-assignment/
├── tasks/
│   ├── task-1/   # language-driven invoice task
│   └── task-2/   # outcome-driven order task
├── harbor/       # Harbor-format copies for agent evaluation/RL workflows
├── server/       # Express API
├── client/       # React/Vite page
├── README.md
└── NOTES.md
```

# Setup

From the repository root:

```powershell
cd server
npm install

cd ..\client
npm install

cd ..\tasks\task-1\grader
npm install

cd ..\..\task-2\grader
npm install
```

# Run the Full-Stack App

Start the backend:

```powershell
cd server
npm start
```

The API runs at `http://localhost:3001`.

Start the frontend in another terminal:

```powershell
cd client
npm run dev
```

Open the Vite URL printed in the terminal, usually `http://localhost:5173`.

# Tasks

**Task 1 — Fix Invoice Calculation:** explicitly asks the candidate to fix a JavaScript function, apply quantities and tax, validate input, and round correctly.

**Task 2 — Process Completed Orders:** asks for an outcome, with filtering, validation, sorting, and input edge cases but without prescribing implementation details.

# Running Graders

Task 1:

```powershell
cd tasks\task-1\grader
npm test
```

To test a specific implementation:

```powershell
$env:TARGET_FILE='../solution/invoice.js'
npm test

$env:TARGET_FILE='../solution/incorrect.js'
npm test
```

Task 2:

```powershell
cd tasks\task-2\grader
npm test
```

To test a specific implementation:

```powershell
$env:TARGET_FILE='../solution/orders.js'
npm test

$env:TARGET_FILE='../solution/incorrect.js'
npm test
```

# Docker

Build the task grader images from the repository root. To run the grader against the included reference solution, mount that solution folder into the container and set `TARGET_FILE`:

```powershell
docker build -t adzzat-task-1 ./tasks/task-1
docker run --rm -e TARGET_FILE=../solution/invoice.js -v "${PWD}\tasks\task-1\solution:/app/solution:ro" adzzat-task-1

docker build -t adzzat-task-2 ./tasks/task-2
docker run --rm -e TARGET_FILE=../solution/orders.js -v "${PWD}\tasks\task-2\solution:/app/solution:ro" adzzat-task-2
```

The starter files are intentionally incomplete, so running the grader without a solution mounted is expected to fail. For another candidate implementation, mount its folder at `/app/solution` and set `TARGET_FILE` to the implementation's path inside that folder.

Docker was installed and available during the final check. Both task images built, and the grader containers were run against the reference solutions; see `NOTES.md` for results.

# Harbor / RL Task Format

Harbor-format copies of both tasks are in `harbor/tasks/`. They include Harbor metadata, agent instructions, Docker environments, reward-producing verifiers, and oracle solution scripts. Install Harbor following its [official instructions](https://github.com/harbor-framework/harbor#installation), then run the included no-model oracle solutions:

```powershell
harbor run -p ./harbor/tasks/invoice-calculation -a oracle
harbor run -p ./harbor/tasks/completed-orders -a oracle
```

The Harbor-format Docker environments and reward scripts were tested directly with the included solutions. Harbor CLI execution and actual AI-agent trials were not run. These artifacts are Harbor-format; they do not prove the tasks were run inside an external company's RL platform.

# Grader Design

## Task 1

The grader checks quantities, tax, rounding, empty input, invalid items, and invalid tax values.

A candidate could shortcut by hardcoding the example result or ignoring quantities. The grader uses another normal invoice and additional quantity, tax, fractional, and invalid-input cases.

## Task 2

The grader checks filtering, sorting, invalid fields, empty/null input, and whether the input array is mutated.

A candidate could shortcut by hardcoding the first example's IDs or only filtering by status. Other orders and invalid values prevent that shortcut.

# Validation

The following manual checks were performed:

- Task 1 reference solution: 5 Jest tests passed.
- Task 1 deliberately incorrect solution: 4 of 5 tests failed.
- Task 1 starter was rejected by the grader.
- Task 2 reference solution: 4 Jest tests passed.
- Task 2 deliberately incorrect solution: 2 of 4 tests failed.
- Task 2 starter was rejected by the grader.
- Task 2 edge cases and input immutability were checked.
- Docker images and containers were tested against the reference solutions; details are recorded in `NOTES.md`.
- No free agent or Harbor CLI was used. Jest and the Harbor-format Docker verifiers were run against included reference and deliberately incorrect implementations. Before submission, the applicant should personally walk through solving each task and record their own observations.

# AI Usage

AI assistance (GitHub Copilot) was used for brainstorming, implementation, debugging, test suggestions, and documentation. The graders and application commands were run in the development environment, but the applicant should review, understand, personally walk through the tasks, and verify the final submission. This repository does not claim independent authorship or an AI-agent run.
