let githubToken = process.env.SECRET_TOKEN
module.exports = {
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
