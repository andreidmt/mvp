module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  collectCoverageFrom: ["./src/**/*.{ts,tsx}", "!./src/**/*.test.{ts,tsx}"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
    },
  },
  coverageReporters: ["lcov", "text"],
  reporters:
    process.env["CI"] !== "true"
      ? ["default"]
      : [
          "default",
          [
            "jest-junit",
            {
              suiteName: "Unit tests - @r3wy/react",
              outputDirectory: "./test_reports/r3wy_unit_tests",
              outputName: "junit.xml",
            },
          ],
        ],
}
