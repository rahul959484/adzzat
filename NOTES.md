# What I Checked

- Both task statements, starter files, expected behavior, difficulty levels, and difficulty notes
- Correct and deliberately incorrect implementations against both Jest graders
- Harbor-format task container builds and reward-file outputs for included reference solutions
- Harbor-format task containers return reward `0` with the unmodified starter code
- Harbor task images do not contain verifier tests before the verification phase
- Normal, alternate normal, edge, and empty/invalid input cases
- Express `/api/tasks` task response
- React task list, selected task, statement, and environment rendering
- Starter and dependency setup commands

# What I Changed

- Corrected task 1 arithmetic expectations found during grading
- Split normal, edge, and invalid-input cases into separate tests
- Kept Dockerfiles small and based on `node:22-alpine`
- Kept the frontend and backend free of databases and authentication

# Ambiguities

- Harbor-format Docker checks passed with reward `1` for each included reference solution; both starter implementations produced reward `0`
- Harbor-format task images keep grader test code out of the agent's initial container filesystem; the verifier supplies tests only for grading
- Harbor CLI/oracle runs and AI-agent trials were not performed. The task artifacts use Harbor's documented format and their Docker verifiers were exercised, but this is not evidence of running through the Harbor harness or an external company's RL platform
- The applicant should personally attempt/walk through both tasks and record their own observations before submission

# What I Would Do Next

- Install Harbor and run its Oracle agent against both local task directories
- If available, test with a free AI agent and honestly document the resulting trial
- Add one more edge case only if manual review finds a real ambiguity

# AI Tools Used

GitHub Copilot was used for brainstorming, implementation, debugging, test-case suggestions, and documentation. Docker verifiers and app commands were run in the development environment. The applicant still needs to review and understand the implementation and personally attempt/walk through the tasks; no Harbor CLI or AI-agent trial is claimed.
