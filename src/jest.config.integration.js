module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.testimage\\.tsx$',
  setupFilesAfterEnv: ['./setupTests.ts'],
};
