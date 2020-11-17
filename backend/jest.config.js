const { resolve } = require('path');
const root = resolve(__dirname);

console.log(root);
module.exports = {
    rootDir: root,
    displayName: 'TEST',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    testEnvironment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {},
};
