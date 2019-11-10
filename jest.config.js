module.export = {
  clearMocks: true,
  moduleFileExtensions: ["js"],
  setupFilesAfterEnv: [
    "<rootDir>/spec/setup.js"
  ],
  testRegex: "/spec/.*\\.(spec).(js)$",
  testPathIgnorePatterns: [
    /node_modules/
  ]
}
