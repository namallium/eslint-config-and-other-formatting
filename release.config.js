module.exports = {
  branches: ['main'],
  repositoryUrl:
    'git@github.com:namallium/eslint-config-and-other-formatting.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
};
