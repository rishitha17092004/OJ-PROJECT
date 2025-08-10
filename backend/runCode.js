const path = require("path");

const runners = {
  python: "./runners/python_runner.sh",
  cpp: "./runners/cpp_runner.sh",
  java: (code, input) =>
    `docker run --rm -i -v ${path.resolve(__dirname, "runners")}:/app -w /app ` +
    `-e CODE=${JSON.stringify(code)} -e INPUT=${JSON.stringify(input)} openjdk:21-slim`
};

// Usage example:
try {
  const language = "java"; // or from input
  const code = process.env.CODE || "";  // or wherever you get it
  const input = process.env.INPUT || "";

  const runnerCmd = runners[language](code, input);
  const output = execSync(runnerCmd, { timeout: 5000, encoding: "utf-8", input: '' });

  console.log(output);
} catch (error) {
  console.error("Runtime Error:", error.message);
}
