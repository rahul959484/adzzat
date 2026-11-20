# Harbor Tasks

These two tasks use the Harbor task directory format: `task.toml`, `instruction.md`, `environment/Dockerfile`, `tests/test.sh`, and `solution/solve.sh`. Agent images contain the starter program and Jest, but not the grader test file. Harbor supplies `tests/` during verification, and the script removes its temporary test copy afterward so the grader is not in the agent's initial workspace.

## Tasks

- `tasks/invoice-calculation` — language-driven invoice bug fix
- `tasks/completed-orders` — outcome-driven order processing task

## Run with Harbor

Install Harbor following its official instructions: <https://github.com/harbor-framework/harbor#installation>.

Run the included oracle solutions locally (no model API key is needed):

```powershell
harbor run -p ./harbor/tasks/invoice-calculation -a oracle
harbor run -p ./harbor/tasks/completed-orders -a oracle
```

To evaluate an actual AI agent, configure an agent and its model credentials per Harbor's documentation, then run with that agent. No AI-agent trial has been run or claimed for this project.

## Validation performed here

The Harbor-format task environment Dockerfiles were built. Each reference solution produced reward `1`; each unmodified starter produced reward `0`. The grader test files were also confirmed absent from the agent images before verification. This validated the container and reward-script behavior directly; the Harbor CLI itself was not installed or used, so no Harbor CLI or AI-agent trial is claimed.
