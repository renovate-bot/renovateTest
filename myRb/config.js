let githubToken = process.env.RENOVATE_FULL
module.exports = {
  token: githubToken,
  platform: 'github',
  logLevel: 'debug',
  onboardingConfig: {
    extends: ['config:base'],
  },
  repositories: ['raduspa/renovateTest'],
  onboarding: false,
  printConfig: true,
  requireConfig: false,
};
