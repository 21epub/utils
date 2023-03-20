// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: require.resolve('@21epub/configs/eslint-config'),
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
