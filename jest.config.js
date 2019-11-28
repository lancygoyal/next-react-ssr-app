const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!*.{js,ts}",
    "!**/*.d.ts",
    "!**/*styles.{ts, tsx}"
  ],
  setupFiles: ["<rootDir>/jest.setup.js"],
  testRegex: TEST_REGEX,
  testURL: "http://localhost/",
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/coverage"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  coverageDirectory: "<rootDir>/coverage/test-results/",
  coveragePathIgnorePatterns: ["<rootDir>/__tests__", "<rootDir>/coverage"]
};
