module.exports = {
    "jest": {
      "roots": [
        "<rootDir>/src"
      ],
      "transform": {
        ".(ts|tsx)": "ts-jest"
      },
      "testEnvironment": "jsdom",
      "setupFilesAfterEnv": [
        "./src/setupTests.tsx"
      ],
      "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
      "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
      ],
      "coveragePathIgnorePatterns": [
        "/node_modules/",
        "/src/index.ts",
        "/src/jest.utils.tsx",
        "/src/theme"
      ],
      "coverageThreshold": {
        "global": {
          "branches": 90,
          "functions": 95,
          "lines": 95,
          "statements": 95
        }
      },
    "snapshotSerializers": ["enzyme-to-json/serializer"],
   }, 
  }