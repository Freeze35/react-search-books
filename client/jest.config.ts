/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  "testMatch": [
    "**/src/tests/*.+(ts|tsx|js|jsx)",
  ],
  transformIgnorePatterns: [
      "node_modules/(?!axios)"],
  //Identity our css|sass ues library
  moduleNameMapper: {
    "\\.(css|sass|less|scss|svg)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
  ],
  /*"transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg"
  }*/
  /*transform: {
    "^.+\\.svg$": "<rootDir>/src/tests/transformers/svgTransform.js",
  }*/
  transform: {
    "^.+\\.tsx$": "ts-jest",
    "^.+\\.ts$": "ts-jest",
  }
};