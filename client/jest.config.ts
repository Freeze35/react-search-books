/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "testMatch": [
    "**/src/tests/*.+(ts|tsx|js|jsx)",
  ],
  transformIgnorePatterns: [
      "node_modules/(?!axios)"],
  //Identity our css|sass ues library
  moduleNameMapper: {
    "\\.(css|sass|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "@testing-library/jest-dom"
  ],
  /*"transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg"
  }*/
  /*transform: {
    "^.+\\.svg$": "<rootDir>/src/tests/transformers/svgTransform.js",
  }*/
  transform: {
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  }
};